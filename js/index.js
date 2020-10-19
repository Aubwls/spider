window.onload = function(){
  $('#fiction .searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    var params = {
      "keyword":keyword
    }
    ajaxTemp('fiction/list',params,"post",function(msg){
      appendFiction(msg.data)
    });
    
  }); 
  $('#music .searchButton').on('click', function(){
    var keyword = $(this).parent().parent().children("input").val()
    var params = {
      "keyword":keyword
    }
    ajaxTemp('music/list',params,"post",function(msg){
      appendMusic(msg.data)
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
          "<th>" +obj[i].url +"</th>" +
        "</tr>"
      )
    } 
  }
}
