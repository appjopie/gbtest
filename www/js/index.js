var bodymargin = 10;

function setContainer() {
			var container = $('#container');
			$('body').css({padding : bodymargin + 'px' });
			var containerWidth = $(window).width() - ( bodymargin * 2 );
			var containerHeight = $(window).height() - ( bodymargin * 2 );
			container.css({ width : containerWidth + 'px', height : containerHeight + 'px' });
			container.html(containerWidth + '-' + containerHeight);
			
}

$(document).ready(function() {
	setContainer();
});
