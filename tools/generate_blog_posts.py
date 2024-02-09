import os
import io


def get_md_meta_data(file: io.TextIOWrapper) -> dict[str:any]:
    """Gathers metadata from a md file (TextIOWrapper); removes both '---' from the stream"""
    meta_data = {}
    file.readline()  # remove ---
    for line in file:
        if line == "---\n":
            break

        key_value = line.split(": ")
        meta_data[key_value[0]] = key_value[1].removesuffix("\n")

    return meta_data


def write_html_meta_data(
    file_html: io.TextIOWrapper, template: io.TextIOWrapper, meta_data: dict
) -> None:
    """copy metadata from md to file_html using template"""
    # parse template
    for _ in range(3):
        file_html.write(template.readline())

    # parse dynamic pieces of header
    for item in ["title", "title", "description", "image", "author"]:
        title_line = template.readline().split("placeholder")
        file_html.write(title_line[0] + meta_data[item] + title_line[1])

    # fill in the rest of the static aspects
    for _ in range(15):
        file_html.write(template.readline())

    return


def write_html_file_contents(
    file_html: io.TextIOWrapper, file_md: io.TextIOWrapper
) -> None:
    # write actual contents
    # fill template
    for line in file_md:
        # title
        if line.startswith("# "):
            # TODO: write this as a actual html block
            # file_html.write(line.removeprefix("# "))
            pass

        # subheading
        if line.startswith("## "):
            pass

        # don't add random spacing
        if line == "\n":
            continue

    # close up tags
    file_html.writelines(["\t\t</div>\n", "\t<body>\n", "</html>\n"])
    return


def create_html_file(
    filename_md: str, meta_data: dict, BLOG_DIR: str = "blog/articles/"
):
    """create html file from template and write contents from md file"""
    # create/open files
    filename_html = filename_md.removesuffix(".md") + ".html"
    file_html = open(os.path.join(BLOG_DIR, filename_html), "w")
    file_md = open(os.path.join(BLOG_DIR, filename_md), "r")
    template = open(os.path.join(BLOG_DIR, "template.html"), "r")

    # write contents
    write_html_meta_data(file_html, template, meta_data)
    write_html_file_contents(file_html, file_md)

    # housekeeping
    file_html.close()
    file_md.close()
    template.close()


def main():
    BLOG_DIR = "blog/articles/"

    articles: list[str] = []
    # get all posts
    for file in os.listdir(BLOG_DIR):
        filename = os.fsdecode(file)
        if filename.endswith(".md") and filename != "template.md":
            articles.append(filename)

    # process file
    for filename_md in articles:
        # parse meta data
        file_md = open(os.path.join(BLOG_DIR, filename_md), "r")
        meta_data: dict[str:any] = get_md_meta_data(file_md)
        file_md.close()

        # skip file if not ready to publish
        if meta_data["publish"] == "false":
            continue

        # create article
        create_html_file(filename_md, meta_data, BLOG_DIR)

        return


main()
