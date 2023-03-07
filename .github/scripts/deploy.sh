#!/usr/bin/env sh

# abort on errors
set -e

# build
# npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'cartwatson.com' > CNAME
echo 'www.cartwatson.com' > CNAME

# git init
# git checkout -b main
# git add -A
# git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:cartwatson/cartwatson.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
