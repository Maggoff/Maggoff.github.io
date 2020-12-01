$(document).ready(function () {

	let id = document.getElementById('fp-nav');
	id.innerHTML = '<ul class="footer"><li class="footer__btn"><a href="#main" class="active"></a></li><li class="footer__btn"><a href="#portfolio"><div class="fp-controlArrow fp-prev visible"></div>Portfolio<div class="fp-controlArrow fp-next visible"></div></a></li><li class="footer__btn"><a href="#skills">Skills</a></li><li class="footer__btn"><a href="#contact">Contact</a></li></ul>';

	$('.fp-controlArrow').on('click', function () {
		console.log("click");
	})

	$('img.img__svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

})