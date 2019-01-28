$( document ).ready(function() {

//ajax call to GET API from NodeJS server side
var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/jsonData",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

//Getting book or movie types
	$('#bookRadio').click(function(){
		$(".moviesContainer").empty();
	});
	$('#movieRadio').click(function(){
		$(".moviesContainer").empty();
	});
	$.each( json.media, function( key, value ) {
	  if(value.type=="book"){
	  	var title = value.title;
	  	var poster = value.poster;
	  	var genre = value.genre;
	  	var type = value.type;

	  	//RADIO BUTTON FOR BOOKS
	  	$('#bookRadio').click(function(){
            if($(this).prop("checked") == true){            	
            	var movieTitle = title;
            	var moviePoster = poster;
            	var movieGenre = genre;
            	var movieType = type;
            	var newContainer = '<div class="movieContainer"><img src="'+moviePoster+'" style="width:100%"><div>'+movieTitle+'</div><div><b>Genres:</b>'+movieGenre+'</div><div><b>TYPE(used for filtering):</b>'+movieType+'</div></div>';
            	$(".moviesContainer").append(newContainer);
            }
            else if($(this).prop("checked") == false){
                alert("Checkbox is unchecked.");
            }
        });
	  } 

	  if(value.type=="movie"){
	  	// $('#testType').append(value.title);
	  	var title = value.title;
	  	var poster = value.poster;
	  	var genre = value.genre;
	  	var type = value.type;

	  	//RADIO BUTTON FOR BOOKS
	  	$('#movieRadio').click(function(){
            if($(this).prop("checked") == true){            	
            	var movieTitle = title;
            	var moviePoster = poster;
            	var movieGenre = genre;
            	var movieType = type;
            	var newContainer = '<div class="movieContainer"><img src="'+moviePoster+'" style="width:100%"><div>'+movieTitle+'</div><div><b>Genres:</b>'+movieGenre+'</div><div><b>TYPE(used for filtering):</b>'+movieType+'</div></div>';
            	$(".moviesContainer").append(newContainer);
            }
            else if($(this).prop("checked") == false){
                alert("Checkbox is unchecked.");
            }
        });
	  } 

	 });



});