// JavaScript Document
$(document).ready(function()
{
	"use strict";
	
    $('label.btn').click(function()
	{
		var radioid = $('input:radio', this).val(); 			
		switch(radioid)
		{
			case 'flight-two-way':
				$('#inputArrivalDate').attr('disabled',false);
				$('#RadioButton_Return').attr('checked',true);
				$('#RadioButton_Oneway').attr('checked',false);
				
				break;
			case 'flight-one-way':
				$('#inputArrivalDate').attr('disabled',true);
				$('#inputArrivalDate').val('');
				$('#RadioButton_Return').attr('checked',false);
				$('#RadioButton_Oneway').attr('checked',true);
				break;
			case 'flight-multi-stops':
				window.location = URLMultiStop('','');
				break;	
		} 	
	});
	
	$('#inputFHTRoomCount').change(function()
	{
		var end = this.value;
		for (var i = 2; i <= this.length; i++)
		{
    		hide('FHTRoom' + i);
		}
		for (var j = 2; j <= end; j++)
		{
    		show('FHTRoom' + j);
		}
	});
	
	$('#inputFHRoomCount').change(function()
	{
		var end = this.value;
		for (var i = 2; i <= this.length; i++)
		{
    		hide('FHRoom' + i);
		}
		for (var j = 2; j <= end; j++)
		{
    		show('FHRoom' + j);
		}
	});
	
	//For FHT & FH
	/*$("select.form-control").change(function(){
		var id = $(this).attr("id");
		var val = $("#" + id).val();
		alert(val);
		switch(id)
		{
			case 'inputFHTRoom1Adult':	
			if(val > 1){		
				}
			break;
			case 'inputFHTRoom2Adult':	
			break;
			case 'inputFHTRoom3Adult':	
			break;
			case 'inputFHTRoom4Adult':	
			break;
			case 'inputFHTRoom5Adult':	
			break;
			}
		});*/
	
	if( isMobile.iOS() )
	{
		if(isiPhone()){
    		$('#app-link-icon').attr("href","https://itunes.apple.com/sg/app/asiatravel.com-hotel-wizard/id516195881?mt=8");
			$('#app-link-text').attr("href","https://itunes.apple.com/sg/app/asiatravel.com-hotel-wizard/id516195881?mt=8");
						}
		else{
			$('#app-link-icon').attr("href","https://itunes.apple.com/sg/app/asiatravel.com-hotel-wizard/id558346772?mt=8");
			$('#app-link-text').attr("href","https://itunes.apple.com/sg/app/asiatravel.com-hotel-wizard/id558346772?mt=8");
						}				
	}
	else if( isMobile.Android() )
	{
		$('#app-link-text').attr("href","https://play.google.com/store/apps/details?id=com.asiatravelapp");
		$('#app-link-icon').attr("href","https://play.google.com/store/apps/details?id=com.asiatravelapp");
		}
	else if( isMobile.Windows() )
	{
		$('#app-link-text').attr("href","http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/en-us/info/mobile-app.html?trck=gblhdr");
		$('#app-link-icon').attr("href","http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/en-us/info/mobile-app.html?trck=gblhdr");
		}
	else
	{
		$('#app-link-text').attr("href","http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/en-us/info/mobile-app.html?trck=gblhdr");
		$('#app-link-icon').attr("href","http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/en-us/info/mobile-app.html?trck=gblhdr");
	}	
		
	//touch control	
	//$("#myCarousel").swiperight(function() {  
	//	  $("#myCarousel").carousel('prev');  
	//	});  
	//$("#myCarousel").swipeleft(function() {  
	//	  $("#myCarousel").carousel('next');  
	//	});  

$( "li#langSelect > ul.dropdown-menu > li > a" ).click(function(e) {
		e.preventDefault();
		var lang = $(this).children().attr("class");
		var url = newLangURL(lang);
		window.location = url;
		//alert(url);
	});			
});




function hide(target)
{
	"use strict";
 	try
 	{
		$("#"+target).hide();
  	}
 	catch(e)
  	{
    	alert("Error encounter at hide : " + e);
  	}
}

function show(target)
{
	"use strict";
  	try
  	{
		$("#"+target).show();
  	}
  	catch(e)
  	{
    alert("Error encounter at show : " + e);
  	}
}

var disableControl = function(){
	"use strict";
	
	};
