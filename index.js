
$(function(){

  // カルーセルパネル

  // 初期設定
  $("#carouselInner").css("width",1060*$("#carouselInner ul.column").length+"px");
  $("#carouselInner ul.column:last").prependTo("#carouselInner");
  $("#carouselInner").css("margin-left","-1060px");

  // 前ボタン
  $("#carouselPrev").click(function(){
      $("#carouselPrev,#carouselNext").hide();

      $("#carouselInner").animate({
          "margin-left" : parseInt($("#carouselInner").css("margin-left"))+1060+"px"
      },"slow","swing",
      function(){
          $("#carouselInner").css("margin-left","-1060px");
          $("#carouselInner ul.column:last").prependTo("#carouselInner");
          $("#carouselPrev,#carouselNext").show();
      });
  });

  // 次ボタン
  $("#carouselNext").click(function(){
      $("#carouselPrev,#carouselNext").hide();

      $("#carouselInner").animate({
          "margin-left" : parseInt($("#carouselInner").css("margin-left"))-800+"px"
      },"slow","swing",
      function(){
          $("#carouselInner").css("margin-left","-1060px");
          $("#carouselInner ul.column:first").appendTo("#carouselInner");
          $("#carouselPrev,#carouselNext").show();
      });
  });

  // 自動スライド
  var timerID = setInterval(function(){
      $("#carouselNext").click();
  },5000);

  // ナビボタンをhoverしている時は、インターバルクリア
  $("#carouselPrev,#carouselNext").hover(function(){
      clearInterval(timerID);
  },function(){
      timerID = setInterval(function(){
          $("#carouselNext").click();
      },5000);
  });

});

