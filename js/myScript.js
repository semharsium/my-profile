$(document).ready(function() {
    $(".js-button").click(function(event) {
        //var panel= $(event.currentTarget).data('panel-connector');
        var panel = this.dataset.panelConnector;
        $(".panel__content--active").removeClass("panel__content--active");
        $(".panel__content[data-panel='" + panel +  "']").addClass("panel__content--active");
        $('.slider-image__container').slick('refresh');
    });

    $('.slider-image__container').slick({
        slidesToshow:1,
        slidesToScroll:1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplayspeed: 2000,
    });

    $(".js-about-me").click(function(){
        var panel = this.dataset.panelConnector;
        $(".panel__content--active").removeClass("panel__content--active");
        $(".js-panel-aboutme[data-panel='" + panel +  "']").addClass("panel__content--active");
    });
});















