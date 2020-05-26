
// ナビバー//
var navFlg = false;
$('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
    if(!navFlg){
        $('.gnav__menu__item').each(function(i){
            $(this).delay(i*300).animate({
                'margin-left' : 0,
                'opacity' : 1,
            },500);
        });
        navFlg = true;
    }
    else{
        $('.gnav__menu__item').css({
            'margin-left' : 100,
            'opacity' : 0,
        });
        navFlg = false;
    }
});




// 桜吹雪
$(document).snowfall({
    // 雪の量 (数値)
    flakeCount : 15,
    // 色 (RGB)
    flakeColor : "",
    // z-indexの値
    flakeIndex : "888",
    // 最小サイズ （数値）
    minSize : 10,
    // 最大サイズ（数値）
    maxSize : 50,
    // 最低速度（数値）
    minSpeed : 2,
    // 最高速度（数値）
    maxSpeed : 5,
    // 雪の形を丸にする（boolean）
    round : true,
    // 影をつける（boolean）
    shadow : false,
    // 要素に積もらせる場合
    // collection : "積もらせる要素",
    // オリジナル画像を使用する場合
    image : "img/hanabira.png"
});

// ローディング//
// ページのロード完了時にローディング画面をフェードアウト
$(window).on('load', function() {
    $(".page-loader").delay(500).fadeOut(600);
  });
    
  // ページのロードが完了しない場合でも10秒たったら強制的にローディング画面をフェードアウト
  setTimeout('stoploading()', 10000); 
  function stoploading() {
    $(".page-loader").fadeOut('fast');
  }



// 86スクロール//
  $(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 4; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  
    if(bgPosition){
      $('#img86').css('background-position', 'center left -'+ bgPosition + 'px');
    }
  });




//横からスライド//
var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
var slideContsRect = []; // 要素の位置を入れるための配列
var slideContsTop = []; // 要素の位置を入れるための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
var windowH = window.innerHeight; // ウィンドウの高さを取得
var remainder = 100; // ちょっとはみ出させる部分

// 要素の位置を取得
for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}

// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});

// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  
  for (var i = 0; i < slideConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > slideContsTop[i] - windowH + remainder) {
      // .showを付与
      slideConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      slideConts[i].classList.remove('show');
    }
  }
});



// スキルバー//
$( function($) {
    $('.skillbar').skillBars({
      from: 0,	// バーの動くスタート位置
      speed: 4000,  // 動くスピード
      interval: 100, // 動き始めるまでの時間
    });
  });




// スムーズスクロール//
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 2000; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });






// ふわっとスクロール//
  /**
 * 到達したら要素を表示させる
 */
function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);







jQuery(function($){
  var delimiter = ",";  //分割文字をカンマに設定
  if($('span.nsm').length !== 0) { //メールアドレスがある場合のみ実行    
    if($('span.nsm').text() !== ''){
      var nsm_strings = $('span.nsm').text().split(delimiter);//分割文字で分割
      var pre = $.trim(nsm_strings[0]);  //最初の部分から空白を削除
      var domain = "&#64;" + $.trim(nsm_strings[1]);  
      //@（&#64;）と後ろの部分から空白を削除したものを連結
      var nsm_address =  pre + domain;    //メールアドレスを組み立てる
      $('span.nsm').html('<a href="ma' + 'ilto:' + nsm_address + '">' + nsm_address + '</a>');
    }
  }
});




// トップに戻る//
$(function(){
  $('.topball').click(function(){
      //html要素のスクロール位置が0=最上部なので、0を指定
      //スマホ対応のためbodyも指定
      $('html,body').animate({scrollTop: 0});
  });
});