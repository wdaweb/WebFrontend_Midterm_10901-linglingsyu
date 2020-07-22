
todosort("all");
function todosort(sort) {
  let name = $(".card");
  for (let i = 0; i < name.length; i++) {
    name.eq(i).removeClass("show");
    if (name.eq(i).hasClass(sort)) {
      name.eq(i).addClass("show");
    }
  }
}

var str = `Hi! 我是許瑞玲！之前在食品工廠擔任業務助理一職近6年時間，想要轉職往網頁設計的道路前進。2019年9月底離職後開始自己自習前端網頁技術，在2020年3月時有幸在泰山職訓中心參加PHP資料庫網頁設計班。個性慢熟但隨和好相處，喜歡團隊一起努力完成一件事的感覺。欲擔任前端/後端/全端網頁工程師，希望有機會能在網頁設計的領域中貢獻自己的一份心力^_^~~`;
var i = 0;
function typing(){
 var typing = document.getElementById('typing');
 if (i <= str.length) {
  typing.innerHTML = str.slice(0, i++) + '_';
  setTimeout('typing()', 150);
 }else{
  typing.innerHTML = str;
 }
}

typing();


$("a[href*='#']").click(function() {  
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
      var $target = $(this.hash);  
      $target = $target.length && $target || $("[name=' + this.hash.slice(1) + ']");  
      if ($target.length) {  
          var targetOffset = $target.offset().top;  
          $('html,body').animate({  
              scrollTop: targetOffset  
          },1000);  
          return false;  
      }  
  }  
}); 


$(".totop").click(function(){
  jQuery("html,body").animate({
      scrollTop:0
  },1000);
});
$(window).scroll(function() {
  if ( $(this).scrollTop() > 300){
      $('.totop').fadeIn("fast");
  } else {
      $('.totop').stop().fadeOut("fast");
  }
});





