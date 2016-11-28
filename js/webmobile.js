
//redirect ot mobile site
//var url = document.referrer;    
//                   
//if (url.indexOf('asiatravel.com') === -1){
//                //var w= screen.availWidth;    
//                if(detectmob() === true && getParameterByName('apps') !== 1) {                                 
//                                window.location="http://m.asiatravel.com/";          
//                }         
//}
//
//function getParameterByName(name) {
//	"use strict";
//    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//        results = regex.exec(location.search);
//    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//} 


//Check if mobile
function detectmob() { 
"use strict";
 if( (navigator.userAgent.match(/Android/i)) || 
 (navigator.userAgent.match(/webOS/i)) || 
 (navigator.userAgent.match(/iPhone/i)) || 
 (navigator.userAgent.match(/iPad/i)) || 
 (navigator.userAgent.match(/iPod/i)) || 
 (navigator.userAgent.match(/BlackBerry/i)) || 
 (navigator.userAgent.match(/Windows Phone/i)))
 {
                return true;
  }
else 
{
                return false;
  }
}        


//Check Mobile OS
var isMobile = {
	Android: function() {
		"use strict";
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		"use strict";
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		"use strict";
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		"use strict";
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		"use strict";
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		"use strict";
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

//Check for iPhone/iPod
function isiPhone(){
	"use strict";
    return (
        (navigator.platform.indexOf("iPhone") !== -1) ||
        (navigator.platform.indexOf("iPod") !== -1)
    );
}