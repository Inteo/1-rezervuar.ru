
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
  $(".modal-service").fancybox({
    type: 'inline',
    fixed:false,
    title: '',
    width: '100%',
    height: 'auto',
    padding: 0,
    autoResize: false,
    autoSize: true,
    autoCenter: false,
    fitToView: false,
    minWidth: 320,
    scrolling   : 'no',
    helpers: {
      overlay: {
        fixed: false
      }
    },
    afterLoad: function() {
      if(this.element.data("name")) {
        $('#service-popup .form-wrap').removeClass('sended');
        $('#service-popup .popup__subtitle').html(this.element.data("name"));
        $('#service-popup .popup__text').html(this.element.data("text"));
        $('#service-popup .popup__title').html('Получить подробный расчет по '+this.element.data("name2"));
        $('#service-popup .popup__half img').attr('src', this.element.data("img"));
        $('#service-popup .form-theme').val(this.element.data("name"));
        $('#service-popup .input-hint').removeClass('hide');
      }
    }
  });
  $(".modal-goods").fancybox({
    type: 'inline',
    fixed:false,
    title: '',
    width: '100%',
    height: 'auto',
    padding: 0,
    autoResize: false,
    autoCenter: false,
    autoSize: true,
    fitToView: false,
    minWidth: 320,
    scrolling   : 'no',
    helpers: {
      overlay: {
        fixed: false
      }
    },
    afterLoad: function() {
      var minus = "", plus = "";
      if(this.element.data("plus")) 
      {
        plus = '<p class="popup__notes-title">Плюcы:</p>' +
        '<div class="popup__notes-text">' +
          this.element.data("plus") + 
        '</div>'
      };
      if(this.element.data("minus"))
      {
        minus = '<p class="popup__notes-title">Минусы:</p>' +
        '<div class="popup__notes-text">' +
          this.element.data("minus") + 
        '</div>'
      };
      if(this.element.data("name")) {
        $('#goods-popup .form-wrap').removeClass('sended');
        $('#goods-popup .popup__title').html(this.element.data("name"));
        $('#goods-popup .popup__half img').attr('src', this.element.data("img"));
        $('#goods-popup .popup__notes').html(plus + minus);
        $('#goods-popup .form-theme').val(this.element.data("name"));
        $('#goods-popup .input-hint').removeClass('hide');
      }
    }
  });
  $(".modal-ready").fancybox({
    type: 'inline',
    fixed:false,
    title: '',
    width: '100%',
    height: 'auto',
    padding: 0,
    autoResize: false,
    autoSize: true,
    autoCenter: false,
    fitToView: false,
    minWidth: 320,
    scrolling   : 'no',
    helpers: {
      overlay: {
        fixed: false
      }
    },
    afterLoad: function() {
      var params = "", use = "", equip = "", add = "", file = "";
      if(this.element.data("file")) 
      {
        file = '<a href="'+ this.element.data("file") +'">Ссылка на pdf</a>'
      };
      if(this.element.data("params")) 
      {
        params = '<p class="popup__notes-title">Параметры:</p>' +
        '<div class="popup__notes-text">' +
          this.element.data("params") + 
        '</div>'
      };
      if(this.element.data("use")) 
      {
        use = '<p class="popup__notes-title">Используется для хранения:</p>' +
        '<div class="popup__notes-text">' +
          this.element.data("use") + 
        '</div>'
      };
      if(this.element.data("equip")) 
      {
        equip = '<p class="popup__notes-title">Оснащен необходимым навесным оборудованием:</p>' +
        '<div class="popup__notes-text">' +
          this.element.data("equip") + 
        '</div>'
      };
      if(this.element.data("add")) 
      {
        add = '<p class="popup__notes-title">Дополнительно может быть оснащен:</p>' +
        '<div class="popup__notes-text">' +
          this.element.data("add") + 
        '</div>'
      };
      if(this.element.data("name")) {
        $('#ready-popup .form-wrap').removeClass('sended');
        $('#ready-popup .popup__title').html(this.element.data("name"));
        $('#ready-popup .popup__file').html(file);
        $('#ready-popup .popup__half img').attr('src', this.element.data("img"));
        $('#ready-popup .popup__notes').html(params + use + equip + add);
        $('#ready-popup .form-theme').val(this.element.data("name"));
        $('#ready-popup .input-hint').removeClass('hide');
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
