function onClick(element) {
	document.getElementById("biggerImage").src = element.src;
	document.getElementById("onClickBiggerImage").style.display = "block";
}
$(document).ready(function() {
	var slideIndex = 1;
	displayImage(slideIndex);
	//alert("l");
	// Next/previous controls
	function plusSlides(n) {
		displayImage(slideIndex += n);
	}
	function displayImage(n) {
		var i;
		var slides = $('[name=hideImage]');
		//alert(slides.length);
		if ( n > slides.length ) {
			slideIndex = 1;
		}
		if ( n < 1 ) {
			slideIndex = slides.length;
		}
		//alert(12);
		for (i = 0; i < slides.length; i++) {
			$('[name=hideImage]').eq(i).addClass("display_none");
			//alert("k");
		}
		//alert(slideIndex);
		$('[name=hideImage]').eq(slideIndex-1).removeClass("display_none");
		//alert(12);
	}
	$('#nextImage').click(function() {
		displayImage(slideIndex += 1);
	});
	$('#prevImage').click(function() {
		displayImage(slideIndex -= 1);
	});
});
