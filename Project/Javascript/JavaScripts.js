function Pass2php()
{
	$("#Form").submit(function(e){e.preventDefault();});
	var sku = $('#SKU').val();
	var name = $('#Name').val();
	var price = $('#Price').val();
	var size="";
	if(document.getElementsByName("Size")[0].id=="Mb")
	{
		size ="Mb " + $('#Mb').val();
	}
	else if(document.getElementsByName("Size")[0].id=="Kg")
	{
		size = "Kg " + $('#Kg').val();
	}
	else if(document.getElementsByName("Size")[0].id=="Height")
	{
		size = $('#Height').val() + " x "
		 + $('#Width').val() + " x "
		 + $('#Depth').val();
	}
	
	
	
	if(/^\d+$/.test(price)){
	
	
	$.post('PHPscript/AddScript.php',{psku:sku,pname:name,pprice:price,psize:size,test:size},
	function(data)
	{
		
		alert(data);
	});
	
	
	
	}else alert("Invalid price");
	
}

function ShowTable(divid)
{
	$.post("PHPscript/ShowTable.php",{},
	function(data)
	{
		document.getElementById(divid).innerHTML = data;
	}
	);
}

function DropFromDb()
{

	var allCb = document.getElementsByName("IDref");
	var chCb="";
	var lenCh=0;
  for (var i=0; i<allCb.length; i++) 
  {
     if (allCb[i].checked) 
	 {
		lenCh+=1;
		chCb+=allCb[i].value;
		{chCb+=", ";}
     }	
  } 	
	chCb=chCb.slice(0, -2);
  	$.post('PHPscript/DeleteSelectedCB.php',{chCb2:chCb})
}

function typemb()
{
var SpecAtr = document.getElementById("SpecAtr");
SpecAtr.innerHTML = "Mb<br><INPUT TYPE = \"Text\" id = \"Mb\" name=\"Size\">";
document.getElementById("SpecAtr").setAttribute("name","Mb");
}
function typekg()
{
var SpecAtr = document.getElementById("SpecAtr");
SpecAtr.innerHTML = "Kg<br><INPUT TYPE = \"Text\" id = \"Kg\" name=\"Size\">";
document.getElementById("SpecAtr").setAttribute("name","Kg");
}
function type3d()
{
var SpecAtr = document.getElementById("SpecAtr");
SpecAtr.innerHTML = "<div class=\"div1\">Height<INPUT TYPE = \"Text\" id = \"Height\" name=\"Size\"></div>";
SpecAtr.innerHTML += "<div class=\"div1\">Width <INPUT TYPE = \"Text\" id = \"Width\" name=\"Size1\"></div>";
SpecAtr.innerHTML += "<div class=\"div1\">Depth<INPUT TYPE = \"Text\" id = \"Depth\" name=\"Size2\"></div>";
document.getElementById("SpecAtr").setAttribute("name","3d");
}













