"use strict";
var tooltip = (function(){
	var setUpListeners = function(){
		$('form').on('submit',tooltip);
	},
	tooltip = function(e){
		e.preventDefault();

		var $this = this,
            body = $('body'),
            elems = $('form').find('input[tooltip],textarea[tooltip]');

        for (var i=0, max=elems.length; i < max; i+=1) {
                console.log($(elems[i]));
                 var markup = '<div class="tooltip tooltip_'+$(elems[i]).attr('tooltip')+'">\
                            <div class="tooltip_inner">'+$(elems[i]).attr('tooltip-content')+'</div>\
                            </div>';

                body.append(markup);
                position_elem($(elems[i]), body.find('.tooltip').last(), $(elems[i]).attr('tooltip'));
            };    
	},
    position_elem = function(elem,tooltip,position){
        // определяем положение элемента к которому будет привязан тултип
        var elemWidth   = elem.outerWidth(true),
            elemHeight  = elem.outerHeight(true),
            topEdge     = elem.offset().top,
            leftEdge    = elem.offset().left,
            bottomEdge  = topEdge + elemHeight;
        // определяем размеры самого тултипа
        var tooltipWidth    = tooltip.outerWidth(true),
            tooltipHeight   = tooltip.outerHeight(true);

        if (position==='left') {
            position={
                left:(leftEdge-tooltipWidth),
                top:topEdge
            }
        }else if(position==='right'){
            position={
                left:(leftEdge+elemWidth),
                top:topEdge
            }
        }else if(position ==='top'){
            position={
                left:((leftEdge) + ((elemWidth/2) - (tooltipWidth/2))),
                top:((topEdge-tooltipHeight)-6)
            }
        }else if(position ==='bottom'){
            position={
                left:(leftEdge) + ((elemWidth/2) - (tooltipWidth/2)),
                top:(topEdge+tooltipHeight)
            }
        }
        console.log(position);

        tooltip.offset(position).css('opacity','1');

    };
	return{
		init: function(){
			setUpListeners();
		}
	}
}());

tooltip.init();
