// JavaScript Document

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
