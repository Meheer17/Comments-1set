$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

$(document).ready(function(){
    $.getJSON("/datastore", function(result){
      $.each(result, function(i, k){
        $("#display").append(
            '<div class="box"> <h2>' + k.username + '</h2>' + 
            '<h2>' + k.topic + '</h2>' + '<br>' +
            '<h3>' + k.comment + '</h3></div>'
        );
      });
    });
});