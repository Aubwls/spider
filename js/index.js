window.onload = function(){
  $('.searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    ajaxTemp('fiction/list',{keyword:keyword},"post");
  });
  var ajaxTemp = function(router,data,method){
    $.ajax({type:method,
      url:"http://192.168.0.110:8081/api/spider/"+router,
      data:data,
      headers: {
        'Access-Control-Allow-Origin':'127.0.0.1'
      },
      success(msg){
        alert(msg)
      }
    });
  }
}
