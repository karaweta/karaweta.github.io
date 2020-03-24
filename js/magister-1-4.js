// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1000;
var section_show_time = 1000;

var INDEX = 0;
var playCounter = 0;

var awarads = new Array();
awarads[0] = {en:"bronze", ar:"برونزي"};
awarads[1] = {en:"silver", ar:"فضي"};
awarads[2] = {en:"gold", ar:"ذهبي"};

var randomOrder = new Array();
randomOrder[0] = [0, 1, 39, 34, 28, 24, 25, 27, 14, 15];
randomOrder[1] = [6, 15, 40, 37, 1, 30, 20, 26, 17, 23];
randomOrder[2] = [6, 35, 3, 15, 20, 9, 25, 11, 34, 17];
randomOrder[3] = [40, 27, 18, 5, 23, 6, 9, 39, 19, 22];
randomOrder[4] = [17, 34, 36, 12, 27, 3, 10, 13, 31, 25];
randomOrder[5] = [5, 40, 15, 1, 27, 7, 8, 26, 34, 35];
randomOrder[6] = [24, 5, 8, 6, 12, 19, 40, 21, 15, 31];
randomOrder[7] = [11, 5, 21, 7, 8, 10, 22, 32, 35, 15];
randomOrder[8] = [9, 32, 8, 39, 2, 16, 1, 6, 35, 36];
randomOrder[9] = [15, 26, 8, 19, 29, 27, 1, 35, 37, 21];

var ques = new Array();
var quesPool = new Array();




// jQuery stuff

var gender = "male";
var age = 0;

jQuery(document).ready(function($) {
	
	// set background to default male-bg
	setCardBackground();
	resetGame();
	
	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		
		
		return false;
	});		
	
	 

	$("#flagsquiz").click(function(){
			
			pickQuestions();
			
			INDEX = 0;
			
			setQuestonBoxIn();
			showQuestionBox();

	});
	//$("#goldenquiz").hide();
	//$(".header-subtitle").hide();
	//$(".hashtag").hide();
	
	$(".tag").click(function(){			
		
		$(".tag").removeClass("selected");
		$(this).addClass("selected");
		
		var sAns = $(".tag").index(this);
		ques[INDEX].ua = sAns;
		
		// next can be clicked
		$("#next").addClass("nextable");
	});
	
	$("#next").click(function(){
	
			if(!$("#next").hasClass("nextable")){
				$("#msg").text("الرجاء اختيار اجابة");
				return;
			}
			
			setQuestonBoxOut();
			
			$("#question-box").fadeOut(section_hide_time, function(){
				INDEX++;

				if(INDEX < ques.length){
					setQuestonBoxIn();
					showQuestionBox();
				}
				else{
					// if gender and age already selected show result-box direclty
					if($("#send").hasClass("gsl") && $("#send").hasClass("asl"))
						showResultBox();
					else
						$("#info-box").fadeIn(section_hide_time, function(){});
				}
				//adjusting call
				setQuestonBoxOut();
			});
			
	});
	
	$("#send").click(function(){
		if(!$("#send").hasClass("gsl") || !$("#send").hasClass("asl")){
			$("#msg2").text("الرجاء اختيار الجنس و العمر");
			return;
		}
		
		//set background of all cards for the rest of the game;
		setCardBackground();
		
		$("#info-box").fadeOut(section_hide_time, function(){
			showResultBox();				
		});
			
	});
	
	$("#prev").click(function(){	
		$("#question-box").fadeOut(section_hide_time, function(){
			INDEX--;	
			setQuestonBoxIn();
			showQuestionBox();				
		});
	});
	
	$("#prev2").click(function(){
		$("#info-box").fadeOut(section_hide_time, function(){
			INDEX--;	
			setQuestonBoxIn();
			showQuestionBox();
		});
	});
	
	$(".gender").click(function(){
		
		$(".gender").removeClass("male");
		$(".gender").removeClass("female");
		
		gender = $(this).attr('id');

		$(this).addClass($(this).attr('id'));
		
		$("#send").addClass("gsl");
	});
	
	$(".age").click(function(){
		
		$(".age").removeClass("selected-age");
		
		age = $(".age").index(this);
		$(this).addClass("selected-age");
		$("#send").addClass("asl");
		
	}); 
	
	$("#nextGame").click(function(){
		$('#result-box').fadeOut(section_hide_time, function(){
			pickQuestions();
			
			INDEX = 0;
			setResultBoxOut();		
			setQuestonBoxIn();
			showQuestionBox();
		});
	});
	
	$("#repeat").click(function(){
		resetGame();
		setResultBoxOut();
		for(var i = 0 ; i < 10; i++)
			ques[i].ua = -1;
		
		INDEX = 0;
		
		setQuestonBoxIn();
		showQuestionBox();
	});
});



function pickQuestions(){
	var r = new Array();
	quesPool = flagsBank;
	var counter = 0;

	while(r.length < 10){

		// get random number 
		var randomnumber = Math.ceil(Math.random()*(quesPool.length-1))
		var found = false;

		// go over the array check if random number exits
		for(var i = 0; i < r.length; i++)
			if(r[i] == randomnumber){
				found=true;
				break
			}
			
		// if not assign to r[]
		if(!found)
			r[r.length] = randomnumber;

		counter++;

		// 
		if(counter > 120){
			if(playCounter >= randomOrder.length)
				playCounter = 0;
			r = randomOrder[playCounter++];
			break;
		}
	}
	for(var i = 0 ; i < 10; i++){
		ques[i] = quesPool[r[i]];
	}
	for(var i = 0 ; i < 10; i++)
		ques[i].ua = -1;
}

function resetGame(){
	$('#info-box').hide();
	$('#result-box').hide();
	$('#question-box').hide();
}


function setCardBackground(){
	$(".card").removeClass("male-bg"); //remove default bg
	$(".card").removeClass("female-bg");
	
	$(".card").addClass(gender+"-bg");
}

function showQuestionBox(){
	
	$("#question-box").fadeIn(section_hide_time, function(){});							
}

function setQuestonBoxIn(){

	$("#qs").text("\""+ques[INDEX].qs+"\"");
	$("#ans1 > .tag").attr("src",'flags/'+ques[INDEX].ans1+'.png')
	$("#ans2 > .tag").attr("src",'flags/'+ques[INDEX].ans2+'.png')
	$("#ans3 > .tag").attr("src",'flags/'+ques[INDEX].ans3+'.png')
	$("#ans4 > .tag").attr("src",'flags/'+ques[INDEX].ans4+'.png')
	// $("#ans2").append($("<img src='flags/"+ques[INDEX].ans2+".png'>").addClass("tag"));
	// $("#ans3").append($("<img src='flags/"+ques[INDEX].ans3+".png'>").addClass("tag"));
	// $("#ans4").append($("<img src='flags/"+ques[INDEX].ans4+".png'>").addClass("tag"));

	
	
	//$("#ans4").text(ques[INDEX].ans4);
	$(".tag").removeClass("selected");

	if(ques[INDEX].ua >= 0){
		$(".tag").eq(ques[INDEX].ua).addClass("selected");	
		$("#next").addClass("nextable");
	}
	
	setNxtPrv(INDEX);
	
}
function setQuestonBoxOut(){
	$(".tag").removeClass("selected");
	$("#next").removeClass("nextable");
	$("#msg").text("");
}
function showResultBox(){
	t = 0;
	f = 0;
	for(i = 0 ; i < ques.length; i++){
	
		if(ques[i].cor == ques[i].ua+1)
			t++;
		else
			f++;
	}
	var percentage = Math.ceil((t / ques.length)*100);
	$(".result").text(percentage+"%");
	$("#tresult").text("صحيح: "+t);
	$("#fresult").text("خطأ: "+f);
	
	setResultBoxIn(percentage);				
	
	$("#result-box").fadeIn(section_hide_time, function(){

	});
}
function setResultBoxIn(rsltPrcntg){
	
	if(rsltPrcntg < 80){

	$('#result').addClass(gender);
		$("#ftr").show();
	}
	else{
		//$('#nextLevel').show();
		var pos = 0;
		$('#result').addClass("result-sx");
		if(rsltPrcntg == 100)
			pos = 2;
		else if(rsltPrcntg == 90)
			pos = 1;
		else 
			pos = 0;
		$('#result').addClass(awarads[pos].en+"-bg");	
		var imgURL = "http://karaweta.github.io/images/kwt/"+awarads[pos].en+".png";
		
		if($('#imgAward').attr("src") != imgURL)
			$('#imgAward').attr("src", imgURL);
			
		$('#imgAward').fadeIn(2000, function(){});
		$("#ftr").hide();

	}
}
function setResultBoxOut(){

	$('#result').removeClass("result-sx");
	$('#result').removeClass("bronze-bg");
	$('#result').removeClass("silver-bg");
	$('#result').removeClass("gold-bg");
	$('#result').removeClass("female");
	$('#result').removeClass("male");
	//$('#imgAward').attr("src", "");
	$('#imgAward').hide();
}

function setInfoBoxOut(){
	$(".gender").removeClass("male");
	$(".gender").removeClass("female");
	$(".age").removeClass("selected-age");
	$("#msg2").text("");
}





function clearUserSelection(){
	for(var i = 0 ; i < ques.length; i++)
		ques[i].ua = -1;
}



function setNxtPrv(i){

	if(i == 0){
		$("#prev").hide();
		if(!$("#next").hasClass('left-alone'))
			$("#next").addClass('left-alone');
		$("#next").text("التالي").show();
	}
	else if(i == ques.length-1){
		$("#next").text("النتيجة");
		$("#prev").show();
		$("#next").removeClass('left-alone');
	}
	
	else{
		$("#next").text("التالي").show();
		$("#prev").show();
		$("#next").removeClass('left-alone');
	}
}

