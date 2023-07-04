/* When the user scrolls down, hide the navbar.
When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// TODO: FIX: this later fr it's broke as hell
// // animate title under "Carter Watson" 
// let titles = ["cyclist", "test1", "software developer"];
// var title = document.getElementById("title");
// var titleIndex = 0;
// let speed = 50;

// function updateTitle() {
//   if (titleIndex == titles.length) { titleIndex = 0; }

//   let backspaceIndex = title.innerText.length;
//   let typeIndex = 0;

//   // for (var j = title.innerText.length; j > 1; j--) {
//   //   title.innerText = title.innerText.substring(0, j);
//   // }

//   // for (var k = 0; k < titles[titleIndex].length; k++) {
//   //   title.innerText += titles[titleIndex][k];
//   // }

//   var typing = true;
//   console.log("typing");//DBEUG
//   while (typing) {
//     typing = backspace();
//     // if (typing == undefined) { typing = true; }
//   }

//   typing = true;
//   while (typing) {
//     console.log("type");//DEBUG
//     typing = type();
//     // if (typing == undefined) { typing = true; }
//   }
//   typeIndex = 1000000000;

//   console.log("done typing");//DBEUG
//   titleIndex++;
  
//   function backspace() {
//     if (backspaceIndex > 1) {
//       backspaceIndex--;
//       title.innerText = title.innerText.substring(0, backspaceIndex);
//       setTimeout(backspace, speed);
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   function type() {
//     console.log("type");//DEBUG
//     if (typeIndex < titles[titleIndex].length) {
//       title.innerText += titles[titleIndex][typeIndex];
//       typeIndex++;
//       setTimeout(type, speed);
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// // updates to page
// // updateTitle();
// setInterval(updateTitle, 6000);
