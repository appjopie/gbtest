var bodymargin = 5;

function setContainer() {
			$('body').css({padding : bodymargin + 'px' });
			var containerWidth = $(window).width() - ( bodymargin * 2 );
			var containerHeight = $(window).height() - ( bodymargin * 2 );
			$('#container').css({ width : containerWidth + 'px', width : containerHeight + 'px' });
}

$(document).ready(function() {
	setContainer();
});
