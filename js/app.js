/**
 * Author: rjasonroberts on 5/3/16
 * www.icodepixels.com
 */
$(function() {

	var getSize = function(width, height, depth){
	 var area = width * height;
	 var volume = width * height * depth;

	 return [area, volume];
  };

	var calculateArea = function(){
		var areaWidth = $('#areaWidthValue').val(),
			areaHeight = $('#areaHeightValue').val(),
			area = getSize(areaWidth, areaHeight)[0];

		$('<div>')
			.html(areaWidth + " x " + areaHeight +  " = " + area)
			.appendTo($('.areaResults'));
	};

	var calculateVolume = function(){
		var volumeDepth = $('#volumeDepthValue').val(),
			volumeWidth = $('#volumeWidthValue').val(),
			volumeHeight = $('#volumeHeightValue').val(),
			volume = getSize(volumeWidth, volumeHeight, volumeDepth)[1];

		$('<div>')
			.html(volumeWidth + " x " + volumeHeight + " x " + volumeWidth  + " = " + volume)
			.appendTo($('.volumeResults'));
	};

	$( "#area" ).on( "click", calculateArea);
	$( "#volume" ).on( "click", calculateVolume);

});