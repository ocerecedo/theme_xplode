define(['core/js/adapt'], function(Adapt) {
	
	// add ie8 fallback
	Adapt.on('app:dataReady', checkIE8);

	var ie8BgElm;

	function checkIE8() {
		var $html = $('html');
		var isIE8 = $html.hasClass('ie8');

		if (!isIE8) {
			return;
		}
		
		ie8BgElm = document.createElement('div');
		ie8BgElm.id = 'ie8-bg-elm';

		document.getElementById('wrapper').appendChild(ie8BgElm);

		Adapt.on('router:page', handlePage);
		Adapt.on('router:menu', handleMenu);
	}

	function handlePage (model) {
		var classes = model.get('_classes');
		ie8BgElm.setAttribute('class', classes);
	}

	function handleMenu (model) {
		ie8BgElm.setAttribute('class', 'menu');
	}

});
