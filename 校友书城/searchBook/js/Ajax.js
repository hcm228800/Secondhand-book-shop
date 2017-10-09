function showHint(str)
{
	//如果输入的内容为空
	if (str.length==0)
	{ 
		document.getElementById("txtHint").innerHTML="";
		return;
	}
	//XMLHttpRequest-来实现发送和接收HTTP请求与响应信息
	if (window.XMLHttpRequest)
	{
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行的代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{	
		//IE6, IE5 浏览器执行的代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//创建在服务器响应就绪时执行的函数
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
		}
	}
	
	xmlhttp.open("GET","../searchBook/searchShow.php?q="+str,true);
	xmlhttp.send();
}