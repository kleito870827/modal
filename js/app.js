//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

  $("#img-gallery a").on("click", function(e){
    e.preventDefault();
    $("#overlay img").attr("src", $(this).attr("href"));
    $("#overlay").fadeIn();
    var imgCaptin = $(this).find("img").attr("alt");
    $("#overlay h3").html(imgCaptin);
  });
 $("#overlay").on("click", function(){
   $("#overlay").fadeOut();
 })
