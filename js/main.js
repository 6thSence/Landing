var main = (function(){    var init = function () {        _setUpListners();        if ($('.slider__list')) _sliderPlag();    };    var _setUpListners = function() {        //$('.slider__contorols-button').on('click', _slider);    };    var _sliderPlag = function () {        console.log('hi!');        $('.slider__list').slick({            dots: true,            infinite: true,            speed: 300,            slidesToShow: 1,            adaptiveHeight: true        });    } ;    var _slider =  function(e){        e.preventDefault();        var $this = $(this),            container =$this.closest('.slider'),            list = container.find('.slider__list'),            items = container.find('.slider__item'),            activeSlide = items.filter('.active'),            nextSlide = activeSlide.next(),            prevSlide = activeSlide.prev(),            firstSlide = items.first(),            lastSlide = items.last(),            sliderOffset = container.offset().left,            width = $('.slider__list--wrap').css('width'),            reqPos = 0;        console.log(sliderOffset);        if ($(this).hasClass('slider__contorols-button_next')){            if (nextSlide.length) {                findReqPos(nextSlide);                removeActiveClass(nextSlide);            } else {                findReqPos(firstSlide);                removeActiveClass(firstSlide);            }        } else {            if (prevSlide.length) {                findReqPos(prevSlide);                removeActiveClass(prevSlide);            } else {                findReqPos(lastSlide);                removeActiveClass(lastSlide);            }        }        list.css('left', '-=' + reqPos + 'px');        function removeActiveClass (reqSlide) {            reqSlide.addClass('active').siblings().removeClass('active');        }        function findReqPos (slide){            //reqPos = slide.offset().left - width;            reqPos = slide.offset().left - sliderOffset;        }    };    return {        init: init    };})();main.init();