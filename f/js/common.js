
$(document).ready(function(){
	$(".modal-inline").fancybox({
    type: 'inline',
    fixed:false,
    title: '',
    width: '100%',
    height: 'auto',
    padding: 0,
    autoResize: false,
    autoSize: true,
    fitToView: false,
    minWidth: 320,
    scrolling   : 'no',
    helpers: {
      overlay: {
        fixed: false
      }
    }
  });
  $(".services__line").each(function(){
    var heights =  $(this).find(".services__item-holder").map(function() {return $(this).height();});
    $(this).find(".services__item-holder").height(Math.max.apply(null, heights));
  })
  
});
$(function(){
	$(".js-scroll-link").click(function(){
    if(!$(this).hasClass("active")) {
      var scrollTo = $(this).data("scrollto"),
      scrollTarget = $('*[data-scrollto="'+scrollTo+'"].js-scroll-target');
      $.scrollTo(scrollTarget, 500, {offset: -199});
    }
  });
  $(".header__ham").click(function(){
  	$(this).toggleClass("header__ham_active");
  });
  $('.input').each(function() {
	if ($(this).val() != '') {
	  $(this).closest(".input-wrap").find("label").addClass('hide');
	 }
	});
	$('.input').blur(function() {
	 	if ($(this).val() == '') $(this).closest(".input-wrap").find("label").removeClass('hide');
	});
	$('.input').keydown(function() {
	 	$(this).closest(".input-wrap").find("label").addClass('hide');
	});
	$('.input').mouseover(function() {
	 if ($(this).val() != '') {
	   	$(this).closest(".input-wrap").find("label").addClass('hide');
	 }
	});
	$(".header__ham").click(function(){
		$(".ham-menu").toggleClass("ham-menu_active");
	});
});
