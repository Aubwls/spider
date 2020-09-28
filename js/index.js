window.onload = function(){
  $('#fiction .searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    var params = {
      "keyword":keyword
    }
    ajaxTemp('fiction/list',JSON.stringify(params),"post","fiction");
  }); 
  $('#music .searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    var params = {
      "keyword":keyword
    }
    ajaxTemp('music/list',JSON.stringify(params),"post","music");
  });
  var ajaxTemp = function(router,data,method,node){
    $.ajax({
      type:method,
      url:"http://47.100.164.178:8081/api/spider/"+router,
      data:data,
      dataType:"json", 
      contentType: "application/json;charset=UTF-8",
      success(msg){
        var obj = msg.data;
        if (node == "music"){
          appendMusic(obj)
        }
        if (node == "fiction"){
          appendFiction(obj)
        }
      }
    });
  }
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
          "<th>" +obj[i].url +"</th>" +
        "</tr>"
      )
    } 
  }
}
