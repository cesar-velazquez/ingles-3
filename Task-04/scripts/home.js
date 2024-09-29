$(function() {

    $('.btn-colapsar:not(.btn-collpse)').click(function() {
        if ($(this).hasClass('expandido')) {
            $(this).removeClass('expandido');
            $(this).removeClass('btn-expandido');
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-plus');
        }
        else {
            $(this).addClass('expandido');
            $(this).addClass('btn-expandido');
            $(this).find('i').addClass('fa-times');
            $(this).find('i').removeClass('fa-plus');
        }
    });

    $('.btn-collpse').on('click', function() {
        if ($(window).width() >= 768) {
            if ($(this).hasClass('expandido')) {
                $(this).removeClass('expandido');
                $(this).find('i').removeClass('fa-minus');
                $(this).find('i').addClass('fa-plus');
            }
            else {
                $(this).addClass('expandido');
                $(this).find('i').addClass('fa-minus');
                $(this).find('i').removeClass('fa-plus');
            }
            var objetivo = $(this).attr('data-target');
            $(objetivo).collapse('toggle');
        }
        else {
            var url = $(this).attr('url-target');
            var link = document.createElement('a');
            document.body.appendChild(link);
            link.href = url;
            link.download = '';
            link.click();
        }
    });
    
    function cambiarNavbarDependiendoDeScroll() {

        var navbar = $('.js-pleca');
        var texto_tema = $('.pleca__ee');
        var btnmenu = $('.btn-menu');
        var btnmenu_texto_dnone = $('.btn-menu span');

        if ($(window).scrollTop() > 200) {
            navbar.addClass('scroll');
            texto_tema.addClass('aparecer-desaparecer');
            //btnmenu.removeClass('margin-top-btn');
            btnmenu_texto_dnone.addClass('desaparecer-texto-menu')
            btnmenu.addClass('btn-menu-circular');
        } else {
            navbar.removeClass('scroll');
            texto_tema.removeClass('aparecer-desaparecer');
            //btnmenu.addClass('margin-top-btn');
            btnmenu_texto_dnone.removeClass('desaparecer-texto-menu')
            btnmenu.removeClass('btn-menu-circular');
        }
    }

    $(window).scroll(function (event) {
        cambiarNavbarDependiendoDeScroll();
    });

    $('.sidebar__dismiss, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $("body").css("overflow", "auto");
    });
    
    $('.js-sidebar__collapse').on('click', function () {
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $("body").css("overflow", "hidden");
    });

    
    $('.btn-menu').on('click', function() {

    });


});

