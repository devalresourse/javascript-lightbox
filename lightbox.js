$(document).ready(function(){

  $(".lightbox-link").click(function(e){

    // Select the link we just clicked on and extra the image for the lightbox
    $link_element = $(e.currentTarget);
    var image = $link_element.data("img");

    // Create the lightbox on the page with the image
    var lightbox = "";
    lightbox += "<div class='lightbox-outer'>";
    lightbox += "<div class='lightbox-inner'>";
    lightbox += "<img src='"+image+"'>";
    lightbox += "</div>";
    lightbox += "</div>";
    $("body").append(lightbox);

    // Select the image
    $image_element = $("img");

    // When the image is loaded
    $($image_element).on("load", function(){

      // Measure the page's height and it's height, then offset it
      // so the image is centered vertically
      var page_height = $(window).height();
      var image_height = $image_element.height();
      var image_height_offset = ( page_height - image_height ) / 2;
      $image_element.parent().css("margin-top", image_height_offset);

      // When the image or its wrapper is clicked, remove the lightbox
      // and go back to normal
      $(".lightbox-outer, .lightbox-inner, .lightbox-inner img").click(function(){
        $(".lightbox-outer").remove()
      })

    })
  })

})