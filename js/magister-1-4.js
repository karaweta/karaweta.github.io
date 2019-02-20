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


var w = 0;
var quesPool = new Array();
quesPool[w++] = {qs:"أديلو", ans1:"أعط",ans2:"أسمع",ans3:"أعتذر",ans4:"أسمح", cor:1, ua:-1}; 
quesPool[w++] = {qs:"بزوره", ans1:"ستارة",ans2:"ملاعق",ans3:"ملابس",ans4:"أطفال", cor:4, ua:-1}; 
quesPool[w++] = {qs:"دوبو", ans1:"ذوبان",ans2:"قبل قليل",ans3:"يقلب",ans4:"أذهبو", cor:2, ua:-1}; 
quesPool[w++] = {qs:"مجاغة", ans1:"دهاء",ans2:"غباء",ans3:"دلع",ans4:"جوع", cor:3, ua:-1}; 
quesPool[w++] = {qs:"يتورالي", ans1:"يبدو لي",ans2:"يشرح لي",ans3:"يسمح لي",ans4:"يجلب لي", cor:1, ua:-1}; 
quesPool[w++] = {qs:"بسكليت", ans1:"قلم",ans2:"سلة",ans3:"بسكويت",ans4:"دراجة", cor:4, ua:-1}; 
quesPool[w++] = {qs:"صمرقع", ans1:"جنان",ans2:"رعب",ans3:"برد",ans4:"فرح", cor:1, ua:-1}; 
quesPool[w++] = {qs:"دغري", ans1:"طير",ans2:"مغامر",ans3:"على طول",ans4:"رضيع", cor:3, ua:-1}; 
quesPool[w++] = {qs:"دكان", ans1:"مرجان",ans2:"متجر",ans3:"مخزن",ans4:"ثلاجة", cor:2, ua:-1}; 
quesPool[w++] = {qs:"استيتة", ans1:"أخت",ans2:"جدة",ans3:"أبلة",ans4:"عمة", cor:1, ua:-1}; 
quesPool[w++] = {qs:"بزوره", ans1:"ستارة",ans2:"ملاعق",ans3:"ملابس",ans4:"أطفال", cor:4, ua:-1}; 
quesPool[w++] = {qs:"دلك", ans1:"نظف",ans2:"سخن",ans3:"ادرس",ans4:"اسمع", cor:1, ua:-1}; 
quesPool[w++] = {qs:"دحين", ans1:"قصير",ans2:"لماذا",ans3:"الآن",ans4:"قليل", cor:3, ua:-1}; 
quesPool[w++] = {qs:"بكش", ans1:"كذب",ans2:"ملابس",ans3:"زواج",ans4:"قطة", cor:1, ua:-1}; 
quesPool[w++] = {qs:"دحديرة", ans1:"صورة",ans2:"شارع",ans3:"فشل",ans4:"منحدر", cor:4, ua:-1}; 
quesPool[w++] = {qs:"بلكن", ans1:"زهرة",ans2:"منظر",ans3:"ستارة",ans4:"ربما", cor:4, ua:-1}; 
quesPool[w++] = {qs:"يزهم", ans1:"يركض",ans2:"يطلب",ans3:"ينادي",ans4:"يأكل", cor:3, ua:-1}; 
quesPool[w++] = {qs:"مصنقر", ans1:"مصمم",ans2:"معصب",ans3:"مسافر",ans4:"مشاكس", cor:2, ua:-1}; 
quesPool[w++] = {qs:"قروشة", ans1:"إزعاج",ans2:"ترفيه",ans3:"مكيدة",ans4:"أرق", cor:1, ua:-1}; 
quesPool[w++] = {qs:"قحروطي", ans1:"شجاع",ans2:"ذكي",ans3:"قصير",ans4:"بخيل", cor:4, ua:-1}; 
quesPool[w++] = {qs:"مخمود", ans1:"كسول",ans2:"نائم",ans3:"موجود",ans4:"صائم", cor:2, ua:-1}; 
quesPool[w++] = {qs:"مرستك", ans1:"مرتب",ans2:"قبيح",ans3:"ملون",ans4:"صلب", cor:1, ua:-1}; 
quesPool[w++] = {qs:"أسري", ans1:"اكتب",ans2:"كل",ans3:"أذهب",ans4:"ادفع", cor:3, ua:-1}; 
quesPool[w++] = {qs:"أندر", ans1:"أخرج",ans2:"تعال",ans3:"أترك",ans4:"نام", cor:1, ua:-1}; 
quesPool[w++] = {qs:"بزوطه", ans1:"صورة",ans2:"إهمال",ans3:"تحفة",ans4:"زواج", cor:2, ua:-1}; 
quesPool[w++] = {qs:"جغمة", ans1:"دمعة",ans2:"قبلة",ans3:"رشفة",ans4:"هدية", cor:3, ua:-1}; 
quesPool[w++] = {qs:"متفشخر", ans1:"مهمل",ans2:"متطلب",ans3:"متعال",ans4:"متأخر", cor:3, ua:-1}; 
quesPool[w++] = {qs:"مدردم", ans1:"متكور",ans2:"مترجم",ans3:"مهموم",ans4:"داهية", cor:1, ua:-1}; 
quesPool[w++] = {qs:"بمبي", ans1:"رومنسي",ans2:"زهري",ans3:"متغير",ans4:"مشرق", cor:2, ua:-1}; 
quesPool[w++] = {qs:"مصرفد", ans1:"مستمتع",ans2:"مخبأ",ans3:"مستعجل",ans4:"لامع", cor:3, ua:-1}; 
quesPool[w++] = {qs:"لكيع", ans1:"متكاسل",ans2:"صغير",ans3:"بليغ",ans4:"مظلم", cor:1, ua:-1}; 
quesPool[w++] = {qs:"كرتة", ans1:"فلسفة",ans2:"فستان",ans3:"جديد",ans4:"كرت", cor:2, ua:-1}; 
quesPool[w++] = {qs:"كندرة", ans1:"جزمة",ans2:"ملعقة",ans3:"علبة",ans4:"سباق", cor:1, ua:-1}; 
quesPool[w++] = {qs:"كنديشن", ans1:"مكيف",ans2:"مشوش",ans3:"شرط",ans4:"عامل", cor:1, ua:-1}; 
quesPool[w++] = {qs:"استيتة", ans1:"أخت",ans2:"جدة",ans3:"أبلة",ans4:"عمة", cor:1, ua:-1}; 
quesPool[w++] = {qs:"دحلسة", ans1:"حساسية",ans2:"تملق",ans3:"ابريق",ans4:"أرضية", cor:2, ua:-1}; 
quesPool[w++] = {qs:"زنبيل", ans1:"كيس",ans2:"زنجبيل",ans3:"وعاء",ans4:"قدر", cor:1, ua:-1}; 
quesPool[w++] = {qs:"افتر", ans1:"بعد",ans2:"أهجد",ans3:"دافئ",ans4:"دموع", cor:2, ua:-1}; 
quesPool[w++] = {qs:"دندرمة", ans1:"مكسرات",ans2:"آيسكريم",ans3:"شاي",ans4:"عصير", cor:2, ua:-1}; 
quesPool[w++] = {qs:"زكن", ans1:"ذاكر",ans2:"أسرع",ans3:"افتح",ans4:"أكد", cor:4, ua:-1}; 
quesPool[w++] = {qs:"دبان", ans1:"ذئاب",ans2:"ذباب",ans3:"ثعبان",ans4:"جراد", cor:2, ua:-1};
quesPool[w++] = {qs:"زرفونة", ans1:"نافذة",ans2:"زفير",ans3:"قفل",ans4:"زرافة", cor:3, ua:-1}; 
quesPool[w++] = {qs:"دقيسي", ans1:"مخزن",ans2:"ملعب",ans3:"مجلس",ans4:"مستشفى", cor:1, ua:-1}; 
quesPool[w++] = {qs:"فزلكة", ans1:"زحلقة",ans2:"فلسفة",ans3:"مرهم",ans4:"ورطة", cor:2, ua:-1}; 
quesPool[w++] = {qs:"شرشحة", ans1:"تفتيش",ans2:"تعليم",ans3:"جراحة",ans4:"تهزيء", cor:4, ua:-1}; 
quesPool[w] = {qs:"كرويتة", ans1:"كرسي",ans2:"شمعة",ans3:"ورقة",ans4:"موقع", cor:1, ua:-1}; 
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
	
	$("#goldenquiz").click(function(){
			var r = new Array();
			
			var counter = 0;
			while(r.length < 10){
				var randomnumber=Math.ceil(Math.random()*(quesPool.length-1))
				var found=false;
				for(var i=0;i<r.length;i++){
					if(r[i]==randomnumber){found=true;break}
				}
				if(!found)
					r[r.length] = randomnumber;
				counter++;
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
			
			INDEX = 0;
			
			setQuestonBoxIn();
			showQuestionBox();

	});
	$("#goldenquiz").hide();
	$(".header-subtitle").hide();
	$(".hashtag").hide();
	
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
			var r = new Array();
			
			var counter = 0;
			while(r.length < 10){
				var randomnumber=Math.ceil(Math.random()*(quesPool.length-1))
				var found=false;
				for(var i=0;i<r.length;i++){
					if(r[i]==randomnumber){found=true;break}
				}
				if(!found)
					r[r.length] = randomnumber;
				counter++;
				if(counter > 120){
					if(playCounter >= randomOrder.length)
						playCounter = 0;
					r = randomOrder[playCounter++];
					break;
				}
			}
			for(var i = 0 ; i < 10; i++)
				ques[i] = quesPool[r[i]];
			
			for(var i = 0 ; i < 10; i++)
				ques[i].ua = -1;
			
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
	$("#ans1").text(ques[INDEX].ans1);
	$("#ans2").text(ques[INDEX].ans2);
	$("#ans3").text(ques[INDEX].ans3);
	$("#ans4").text(ques[INDEX].ans4);
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

