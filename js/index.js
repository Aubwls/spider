window.onload = function(){
  $('#fiction .searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    var params = {
      keyword:keyword
    }
    ajaxTemp('fiction/list',params,"post",function(msg){
      appendFiction(msg.data)
    });
    
  }); 
  $('#music .searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    var params = {
      keyword:keyword
    }
<<<<<<< HEAD
    ajaxTemp('music/list',params,"post",function(msg){
      appendMusic(msg.data)
=======
    ajaxTemp('music/list',JSON.stringify(params),"post","music");
  });
  var ajaxTemp = function(router,data,method,node){
    $.ajax({
      type:method,
      //url:"http://47.100.164.178:8081/api/spider/"+router,
      url:"http://localhost:8081/api/spider/"+router,
      contentType: "application/json",
      dataType:'json',
      data:data,
      success(msg){
        var obj = msg.data;
        if (node == "music"){
          appendMusic(obj)
        }
        if (node == "fiction"){
          appendFiction(obj)
        }
      }
>>>>>>> 046b3c5607548d1b07c41674f7b48208c43b3e94
    });
  });
  var appendFiction = function(obj){
    for(var i = 0 ; i < obj.length ; i++) {
      $('.fictionTable').append(
        "<tr>"+
          "<th>"+obj[i].fictionName+"</th>" +
          "<th>"+obj[i].author+"</th>" +
          "<th>" +
              "<a href='" +obj[i].url+"'>点击下载</a>" +
          "</th>" +
        "</tr>"
      )
    } 
  }
  var appendMusic = function(obj){
    for(var i = 0 ; i < obj.length ; i++) {
      $('.musicTable').append(
        "<tr>"+
          "<th>"+obj[i].musicName+"</th>" +
          "<th>"+obj[i].author+"</th>" +
          "<th>" +
            "<a href='"+obj[i].url+"'  target='_blank'>点击下载</a>" +
          "</th>" +
          "<th>"+obj[i].extractionCode+"</th>" +
        "</tr>"
      )
    } 
  }
}
