
function toggle(id) {
    acc = document.getElementById(id);
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    acc.classList.toggle("active");
    console.log("Clicked");

    /* Toggle between hiding and showing the active panel */
    var panel = acc.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}
//run typewriter effect once DOM fully loads
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Hi! I\'m Tanvi.", "I'm studying computer engineering at the University of Michigan."];
  var locs = ["#header1", "#header2"];
  var speeds = [120, 40];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(speed, loc, text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(loc).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(speed, loc, text, i + 1, fnCallback)
      }, speed);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        //setTimeout(function() {
         // StartTextAnimation(0);
        //}, 20000);
        return;
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(speeds[i], locs[i], dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
  console.log("Done");
})

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
