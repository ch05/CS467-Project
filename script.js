$(document).ready(function(){

		$( "#name_called_btn" ).click(function() {
			$(".graphdiv").fadeOut(500);
			$("#name_called_div").delay(600).fadeIn(500);
		});

		$( "#name_btn" ).click(function() {
			$(".graphdiv").fadeOut(500);
			$("#name_div").delay(600).fadeIn(500);
		});

		$( "#relationship_btn" ).click(function() {
			$(".graphdiv").fadeOut(500);
			$("#relationship_div").delay(600).fadeIn(500);
		});

		$( "#speed_btn" ).click(function() {
			$(".graphdiv").fadeOut(500);
			$("#speed_div").delay(600).fadeIn(500);
		});

		$("#first_mov_nc").change(function() {
	       var movie_name = $( this ).val();
	       if(movie_name=="")
	       		$("#fst_nc_gr").attr('src', "");
	       	else
				$("#fst_nc_gr").attr('src', "Graphs/NameCalled/" + movie_name + "_nc_gr.html");
	    });

		$("#second_mov_nc").change(function() {
	       var movie_name = $( this ).val();
	       if(movie_name=="")
	       		$("#scn_nc_gr").attr('src', "");
	       else
				$("#scn_nc_gr").attr('src', "Graphs/NameCalled/" + movie_name + "_nc_gr.html");
	    });

		$("#first_mov_re").change(function() {
	       var movie_name = $( this ).val();
	       if(movie_name=="")
	       		$("#fst_re_gr").attr('src', "");
	       else
	       		$("#fst_re_gr").attr('src', "Graphs/Relationship/" + movie_name + "_re_gr.html");
	    });

		$("#second_mov_re").change(function() {
	       var movie_name = $( this ).val();
	       if(movie_name=="")
	       		$("#scn_re_gr").attr('src', "");
	       else
				$("#scn_re_gr").attr('src', "Graphs/Relationship/" + movie_name + "_re_gr.html");
	    });

	    $("#first_mov_sp").change(function() {
	       var char_name = $( this ).val();
	       if (char_name == "")
	       		$("#fst_sp_gr").attr('src', "");
	       else{
	       		$("#fst_sp_gr").attr('src', "Graphs/Speed/" + char_name + "_sp_gr.html");
	       		$("#fst_sp_pic").html("<img class = 'char_img' src= 'picture/" + char_name + ".png'>" );
	       }

	    });

		$("#second_mov_sp").change(function() {
	       var char_name = $( this ).val();
	       if (char_name == "")
	       		$("#scn_sp_gr").attr('src', "");
	       else{
	       		$("#scn_sp_gr").attr('src', "Graphs/Speed/" + char_name + "_sp_gr.html");
	       		$("#scn_sp_pic").html("<img class = 'char_img' src= 'picture/" + char_name + ".png'>" );
	       }
				
	    });
});

