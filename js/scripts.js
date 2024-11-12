function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  var links = x.getElementsByTagName('a');
  
  // Remove the active class from all links
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }

  // Add the active class to the clicked link
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
  
  // Check the current page and add the active class to the appropriate link
  var currentPage = window.location.pathname;
  
  // Loop through all the links to match the current page with the href attribute
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === currentPage || 
        (currentPage === "/" && links[i].getAttribute('href') === "index.html")) {
      links[i].classList.add('active');
    }
  }
}