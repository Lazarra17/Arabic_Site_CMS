// JavaScript Document


var newLangURL = function(lang){
	'use strict';
	var url = window.location.href;
	var newURL = "";
	var spltStr = url.split("/");
	var lstIndex = spltStr.length - 1;
	
	spltStr[3] = (validLang(spltStr[3])) ? lang : spltStr[3];
	if(spltStr[3].indexOf("?") > 0){
		spltStr[3] = spltStr[3].replace( spltStr[3].substring(spltStr[3].indexOf("?"),spltStr[3].lenght),"");
		}
	$.each(spltStr, function( index, value ){
		if(index < lstIndex){newURL += (value + "/");}
		else{newURL += (value);}	
		});	
		
	if(isHome(spltStr[3])){
		
		newURL = (lang === "ko-kr") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/ko-kr/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "zh-cn") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://cn.asiatravel.com/?trck=gblhdr" : newURL;
		newURL = (lang === "zh-tw") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/zh-tw/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "fr-fr") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/fr-fr/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "ar-ae") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/ar-ae/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "ja-jp") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/ja-jp/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "th-th") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://th.asiatravel.com/?trck=gblhdr" : newURL;
		newURL = (lang === "id-id") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/id-id/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "de-de") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/de-de/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "es-es") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/es-es/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "vi-vn") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/vi-vn/hotels/index.html?trck=gblhdr" : newURL;
		newURL = (lang === "ru-ru") ? "http://book.asiatravel.com/PgLand.CMS.aspx?p=http://www.asiatravel.com/ru-ru/hotels/index.html?trck=gblhdr" : newURL;
					
		}	
		
	//alert(url2);	
	
	//if (!isPageExist(newURL)){
	//	newURL = url;
	//	}
	
	return newURL;
}; 

var isHome = function(lang){
	"use strict";
	
	var _home;
	var isEmpty = lang  || "";
	_home = (isEmpty === "" || isEmpty === "index.html") ? true : false; 
	
	return _home;
};


var isPageExist = function(url2){
	'use strict';
	var bln = false;
	$.ajax({
		type: 'HEAD',
		url: url2,
		success: function() {
			bln = true;
		},  
		error: function() {
			bln = false;
		}
	});
	return bln;
};	
	
var validLang = function(lang){
	'use strict';
	var isValid = false;
	var regEx = new RegExp("([a-zA-Z]{2}-[a-zA-Z]{2})");
	isValid = regEx.test(lang);
	return isValid;	
	};
	