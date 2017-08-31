// JavaScript Document

/* Open or close the copyright */

$('#crBtn').on('click', function(){
	"use strict";
	var $this = $(this);
	var $class = $('.copyright');
	
	if($class.css('display') === "none"){
		$this.text("Close");
	}
	else{
		$this.text("Open");
	}
	$class.toggle('slow');
});

function replaceImg()
{
	this.src = "https://i.creativecommons.org/l/by/4.0/88x31.png";
}