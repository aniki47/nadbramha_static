(function ($) {
  'use strict';
  Drupal.behaviors.nadbrahma = {
    attach: function(context, settings) {


      $(document).ready(function(){
        init_counters();

        //Add class to the last menu item
        $( "nav#block-nadbramha-main-menu ul li" ).last().find('a').addClass( "btn btn-primary donate" );
        $( "nav#block-nadbramha-main-menu ul li" ).last().find('a').attr('data-toggle','modal');
        $( "nav#block-nadbramha-main-menu ul li" ).last().find('a').attr('data-target','#myModal');


        //Add active class for Gallery
        if (window.location.href.indexOf("gallery") >= 0) {
          $( "nav#block-nadbramha-main-menu ul li:nth-child(4)" ).addClass('active');
          $( "nav#block-nadbramha-main-menu ul li:nth-child(4) a" ).addClass('is-active');
        }
        //End of Document Ready Function
      });

      function init_counters(){
        $(".count-number").appear(function(){
          var count = $(this);
          count.countTo({
            from: 0,
            to: count.html(),
            speed: 1300,
            refreshInterval: 60,
          });
        });
      }

      //End of File Code
      }
    };
}(jQuery));
