

$(document).ready(function() {

    var jumpToPanel = function(panelId) {
        var activePanelElement = $(".panel__content--active");
        activePanelElement.removeClass("panel__content--active");
    
        var panelToBeActivatedElement = $(".panel__content[data-panel='" + panelId +  "']");
        panelToBeActivatedElement.addClass("panel__content--active");
    };

    // get the target
    // jump to the panel
    
    $(".js-button").click(function(event) {
        //var panel= $(event.currentTarget).data('panel-connector');
        var panelId = this.dataset.panelConnector;

        jumpToPanel(panelId);

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
        $('.slider-image__container').slick('refresh');
    });
});

















