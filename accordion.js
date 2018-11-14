function accordion() {
  var acc = document.getElementsByClassName('accordion');

  var i;

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click',function () {
      // when clicked on the section button, add/remove the active class to highlight the button that controls the section
      this.classList.toggle('active');

      // toggle between hiding and showing the active panel
      var section = this.nextElementSibling;

      if (section.style.maxHeight) {
          section.style.maxHeight = null;
      } else {
        section.style.maxHeight = section.scrollHeight + "px";
      }
    });
  }
}


//invoke the function
accordion();


//This example was built with a tutorial
