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

	//#########################################################################
	//FILTERING MOVIES BY TYPE
	//#########################################################################

	//FILTERING BOOKS
	  if(value.type=="book"){
	  	var title = value.title;
	  	var poster = value.poster;
	  	var genre = value.genre;
	  	var type = value.type;
	  	//RADIO BUTTON FOR BOOKS
	  	$('#bookRadio').click(function(){
            if($(this).prop("checked") == true){            	
            	var bookTitle = title;
            	var bookPoster = poster;
            	var bookGenre = genre;
            	var bookType = type;
            	var newContainer = '<div class="movieContainer"><img src="'+bookPoster+'" style="width:100%"><div>'+bookTitle+'</div><div><b>Genres:</b>'+bookGenre+'</div><div><b>TYPE(used for filtering):</b>'+bookType+'</div></div>';
            	$(".moviesContainer").append(newContainer);
            }
            else if($(this).prop("checked") == false){
                alert("Checkbox is unchecked.");
            }
        });
	  } 

	  //FILTERING MOVIES
	  if(value.type=="movie"){
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

  	//#########################################################################
	//FILTERING MOVIES BY GENRE
	//#########################################################################
	
	if(value.genre=="action"){
	  	var title = value.title;
	  	var poster = value.poster;
	  	var genre = value.genre;
	  	var type = value.type;
	  	//RADIO BUTTON FOR BOOKS
	  	$('#action').change(function(){
            if(this.checked) {            	
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

	  $(".checkbox").change(function() {
		    if(this.checked) {
		        //Do stuff
		    }
		});
	  //#########################################################################
	  //END FILTERING MOVIES BY GENRE
	  //#########################################################################


	 });




	//CLEAR FILTERS
	$('.clearFilters').click(function(){
		$(".moviesContainer").empty();
		$('#movieRadio').prop('checked', false); 
	  	$('#bookRadio').prop('checked', false); 
	  	
		$.each( json.media, function( key, value ) {

	  	var title = value.title;
	  	var poster = value.poster;
	  	var genre = value.genre;
	  	var type = value.type;

    	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div>'+title+'</div><div><b>Genres:</b>'+genre+'</div><div><b>TYPE(used for filtering):</b>'+type+'</div></div>';
    	$(".moviesContainer").append(newContainer);

        });
	  });

	//TESTIMONIALS RANDOM API QUOTES
	$('#randomQuote').click(function(){
		var quotes = (function () {
	    var quotes = null;
		    $.ajax({
			        'async': false,
			        'global': false,
			        'url': "http://api.icndb.com/jokes/random",
			        'dataType': "json",
			        'success': function (data) {
			            quotes = data;
			        }
			    });
			    return quotes.value.joke;
			})(); 
		$('.testimonialLeftContainer').empty();
		$('.testimonialLeftContainer').append(quotes);
	});

});