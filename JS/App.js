//JQuery

$(function() //считается правильным подходом
{  //данная кострукция позволяет дождаться загрузки всего документа и только тогда выполнять какие-то действия
    
    //Fixed Header
    let header = $("#header");  //выбираем селектор по id .Если бы было бы по классу, то писалось бы ".header" 
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop(); // записываем в переменую  scrollPos кол-во пикселей которые мы проскролили от вверха
    let introH = intro.innerHeight(); //записываем в переменную introH высоту блока intro вместе с педингами,без педдингов просто intro.Height()
    $(window).on("scroll load resize", function()  //проверка: следим за скоролом окна(scroll), загрузки страницы(load) и изменение размера окна(resize).
    //При скроле мы делаем:  
    {
        //перезаписываем переменные
        introH = intro.innerHeight(); 
        scrollPos = $(window).scrollTop();
        scrollPos = $(this).scrollTop()  //записываем в переменую scrollPos текущее кол-во писклелей от верха страницы
        if(scrollPos > introH)
        {
            header.addClass("fixed");  //придаём переменной класса "header" класс "fixed"
        }
        else
        {
            header.removeClass("fixed");  //убираем у переменной класса "header" класс "fixed"
        }
    });


    // Smooth Scroll
    //Делаем выборку элемента data-scroll через атрибут.
    
    $("[data-scroll]").on("click",function(event)
    {
        //При клике отменяем стандартное поведение ссылки при клике. Нужен function(event)
        event.preventDefault();
        //при помощи this получаем доступ к конструкции,на которую мы кликнули
        //получаем атрибут 'scroll', потому что в nav баре указывали data-scroll
        let blockID = $(this).data('scroll');
        //записываем в переменую blockOffSet отступ данного блока от верха через селектор $(blockID)
        let blockOffSet = $(blockID).offset().top;
        console.log(blockOffSet);
        //придаём переменной класса "nav" класс "show"
        nav.removeClass("show");
        //придаём переменной класса "header" класс "toggle"
        header.removeClass("toggle");
        //делаем склектор из двух элементов и вызываем метод animate. Делаем скролл от верха на кол-во пикселей, хранящихся в данной переменной и - 50px
        $("html,body").animate({
            scrollTop: blockOffSet - 50}, 700); //скорость скролла 700
    });

//Nav Toggle
    //придаём переменной nav селектор навигации 
    let nav = $("#nav"); 
    let navToggle = $("#navToggle");
    //делаем селектор по id,следим за его кликом
    navToggle.on("click", function(event)
    {
        //отмена стандартного поведения для предмета(если вместо button у нас <a>)
        event.preventDefault();
        //Toggle при первом клике открывает меню,при втором - закрывает
        //придаём переменной класса "nav" класс "show".
        nav.toggleClass("show");
        //придаём переменной класса "header" класс "toggle".
        header.toggleClass("toggle");


    });

// Clients Slider https://kenwheeler.github.io/slick/
//придаём переменной slider селектор слайдера 
let slider = $("#clientsSlider");

//Вызываем для переменной слайдер метод slick
slider.slick({
    //бесконечный скрол
    infinite: true,
    //сколько хотим показывать слайдов
    slidesToShow: 1,
    //сколько будем скроллить файлов при клике на скролл
    slidesToScroll: 1,
    //добавляет затемнение отзывам при скролле
    fade: false,
    //убираем кнопки "next" и "prev"
    arrows: false,
    //добавляем точки,как на макете,показывают сколько элементов
    dots: true,
});

});



