
$.fn.inputfocus=function(params){params=$.extend({focus_class:"focus",value:""},params);this.each(function(){$(this).focus(function(){$(this).addClass(params.focus_class);this.value=(this.value==params.value)?'':this.value;});$(this).blur(function(){$(this).removeClass(params.focus_class);this.value=(this.value=='')?params.value:this.value;});});return this;};
