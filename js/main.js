$(document).ready(function () {

	let id = document.getElementById('fp-nav');
	id.innerHTML = '<ul class="footer"><li class="footer__btn"><a href="#main" class="active"></a></li><li class="footer__btn"><a href="#portfolio"><div class="fp-controlArrow fp-prev visible"></div>Portfolio<div class="fp-controlArrow fp-next visible"></div></a></li><li class="footer__btn"><a href="#skills">Skills</a></li><li class="footer__btn"><a href="#contact">Contact</a></li></ul>';

	$('.fp-controlArrow').on('click', function () {
		console.log("click");
	})

})