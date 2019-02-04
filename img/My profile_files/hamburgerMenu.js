$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".js-navigation__menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });
        
    $( ".cross" ).click(function() {
        $( ".js-navigation__menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
        
});