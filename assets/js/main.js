	window.onscroll = function() {myFunction()};

		var header = document.getElementById("myHeader");
		var sticky = header.offsetTop;

		function myFunction() {
		  if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		  } else {
			header.classList.remove("sticky");
		  }
		}
jQuery(document).ready(function() {
    setTimeout(function() {
        jQuery(".preloader").remove();
        jQuery(".preloader-wrapper").removeClass();
    }, 2500);
});