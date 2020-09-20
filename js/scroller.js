const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/* <script>
$(document).ready(function(){
  // Add smooth scrolling to all links
//  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
      // Prevent default anchor click behavior
//      event.preventDefault();

      // Store hash
//      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//      $('html, body').animate({
//        scrollTop: $(hash).offset().top
//      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
<<<<<<< HEAD
        window.location.hash = hash;
      });
    } // End if
  });
});
</script> */
=======
//        window.location.hash = hash;
//      });
//    } // End if
//  });
//});
//</script>
>>>>>>> 58f5634fedcb343908f50bae3d43b4f20edc0bb9
