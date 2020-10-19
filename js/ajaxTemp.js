function getUrlParam(name) {  
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象    
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数      
  if (r != null) {
    return unescape(r[2]);  
  }   
  return null; //返回参数值            
}       

var ajaxTemp = function(router,data,method,successHandle,errorHandle){
  //var url = "http://47.100.164.178:8081/api/spider/"+router;
  var url = "http://localhost:8081/api/spider/"+router;
  var token = getUrlParam("token")
  if (token != null){
    url = url + "?token="+token;
  }
  console.log(url)
  $.ajax({
    type:method,
    url:url,
    data:JSON.stringify(data),
    dataType:"json", 
    contentType: "application/json;charset=UTF-8",
    success:successHandle,
    error:errorHandle
  });
}