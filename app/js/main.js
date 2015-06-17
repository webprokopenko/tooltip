// "use strict";
// var tooltip = (function(){
// 	var setUpListeners = function(){
// 		$('form').on('submit',tooltip);
// 	},
// 	tooltip = function(e){
// 		e.preventDefault();

// 		var elems = $('form').find('input[tooltip],textarea[tooltip]');
// 		console.log(elems);

// 	};
// 	return{
// 		init: function(){
// 			setUpListeners();
// 		}
// 	}
// }());

// tooltip.init();

$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		$('.test').tooltip({
			position: 'top',
			contetnt: 'adfasdfasdf'
		})
	})
});


$.fn.tooltip = function(options){
	options = {
		position	: options.position || 'right',
		content		: options.content || 'I am tooltip' 
	};
	var
		markup = '<div class="tooltip tooltip_'+options.position+'">\
           <div class="tooltip_inner">'+options.content+'</div>\
       </div>';
    var
    	$this = this,
    	body = $('body');

    $this
    	.addClass('tooltipstered')
    	.attr('data-tooltip-position', options.position);

    body.append(markup);
    positionIt($this, body.find('.tooltip').last(), options.position);

    function positionIt(elem, tooltip, position){
    	//измеряем элемент

    	var
    		elemWidth 	= elem.outerWidth(true),
    		elemHeight 	= elem.outerHeight(true),
    		topEdge 	= elem.offset().top,
    		bottmEgde 	= topEdge + elemHeight;
    		leftEdge 	= elem.offset().top,
    		rightEdge	= leftEdge + elemWidth;

    	// изменяем тултип

    	var 
    		tooltipWidth 	= tooltip.outerWidth(true),
    		tooltipHeight 	= tooltip.outerHeight(true),
    		leftCentered	= (elemWidth / 2) - (tooltipWidth / 2),
    		topCentered		= (elemHeight / 2) - (tooltipHeight / 2);

    	// var position={};
    	
    	switch (position){
    		case 'right':
    			position = {
    				left: rightEdge,
    				top: topEdge + topCentered
    			};
    			break;
    		case 'top':
    			position = {
    				left: leftEdge + leftCentered,
    				top: topEdge - tooltipHeight
    			};
    			break;
    		case 'left':
    			position = {
    				left: leftEdge + leftCentered,
    				top: bottmEgde
    			};
    			break;
    		case 'bottom':
    			position = {
    				left: leftEdge - tooltipWidth,
    				top: topEdge + topCentered
    			};	
    			break;
    	};

    	tooltip.offset(position).css('opacity', '1');
    	console.log(position);
    }
};
