$(window).on('activate.bs.scrollspy', function (e,obj) {
	$('article .article-title').removeClass('article-title-active');
$(obj.relatedTarget + ' .article-title').addClass('article-title-active');

})







// TweenMax.to(".test", 1, {
//     rotation: 360,
//     x: 250, //往右移動250
//     y: 100,
//     opacity: 1,
//     ease: Linear.easeNone  //沒有任何的加減數
// });
$(document).ready(function() {
	TweenMax.to(".card2", 0, {
    x: 500, //往右移動500
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".card3", 0, {
    x: 500, //往右移動500
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".card4", 0, {
    x: 500, //往右移動500
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".progress-bar", 0, {
    width: 125, 
    ease: Linear.easeNone  //沒有任何的加減數
});
	$('.card1 .btn-next').click(function(event) {
		turnNext(1);
	});
	$('.card2 .btn-next').click(function(event) {
		turnNext(2);
	});
	$('.card3 .btn-next').click(function(event) {
		turnNext(3);
	});
	$('.card2 .btn-prev').click(function(event) {
		turnPrev(2);
	});
	$('.card3 .btn-prev').click(function(event) {
		turnPrev(3);
	});
	$('.card4 .btn-prev').click(function(event) {
		turnPrev(4);
	});

});

function turnNext(n) {
	TweenMax.to(".progress-bar", 0, {
    width: 125*(n+1), 
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".card"+n, 0.5, {
    x: -500, //往左移動500
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".card"+(n+1), 0.5, {
    x: 0, //500到0
    ease: Linear.easeNone  //沒有任何的加減數
});
}


function turnPrev(n) {
	TweenMax.to(".progress-bar", 0, {
    width: 125*(n-1), 
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".card"+n, 0.5, {
    x: 500, //往右移動500
    ease: Linear.easeNone  //沒有任何的加減數
});
	TweenMax.to(".card"+(n-1), 0.5, {
    x: 0, //500到0
    ease: Linear.easeNone  //沒有任何的加減數
});
}


$(document).ready(function() {
	$(".btn-send").click(function(event) {
		save();
	});
});

function save(){
	let postURL="https://script.google.com/macros/s/AKfycbykNpXXMvp9uB6a0M1244rlWuYfKJ18xd9-cAeuYA2Zk5i4Zns/exec";
	let param = new Object();
	param.method="write";
	param.userName=$("input[name='userName']").val();
	param.gender=$("input[type=radio][name='gender']:checked").val();
	param.age=$("input[name='age']").val();
	param.skin=$("input[type=radio][name='skin']:checked").val();
	param.q1=$("input[type=radio][name='q1']:checked").val();
	param.q2=$("input[type=radio][name='q2']:checked").val();
	param.q3=$("input[type=radio][name='q3']:checked").val();
	param.q4=$("input[type=radio][name='q4']:checked").val();
	param.q5=$("input[type=radio][name='q5']:checked").val();
	param.q6=$("input[type=radio][name='q6']:checked").val();
	param.q7=$("input[type=radio][name='q7']:checked").val();
	param.q8=$("input[type=radio][name='q8']:checked").val();
	param.q9=$("input[type=radio][name='q9']:checked").val();
	param.q10=$("input[type=radio][name='q10']:checked").val();
	param.q11=$("input[name='q11']").val();
	param.sheetUrl="https://docs.google.com/spreadsheets/d/1mbN2jmq2RO1J7GE7mWirKbk2vW181wfMEUGbDtU9fMU/edit#gid=0";
	param.sheetTag="工作表1";
	$.post(postURL,param, function(data) {
		if(data.result =="success"){
			// alert("成功");
			read();
		}else{
			alert("失敗");
		}
	});
}

function read(argument){
	
}