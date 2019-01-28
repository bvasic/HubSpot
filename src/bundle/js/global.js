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
	  	var year = value.year;
	  	//RADIO BUTTON FOR BOOKS
	  	$('#bookRadio').click(function(){
            if($(this).prop("checked") == true){            	
            	var bookTitle = title;
            	var bookPoster = poster;
            	var bookGenre = genre;
            	var bookType = type;
            	var bookYear = year;
            	var newContainer = '<div class="movieContainer"><img src="'+bookPoster+'" style="width:100%"><div><b>'+bookTitle+'</b> <b>('+bookYear+')</b></div><div><b>Genres: </b>'+bookGenre+'</div></div>';
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
	  	var year = value.year;
	  	//RADIO BUTTON FOR BOOKS
	  	$('#movieRadio').click(function(){
            if($(this).prop("checked") == true){            	
            	var movieTitle = title;
            	var moviePoster = poster;
            	var movieGenre = genre;
            	var movieType = type;
            	var movieYear = year;
            	var newContainer = '<div class="movieContainer"><img src="'+moviePoster+'" style="width:100%"><div><b>'+movieTitle+'</b> <b>('+movieYear+')</b></div><div><b>Genres: </b>'+movieGenre+'</div></div>';
            	$(".moviesContainer").append(newContainer);
            }
            else if($(this).prop("checked") == false){
                alert("Checkbox is unchecked.");
            }
        });
	  } 
	 });



  	//#########################################################################
	//FILTERING MOVIES BY GENRE
	//#########################################################################
	  	$("#action").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var genreArray = value.genre;
			  	if(genreArray.includes("action")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
				  	var year = value.year;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
        $("#adventure").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var genreArray = value.genre;
			  	if(genreArray.includes("adventure")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
				  	var year = value.year;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div></div>';	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
        $("#animation").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var genreArray = value.genre;
			  	if(genreArray.includes("animation")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
				  	var year = value.year;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
        $("#comedy").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var genreArray = value.genre;
			  	if(genreArray.includes("comedy")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
				  	var year = value.year;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
	//#########################################################################
	//END FILTERING MOVIES BY GENRE
	//#########################################################################


	//#########################################################################
	//FILTERING MOVIES BY YEAR
	//#########################################################################
	  	$("#1981").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var yearArray = value.year;
			  	if(yearArray.includes("1981")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div><div><b>TYPE(used for filtering):</b>'+type+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
        $("#1993").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var yearArray = value.year;
			  	if(yearArray.includes("1993")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
				  	var year = value.year;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div><div><b>TYPE(used for filtering):</b>'+type+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
        $("#2005").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var yearArray = value.year;
			  	if(yearArray.includes("2005")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div><div><b>TYPE(used for filtering):</b>'+type+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
        $("#2010").click(function() {
	  		$(".moviesContainer").empty();
	  		$.each( json.media, function( i, value ) {
	  			var yearArray = value.year;
			  	if(yearArray.includes("2010")){
				  	var title = value.title;
				  	var poster = value.poster;
				  	var genre = value.genre;
				  	var type = value.type;
	            	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+" (" + year + " )"+'</b></div><div><b>Genres:</b>'+genre+'</div><div><b>TYPE(used for filtering):</b>'+type+'</div></div>';
	            	$(".moviesContainer").append(newContainer);
		  		}
	  		});
        });
	//#########################################################################
	//END FILTERING MOVIES BY YEAR
	//#########################################################################

	 

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

    	var newContainer = '<div class="movieContainer"><img src="'+poster+'" style="width:100%"><div><b>'+title+'</b></div><div><b>Genres:</b>'+genre+'</div><div><b>TYPE(used for filtering):</b>'+type+'</div></div>';
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