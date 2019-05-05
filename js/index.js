$(document).ready(function(){
	var
pin=new $.Zebra_Pin($('#pin1'),{top_spacing:0,contain:true}),$container=$('.pin1-container'),additional_height=-100;$('button').bind('click',function(){additional_height=additional_height*-1;$container.css('height','-'+additional_height);pin.update();});});