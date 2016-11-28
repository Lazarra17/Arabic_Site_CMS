function groupclass(strGroupName)
{
    var strClass = 'atctdgrp';

    if (strGroupName == 'City')
    {
        strClass = 'atctdgrpcty';
    }
    else if (strGroupName == 'Country')
    {
        strClass = 'atctdgrpctn';
    }
    else if (strGroupName == 'Hotel')
    {
        strClass = 'atctdgrphtl';
    }
    else if (strGroupName == 'Location')
    {
        strClass = 'atctdgrplct';
    }
    return strClass;
}

function qs_hotel_v3(okwname, okwtypeselected, okwselected, onr, ona, onc, ocidate, ocodate, sid, lan)
{
    try
    {
        var qsurl   = URLHotelProcess();
        var urlref  = encodeURIComponent(URLHomePage());
        var url     = encodeURIComponent(URLHotelLanding());
        
        var kwname  = $("#" + okwname).val();
        var kwtype  = $("#" + okwtypeselected).val();
        var kwselect= $("#" + okwselected).val();
        var dt1     = new Date(Date.parse(toDateMMddyyyy($("#" + ocidate).val()))); 
        var dt2     = new Date(Date.parse(toDateMMddyyyy($("#" + ocodate).val())));
        var one_day = 1000*60*60*24;
        var nn      = parseInt(dt2.getTime()-dt1.getTime())/(one_day);
        var nr      = $("#" + onr).val();
        var na      = $("#" + ona).val();
        var nc      = $("#" + onc).val();
        var so      = '0'; 
        var cid     = $("#" + ocidate).val();
        var sid     = sid;
        var lan     = lan;
        
        if (kwname == '')
        {
            if (lan.toLowerCase() == 'th-th')
            {
	            alert("กรุณาใส่ชื่อประเทศ เมือง โรงแรม หรือสถานที่ตั้ง");
            }
            else
            {
	            alert("Please enter the name of a Country, City, Hotel or Location.");
            }
	        return false;
        }
        
        if (kwname == 'ใส่ชื่อเมืองหรือจุดหมายปลายทาง') //'Enter City or Destination')
        {
            if (lan.toLowerCase() == 'th-th')
            {
	            alert("กรุณาใส่ชื่อประเทศ เมือง โรงแรม หรือสถานที่ตั้ง");
            }
            else
            {
	            alert("Please enter the name of a Country, City, Hotel or Location.");
            }
	        return false;
        }
        
        if (dt1 == 'Invalid Date')
        {
            if (lan.toLowerCase() == 'th-th')
            {
	            alert("กรุณาเลือกวันเช็คอิน");
            }
            else
            {
	            alert("Please select checkin date.");
            }
	        return false;
        }
        
        if (dt1 == 'NaN')
        {
            if (lan.toLowerCase() == 'th-th')
            {
	            alert("กรุณาเลือกวันเช็คอิน");
            }
            else
            {
	            alert("Please select checkin date.");
            }
	        return false;
        }

        if (dt2 == 'Invalid Date')
        {
            if (lan.toLowerCase() == 'th-th')
            {
	            alert("กรุณาเลือกวันเช็คเอาท์");
            }
            else
            {
	            alert("Please select checkout date.");
            }
	        return false;
        }
        
        if (dt2 == 'NaN')
        {
            if (lan.toLowerCase() == 'th-th')
            {
	            alert("กรุณาเลือกวันเช็คเอาท์");
            }
            else
            {
	            alert("Please select checkout date.");
            }
	        return false;
        }
        
        cid = toDateyyyyMMdd(cid);

        if (kwname != kwselect)
        {
            kwtype = '';
        }

        kwname = encodeURIComponent(kwname);
		
		if (detectmob())
		{
			url = 'http://m.asiatravel.com/destinations.aspx?' + 'ds=' + kwname + '&tid=2&cid=' +cid + '&nn=' + nn +'&nr=' + nr + '&na=' + na + '&sid=ATM26008DZ&trck=';
			}
		else
		{
			url = qsurl + '?urlref=' + urlref + '&url=' + url + '&kw=' + kwname + '&kwtp=' + kwtype + '&nn=' + nn + '&nr=' + nr + '&na=' + na + '&nc=' + nc + '&so=' + so + '&cid=' + cid + '&sid=' + sid + '&lan=' + lan;
			}		
        		
		var form = $('<form action="' + url + '" method="post"></form>');
        $('body').append(form);
        $(form).submit();

	}
    catch(e)
    {
        alert(e);
    }
}

function qs_hotel_v4(okwname, txtkw, okwtypeselected, okwselected, onr, ona, onc, ocidate, ocodate, sid, lan)
{
    try
    {
        var qsurl   = URLHotelProcess();
        var urlref  = encodeURIComponent(URLHomePage());
        var url     = encodeURIComponent(URLHotelLanding());
        
        var kwname  = $("#" + okwname).val();
        var kwtype  = $("#" + okwtypeselected).val();
        var kwselect= $("#" + okwselected).val();
        var dt1     = new Date(Date.parse(toDateMMddyyyy($("#" + ocidate).val()))); 
        var dt2     = new Date(Date.parse(toDateMMddyyyy($("#" + ocodate).val())));
        var one_day = 1000*60*60*24;
        var nn      = parseInt(dt2.getTime()-dt1.getTime())/(one_day);
        var nr      = $("#" + onr).val();
        var na      = $("#" + ona).val();
        var nc      = $("#" + onc).val();
        var so      = '0'; 
        var cid     = $("#" + ocidate).val();
        var sid     = sid;
        var lan     = lan;
        
        if (kwname == '')
        {
            if (lan.toLowerCase() == 'zh-cn')
            {
	            alert("请输入城市或目的地的名称。");
            }
            else if (lan.toLowerCase() == 'zh-tw')
            {
	            alert("請輸入城市或目的地的名稱。");
            }
            else
            {
	            alert("Please enter the name of a City or Destination.");
            }
	        return false;
        }
        
        if (kwname == txtkw)
        {
            if (lan.toLowerCase() == 'zh-cn')
            {
	            alert("请输入城市或目的地的名称。");
            }
            else if (lan.toLowerCase() == 'zh-tw')
            {
	            alert("請輸入城市或目的地的名稱。");
            }
            else
            {
	            alert("Please enter the name of a City or Destination.");
            }
	        return false;
        }
        
        if (dt1 == 'Invalid Date')
        {
            if (lan.toLowerCase() == 'zh-cn')
            {
	            alert("请选择签入日期。");
            }
            else if (lan.toLowerCase() == 'zh-tw')
            {
	            alert("請選擇簽入日期。");
            }
            else
            {
	            alert("Please select checkin date.");
            }
	        return false;
        }
        
        if (dt1 == 'NaN')
        {
            if (lan.toLowerCase() == 'zh-cn')
            {
	            alert("请选择签入日期。");
            }
            else if (lan.toLowerCase() == 'zh-tw')
            {
	            alert("請選擇簽入日期。");
            }
            else
            {
	            alert("Please select checkin date.");
            }
	        return false;
        }

        if (dt2 == 'Invalid Date')
        {
            if (lan.toLowerCase() == 'zh-cn')
            {
	            alert("请选择离店日期。");
            }
            else if (lan.toLowerCase() == 'zh-tw')
            {
	            alert("請選擇離店日期。");
            }
            else
            {
	            alert("Please select checkout date.");
            }
	        return false;
        }
        
        if (dt2 == 'NaN')
        {
            if (lan.toLowerCase() == 'zh-cn')
            {
	            alert("请选择离店日期。");
            }
            else if (lan.toLowerCase() == 'zh-tw')
            {
	            alert("請選擇離店日期。");
            }
            else
            {
	            alert("Please select checkout date.");
            }
	        return false;
        }
        
        cid = toDateyyyyMMdd(cid);

        if (kwname != kwselect)
        {
            kwtype = '';
        }

        kwname = encodeURIComponent(kwname);
        
        var url = qsurl + '?urlref=' + urlref + '&url=' + url + '&kw=' + kwname + '&kwtp=' + kwtype + '&nn=' + nn + '&nr=' + nr + '&na=' + na + '&nc=' + nc + '&so=' + so + '&cid=' + cid + '&sid=' + sid + '&lan=' + lan;
        var form = $('<form action="' + url + '" method="post"></form>');
        $('body').append(form);
        $(form).submit();

	}
    catch(e)
    {
        alert(e);
    }
}

function qs_flight_v3(ocd, oca, ona, onc, odd, ord, orbrt, orbow, sid, lan)
{
    try
    {
        var qsurl   = URLFlightProcess();
        var urlref  = URLHomePage();
        var url     = URLFlightLanding();
    
        var cd      = $("#" + ocd).val();
        var ca      = $("#" + oca).val();
        var na      = $("#" + ona).val();
        var nc      = $("#" + onc).val();
        var dtdd    = new Date(Date.parse(toDateMMddyyyy($("#" + odd).val())));
        var dtrd    = new Date(Date.parse(toDateMMddyyyy($("#" + ord).val())));
        var dd      = toDateyyyyMMdd($("#" + odd).val());
        var rd      = toDateyyyyMMdd($("#" + ord).val());
        var rbrt    = document.getElementById(orbrt).checked;
        var rbow    = document.getElementById(orbow).checked;
        var rt      = 'return';
        var scode   = '';

        if (rbrt == true)
        {
            rt = 'return';
        }
        else
        {
            rt = 'oneway';
        }

        if (cd == '')
        {
		    alert("Please select Depart From.");
	        return false;
        }
        
        if (cd == 'Departure')
        {
		    alert("Please select Depart From.");
	        return false;
        }
        
        if (ca == '')
        {
		    alert("Please select Arrive At.");
	        return false;
        }
        
        if (ca == 'Arrival')
        {
		    alert("Please select Arrive At.");
	        return false;
        }
        
        if (dtdd == 'Invalid Date')
        {
	        alert("Please select depart date.");
	        return false;
        }
        
        if (dtdd == 'NaN')
        {
	        alert("Please select depart date.");
	        return false;
        }
        
        if ((rt == "return") && (dtrd == 'Invalid Date'))
        {
	        alert("Please select return date.");
	        return false;
        }
        
        if ((rt == "return") && (dtrd == 'NaN'))
        {
	        alert("Please select return date.");
	        return false;
        }

        if (rt == "oneway")
        {
	        rd = dd;
        }
        
        if (sid != "0")
        {
            scode = "&scode=" + sid;
        }

        var url = qsurl + '?lan=' + lan + scode  + '&urlref=' + urlref + '&url=' + url +
                        '&External=' + "1" + 
                        '&CobrandID=' + sid + 
                        '&SearchType=' + "ExactDate" + 
                        '&SeatClass=' + "Economy" + 
                        '&Directflight=' + "0" + 
                        '&CityCodeFrom=' + cd + 
                        '&CityCodeTo=' + ca + 
                        '&RouteType=' + rt + 
                        '&DepartDate=' + dd + 
                        '&DepartTimeRange=' + "ANY" + 
                        '&ReturnDate=' + rd + 
                        '&ReturnTimerange=' + "ANY" + 
                        '&NumofAdult=' + na + 
                        '&NumofChild=' + nc;
        var form = $('<form action="' + url + '" method="post">' +
                        '</form>');
                          
        $('body').append(form);
        $(form).submit();
    }
    catch(e)
    {
        alert(e);
    }
}

function qs_flight_v4(ocd, oca, ona, onc, odd, ord, orbrt, orbow, obc, sid, lan)
{
    try
    {
        var qsurl   = URLFlightProcess();
        var urlref  = URLHomePage();
        var url     = URLFlightLanding();
    
        var cd      = $("#" + ocd).val();
        var ca      = $("#" + oca).val();
        var na      = $("#" + ona).val();
        var nc      = $("#" + onc).val();
        var dtdd    = new Date(Date.parse(toDateMMddyyyy($("#" + odd).val())));
        var dtrd    = new Date(Date.parse(toDateMMddyyyy($("#" + ord).val())));
        var dd      = toDateyyyyMMdd($("#" + odd).val());
        var rd      = toDateyyyyMMdd($("#" + ord).val());
        var rbrt    = document.getElementById(orbrt).checked;
        var rbow    = document.getElementById(orbow).checked;
        var bc      = $("#" + obc).val();
        var rt      = 'return';
        var scode   = '';

        if (rbrt == true)
        {
            rt = 'return';
        }
        else
        {
            rt = 'oneway';
        }

        if (cd == '')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกเมืองต้นทาง");
            }
            else
            {
		        alert("Please select Depart From.");
            }
	        return false;
        }
        
        if (cd == 'เดินทางจาก') //'Departure')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกเมืองต้นทาง");
            }
            else
            {
		        alert("Please select Depart From.");
            }
	        return false;
        }
        
        if (ca == '')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกเมืองปลายทาง");
            }
            else
            {
		        alert("Please select Arrive At.");
            }
	        return false;
        }
        
        if (ca == 'ถึง') //'Arrival')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกเมืองปลายทาง");
            }
            else
            {
		        alert("Please select Arrive At.");
            }
	        return false;
        }
        
        if (dtdd == 'Invalid Date')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันไป");
            }
            else
            {
		        alert("Please select depart date.");
            }
	        return false;
        }
        
        if (dtdd == 'NaN')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันไป");
            }
            else
            {
		        alert("Please select depart date.");
            }
	        return false;
        }
        
        if ((rt == "return") && (dtrd == 'Invalid Date'))
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันกลับ.");
            }
            else
            {
		        alert("Please select return date.");
            }
	        return false;
        }
        
        if ((rt == "return") && (dtrd == 'NaN'))
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันกลับ.");
            }
            else
            {
		        alert("Please select return date.");
            }
	        return false;
        }

        if (rt == "oneway")
        {
	        rd = dd;
        }
        
        if (sid != "0")
        {
            scode = "&scode=" + sid;
        }
		
		
		if (detectmob()){
			dd      = toDateMMddyyyy2(dd);
         	rd      = toDateMMddyyyy2(rd);
			var cd2 = $('#hdnDeparture').val();
			var ca2 = $('#hdnArrival').val();
			url = 'http://m.asiatravel.com/flights/flightSearchWait.aspx?'+
					'External=' + "1" +
					'&CobrandID=' + sid + 
					'&SearchType=' +  "ExactDate" + 
					'&SeatClass=' + bc + 
					'&Directflight=' + "0" + 
					'&CityCodeFrom=' + cd2 + 
					'&CityCodeTo=' + ca2 + 
					'&RouteType=' + rt + 
					'&DepartDate=' + dd + 
					'&DepartTimeRange=' + "ANY" + 
					'&ReturnDate=' + rd +
					'&ReturnTimerange=' + "ANY" + 
					'&NumofAdult=' + na + 
					'&NumofChild=' + nc +
					'&culture=' + lan;
		}
		else{
			url = qsurl + '?lan=' + lan + scode  + '&urlref=' + urlref + '&url=' + url +
                        '&External=' + "1" + 
                        '&CobrandID=' + sid + 
                        '&SearchType=' + "ExactDate" + 
                        '&SeatClass=' + bc + 
                        '&Directflight=' + "0" + 
                        '&CityCodeFrom=' + cd + 
                        '&CityCodeTo=' + ca + 
                        '&RouteType=' + rt + 
                        '&DepartDate=' + dd + 
                        '&DepartTimeRange=' + "ANY" + 
                        '&ReturnDate=' + rd + 
                        '&ReturnTimerange=' + "ANY" + 
                        '&NumofAdult=' + na + 
                        '&NumofChild=' + nc;
			}	

        
						
						
        var form = $('<form action="' + url + '" method="post">' +
                        '</form>');
                          
        $('body').append(form);
        $(form).submit();
    }
    catch(e)
    {
        alert(e);
    }
}

function qs_packageland2(qsurl, oddl, pc, sid, lan)
{
    try
    {

		
        var ddl  = $("#" + oddl + " option:selected").val();
        var ct  = '';
        var cd  = '';
        var scode  = '';

        if (ddl == '0')
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกเมืองปลายทาง");
            }
            else
            {
		        alert("Please select destination city.");
            }
	        return false;
        }
        else
        {
            ct = ddl.split(",")[0];
            cd = ddl.split(",")[1];
        }
        
        if (sid != "1000")
        {
            scode = "&scode=" + sid;
        }
        
		
		if (detectmob())
		{
			qsurl = 'http://m.asiatravel.com/packages/tour/TourList.aspx?'
			var url = qsurl + '&lan=' + lan  + '&sid=ATM26008DZ' + '&ctr=' + ct + '&cty=' + cd;
			}
			
		else
		{
			qsurl = 'http://packages.asiatravel.com/packagebooking/packages-list.aspx'
			var url = qsurl + '?lan=' + lan + scode + '&pc=' + pc + '&country=' + ct + '&destcity=' + cd;
			}	
		
		
        
		
		
        var form = $('<form action="' + url + '" method="post"></form>');
                          
        $('body').append(form);
        $(form).submit();
    }
    catch(e)
    {
        alert(e);
    }
}

function toDateMMddyyyy(s){
  var s = s.split(/[/\.-]/);
  return (s[1] + '/' + s[0] + '/' + s[2]);
}
function toDateMMddyyyy2(s){
  var s = s.split(/[/\.-]/);
  return (s[1] + '/' + s[2] + '/' + s[0]);
}


function toDateyyyyMMdd(s){
  var s = s.split(/[/\.-]/);
  return (s[2] + '-' + s[1] + '-' + s[0]);
}

function SetDefaultHotelDest(){
    try
    {
        var strDestinationCity; 
        var TextBox_HotelKeyword;
        strDestinationCity = $("#ctid").val();
        if ((strDestinationCity != undefined) && (strDestinationCity != ''))
        {
            TextBox_HotelKeyword = $("#TextBox_HotelKeyword");
            TextBox_HotelKeyword.val(strDestinationCity);
            TextBox_HotelKeyword.css("color","#000");
        }
    }
    catch(e)
    {}
}

function qs_packageairflighthoteltour(qsurl, urlref, url, odepart, odest, odepartdate, oreturndate, ototalrooms,
                                      orm1adt, orm1drpchd, orm1chdage, orm1drpchdwobed, orm1chdwobedage,
                                      orm2adt, orm2drpchd, orm2chdage, orm2drpchdwobed, orm2chdwobedage,
                                      orm3adt, orm3drpchd, orm3chdage, orm3drpchdwobed, orm3chdwobedage,
                                      orm4adt, orm4drpchd, orm4chdage, orm4drpchdwobed, orm4chdwobedage,
                                      orm5adt, orm5drpchd, orm5chdage, orm5drpchdwobed, orm5chdwobedage,
                                      textdepart, textarrival, pc, sid, lan)
{
    try
    {
        var sdepart             = $("#" + odepart).val();
        var sdest               = $("#" + odest).val();
        var sdepartdatevalidate = new Date(Date.parse(toDateMMddyyyy($("#" + odepartdate).val())));
        var sreturndatevalidate = new Date(Date.parse(toDateMMddyyyy($("#" + oreturndate).val())));
        var sdepartdate         = toDateyyyyMMdd($("#" + odepartdate).val());
        var sreturndate         = toDateyyyyMMdd($("#" + oreturndate).val());
        
        var stotalrooms         = $("#" + ototalrooms).val();
        
        var srm1adt             = $("#" + orm1adt).val();
        var srm1drpchd          = $("#" + orm1drpchd).val();
        var srm1chdage          = $("#" + orm1chdage).val();
        var srm1drpchdwobed     = $("#" + orm1drpchdwobed).val();
        var srm1chdwobedage     = $("#" + orm1chdwobedage).val();
        
        var srm2adt             = $("#" + orm2adt).val();
        var srm2drpchd          = $("#" + orm2drpchd).val();
        var srm2chdage          = $("#" + orm2chdage).val();
        var srm2drpchdwobed     = $("#" + orm2drpchdwobed).val();
        var srm2chdwobedage     = $("#" + orm2chdwobedage).val();
        
        var srm3adt             = $("#" + orm3adt).val();
        var srm3drpchd          = $("#" + orm3drpchd).val();
        var srm3chdage          = $("#" + orm3chdage).val();
        var srm3drpchdwobed     = $("#" + orm3drpchdwobed).val();
        var srm3chdwobedage     = $("#" + orm3chdwobedage).val();
        
        var srm4adt             = $("#" + orm4adt).val();
        var srm4drpchd          = $("#" + orm4drpchd).val();
        var srm4chdage          = $("#" + orm4chdage).val();
        var srm4drpchdwobed     = $("#" + orm4drpchdwobed).val();
        var srm4chdwobedage     = $("#" + orm4chdwobedage).val();
        
        var srm5adt             = $("#" + orm5adt).val();
        var srm5drpchd          = $("#" + orm5drpchd).val();
        var srm5chdage          = $("#" + orm5chdage).val();
        var srm5drpchdwobed     = $("#" + orm5drpchdwobed).val();
        var srm5chdwobedage     = $("#" + orm5chdwobedage).val();
        
        var scode               = "";

        if ((sdepart == '') || (sdepart == textdepart))
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาระบุชื่อเมืองต้นทางที่ถูกต้อง.");
            }
            else
            {
		        alert("Please enter valid departure city.");
            }
	        return false;
        }
        if ((sdest == '') || (sdest == textarrival))
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาระบุชื่อเมืองปลายทางที่ถูกต้อง");
            }
            else
            {
		        alert("Please enter valid arrival city.");
            }
	        return false;
        }
        if ((sdepartdatevalidate == 'Invalid Date') || (sdepartdatevalidate == 'NaN')) 
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันไป");
            }
            else
            {
		        alert("Please select depart date.");
            }
	        return false;
        }
        if ((sreturndatevalidate == 'Invalid Date') || (sreturndatevalidate == 'NaN')) 
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันกลับ");
            }
            else
            {
		        alert("Please select return date.");
            }
	        return false;
        }
        
        if (sdepartdate == sreturndate)
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("วันกลับต้องอยู่อย่างน้อย 1 วันหลังจากวันเดินทาง.");
            }
            else
            {
		        alert("Return Date at least 1 day after Depart Date.");
            }
	        return false;
        }

        var dateforcompare = new Date(sdepartdate); 
        dateforcompare.setDate(dateforcompare.getDate() + 35)
        if (dateforcompare <= sreturndatevalidate)
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("ตั๋วมีอายุถึงวันที่  " + FromDateToMMddyyyy(dateforcompare));
            }
            else
            {
		        alert("Maximum Return date is " + FromDateToMMddyyyy(dateforcompare));
            }
	        return false;
        }
        
        if (srm1drpchd == "1")
        {
            if (srm1chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1.");
                }
                else
                {
		            alert("Please enter age of child in room 1.");
                }
	            return false;
            }
            else if (isNaN(srm1chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 1 in numeric.");
                }
	            return false;
            }
            else if ((srm1chdage < 2) || (srm1chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 1 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm1drpchdwobed == "1")
        {
            if (srm1chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1.");
                }
                else
                {
		            alert("Please enter age of child in room 1.");
                }
	            return false;
            }
            else if (isNaN(srm1chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 1 in numeric.");
                }
	            return false;
            }
            else if ((srm1chdwobedage < 2) || (srm1chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 1 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm2drpchd == "1")
        {
            if (srm2chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2.");
                }
                else
                {
		            alert("Please enter age of child in room 2.");
                }
	            return false;
            }
            else if (isNaN(srm2chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 2 in numeric.");
                }
	            return false;
            }
            else if ((srm2chdage < 2) || (srm2chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 2 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm2drpchdwobed == "1")
        {
            if (srm2chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2.");
                }
                else
                {
		            alert("Please enter age of child in room 2.");
                }
	            return false;
            }
            else if (isNaN(srm2chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 2 in numeric.");
                }
	            return false;
            }
            else if ((srm2chdwobedage < 2) || (srm2chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 2 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm3drpchd == "1")
        {
            if (srm3chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3.");
                }
                else
                {
		            alert("Please enter age of child in room 3.");
                }
	            return false;
            }
            else if (isNaN(srm3chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 3 in numeric.");
                }
	            return false;
            }
            else if ((srm3chdage < 2) || (srm3chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 3 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm3drpchdwobed == "1")
        {
            if (srm3chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3.");
                }
                else
                {
		            alert("Please enter age of child in room 3.");
                }
	            return false;
            }
            else if (isNaN(srm3chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 3 in numeric.");
                }
	            return false;
            }
            else if ((srm3chdwobedage < 2) || (srm3chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 3 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm4drpchd == "1")
        {
            if (srm4chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4.");
                }
                else
                {
		            alert("Please enter age of child in room 4.");
                }
	            return false;
            }
            else if (isNaN(srm4chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 4 in numeric.");
                }
	            return false;
            }
            else if ((srm4chdage < 2) || (srm4chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 4 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm4drpchdwobed == "1")
        {
            if (srm4chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4.");
                }
                else
                {
		            alert("Please enter age of child in room 4.");
                }
	            return false;
            }
            else if (isNaN(srm4chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 4 in numeric.");
                }
	            return false;
            }
            else if ((srm4chdwobedage < 2) || (srm4chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 4 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm5drpchd == "1")
        {
            if (srm5chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5.");
                }
                else
                {
		            alert("Please enter age of child in room 5.");
                }
	            return false;
            }
            else if (isNaN(srm5chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 5 in numeric.");
                }
	            return false;
            }
            else if ((srm5chdage < 2) || (srm5chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 5 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm5drpchdwobed == "1")
        {
            if (srm5chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5.");
                }
                else
                {
		            alert("Please enter age of child in room 5.");
                }
	            return false;
            }
            else if (isNaN(srm5chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 5 in numeric.");
                }
	            return false;
            }
            else if ((srm5chdwobedage < 2) || (srm5chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 5 between 2 - 11 years.");
                }
	            return false;
            }
        }
        
        if (sid != "1000")
        {
            scode = "&scode=" + sid;
        }

        var url = qsurl + '?urlref=' + urlref + '&url=' + url + '&lan=' + lan + scode + '&pc=' + pc + '&departcity=' + sdepart + '&destcity=' + sdest +
                    '&depdate=' + sdepartdate + '&rtndate=' + sreturndate + '&troom=' + stotalrooms + 
                    '&r1a=' + srm1adt + '&r1c=' + srm1chdage + '&r1cwb=' + srm1chdwobedage + 
                    '&r2a=' + srm2adt + '&r2c=' + srm2chdage + '&r2cwb=' + srm2chdwobedage + 
                    '&r3a=' + srm3adt + '&r3c=' + srm3chdage + '&r3cwb=' + srm3chdwobedage + 
                    '&r4a=' + srm4adt + '&r4c=' + srm4chdage + '&r4cwb=' + srm4chdwobedage + 
                    '&r5a=' + srm5adt + '&r5c=' + srm5chdage + '&r5cwb=' + srm5chdwobedage;
                    
        var form = $('<form action="' + url + '" method="post"></form>');
                          
        $('body').append(form);
        $(form).submit();
    }
    catch(e)
    {
        alert(e);
    }
}

function qs_packageairflighthotel2(qsurl, urlref, url, odepart, odest, odepartdate, oreturndate, ototalrooms,
                                    orm1adt, orm1drpchd, orm1chdage, orm1drpchdwobed, orm1chdwobedage,
                                    orm2adt, orm2drpchd, orm2chdage, orm2drpchdwobed, orm2chdwobedage,
                                    orm3adt, orm3drpchd, orm3chdage, orm3drpchdwobed, orm3chdwobedage,
                                    orm4adt, orm4drpchd, orm4chdage, orm4drpchdwobed, orm4chdwobedage,
                                    orm5adt, orm5drpchd, orm5chdage, orm5drpchdwobed, orm5chdwobedage,
                                    textdepart, textarrival, pc, sid, lan)
{
    try
    {
        var sdepart             = $("#" + odepart).val();
        var sdest               = $("#" + odest).val();
        var sdepartdatevalidate = new Date(Date.parse(toDateMMddyyyy($("#" + odepartdate).val())));
        var sreturndatevalidate = new Date(Date.parse(toDateMMddyyyy($("#" + oreturndate).val())));
        var sdepartdate         = toDateyyyyMMdd($("#" + odepartdate).val());
        var sreturndate         = toDateyyyyMMdd($("#" + oreturndate).val());
        
        var stotalrooms         = $("#" + ototalrooms).val();
        
        var srm1adt             = $("#" + orm1adt).val();
        var srm1drpchd          = $("#" + orm1drpchd).val();
        var srm1chdage          = $("#" + orm1chdage).val();
        var srm1drpchdwobed     = $("#" + orm1drpchdwobed).val();
        var srm1chdwobedage     = $("#" + orm1chdwobedage).val();
        
        var srm2adt             = $("#" + orm2adt).val();
        var srm2drpchd          = $("#" + orm2drpchd).val();
        var srm2chdage          = $("#" + orm2chdage).val();
        var srm2drpchdwobed     = $("#" + orm2drpchdwobed).val();
        var srm2chdwobedage     = $("#" + orm2chdwobedage).val();
        
        var srm3adt             = $("#" + orm3adt).val();
        var srm3drpchd          = $("#" + orm3drpchd).val();
        var srm3chdage          = $("#" + orm3chdage).val();
        var srm3drpchdwobed     = $("#" + orm3drpchdwobed).val();
        var srm3chdwobedage     = $("#" + orm3chdwobedage).val();
        
        var srm4adt             = $("#" + orm4adt).val();
        var srm4drpchd          = $("#" + orm4drpchd).val();
        var srm4chdage          = $("#" + orm4chdage).val();
        var srm4drpchdwobed     = $("#" + orm4drpchdwobed).val();
        var srm4chdwobedage     = $("#" + orm4chdwobedage).val();
        
        var srm5adt             = $("#" + orm5adt).val();
        var srm5drpchd          = $("#" + orm5drpchd).val();
        var srm5chdage          = $("#" + orm5chdage).val();
        var srm5drpchdwobed     = $("#" + orm5drpchdwobed).val();
        var srm5chdwobedage     = $("#" + orm5chdwobedage).val();
        
        var scode               = "";

        if ((sdepart == '') || (sdepart == textdepart))
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาระบุชื่อเมืองต้นทางที่ถูกต้อง.");
            }
            else
            {
		        alert("Please enter valid departure city.");
            }
	        return false;
        }
        if ((sdest == '') || (sdest == textarrival))
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาระบุชื่อเมืองปลายทางที่ถูกต้อง");
            }
            else
            {
		        alert("Please enter valid arrival city.");
            }
	        return false;
        }
        if ((sdepartdatevalidate == 'Invalid Date') || (sdepartdatevalidate == 'NaN')) 
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันไป");
            }
            else
            {
		        alert("Please select depart date.");
            }
	        return false;
        }
        if ((sreturndatevalidate == 'Invalid Date') || (sreturndatevalidate == 'NaN')) 
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("กรุณาเลือกวันกลับ");
            }
            else
            {
		        alert("Please select return date.");
            }
	        return false;
        }
        
        if (sdepartdate == sreturndate)
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("วันกลับต้องอยู่อย่างน้อย 1 วันหลังจากวันเดินทาง.");
            }
            else
            {
		        alert("Return Date at least 1 day after Depart Date.");
            }
	        return false;
        }

        var dateforcompare = new Date(sdepartdate); 
        dateforcompare.setDate(dateforcompare.getDate() + 35)
        if (dateforcompare <= sreturndatevalidate)
        {
            if (lan.toLowerCase() == 'th-th')
            {
		        alert("ตั๋วมีอายุถึงวันที่  " + FromDateToMMddyyyy(dateforcompare));
            }
            else
            {
		        alert("Maximum Return date is " + FromDateToMMddyyyy(dateforcompare));
            }
	        return false;
        }
        
        if (srm1drpchd == "1")
        {
            if (srm1chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1.");
                }
                else
                {
		            alert("Please enter age of child in room 1.");
                }
	            return false;
            }
            else if (isNaN(srm1chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 1 in numeric.");
                }
	            return false;
            }
            else if ((srm1chdage < 2) || (srm1chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 1 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm1drpchdwobed == "1")
        {
            if (srm1chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1.");
                }
                else
                {
		            alert("Please enter age of child in room 1.");
                }
	            return false;
            }
            else if (isNaN(srm1chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 1 in numeric.");
                }
	            return false;
            }
            else if ((srm1chdwobedage < 2) || (srm1chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 1 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 1 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm2drpchd == "1")
        {
            if (srm2chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2.");
                }
                else
                {
		            alert("Please enter age of child in room 2.");
                }
	            return false;
            }
            else if (isNaN(srm2chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 2 in numeric.");
                }
	            return false;
            }
            else if ((srm2chdage < 2) || (srm2chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 2 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm2drpchdwobed == "1")
        {
            if (srm2chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2.");
                }
                else
                {
		            alert("Please enter age of child in room 2.");
                }
	            return false;
            }
            else if (isNaN(srm2chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 2 in numeric.");
                }
	            return false;
            }
            else if ((srm2chdwobedage < 2) || (srm2chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 2 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 2 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm3drpchd == "1")
        {
            if (srm3chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3.");
                }
                else
                {
		            alert("Please enter age of child in room 3.");
                }
	            return false;
            }
            else if (isNaN(srm3chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 3 in numeric.");
                }
	            return false;
            }
            else if ((srm3chdage < 2) || (srm3chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 3 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm3drpchdwobed == "1")
        {
            if (srm3chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3.");
                }
                else
                {
		            alert("Please enter age of child in room 3.");
                }
	            return false;
            }
            else if (isNaN(srm3chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 3 in numeric.");
                }
	            return false;
            }
            else if ((srm3chdwobedage < 2) || (srm3chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 3 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 3 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm4drpchd == "1")
        {
            if (srm4chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4.");
                }
                else
                {
		            alert("Please enter age of child in room 4.");
                }
	            return false;
            }
            else if (isNaN(srm4chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 4 in numeric.");
                }
	            return false;
            }
            else if ((srm4chdage < 2) || (srm4chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 4 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm4drpchdwobed == "1")
        {
            if (srm4chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4.");
                }
                else
                {
		            alert("Please enter age of child in room 4.");
                }
	            return false;
            }
            else if (isNaN(srm4chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 4 in numeric.");
                }
	            return false;
            }
            else if ((srm4chdwobedage < 2) || (srm4chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 4 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 4 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm5drpchd == "1")
        {
            if (srm5chdage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5.");
                }
                else
                {
		            alert("Please enter age of child in room 5.");
                }
	            return false;
            }
            else if (isNaN(srm5chdage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 5 in numeric.");
                }
	            return false;
            }
            else if ((srm5chdage < 2) || (srm5chdage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 5 between 2 - 11 years.");
                }
	            return false;
            }
        }
        if (srm5drpchdwobed == "1")
        {
            if (srm5chdwobedage == "") 
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5.");
                }
                else
                {
		            alert("Please enter age of child in room 5.");
                }
	            return false;
            }
            else if (isNaN(srm5chdwobedage) == true)
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 เป็นตัวเลข");
                }
                else
                {
		            alert("Please enter age of child in room 5 in numeric.");
                }
	            return false;
            }
            else if ((srm5chdwobedage < 2) || (srm5chdwobedage > 11))
            {
                if (lan.toLowerCase() == 'th-th')
                {
		            alert("กรุณาระบุอายุเด็กในห้องที่ 5 ระหว่าง 2 -11 ปี");
                }
                else
                {
		            alert("Please enter age of child in room 5 between 2 - 11 years.");
                }
	            return false;
            }
        }
        
        if (sid != "1000")
        {
            scode = "&scode=" + sid;
        }

        var url = qsurl + '?urlref=' + urlref + '&url=' + url + '&lan=' + lan + scode + '&pc=' + pc + '&departcity=' + sdepart + '&destcity=' + sdest +
                    '&depdate=' + sdepartdate + '&rtndate=' + sreturndate + '&troom=' + stotalrooms + 
                    '&r1a=' + srm1adt + '&r1c=' + srm1chdage + '&r1cwb=' + srm1chdwobedage + 
                    '&r2a=' + srm2adt + '&r2c=' + srm2chdage + '&r2cwb=' + srm2chdwobedage + 
                    '&r3a=' + srm3adt + '&r3c=' + srm3chdage + '&r3cwb=' + srm3chdwobedage + 
                    '&r4a=' + srm4adt + '&r4c=' + srm4chdage + '&r4cwb=' + srm4chdwobedage + 
                    '&r5a=' + srm5adt + '&r5c=' + srm5chdage + '&r5cwb=' + srm5chdwobedage;
                    
        var form = $('<form action="' + url + '" method="post"></form>');
                          
        $('body').append(form);
        $(form).submit();
    }
    catch(e)
    {
        alert(e);
    }
}