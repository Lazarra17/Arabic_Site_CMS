/* ------------------------------------------------------------------------------------------- */
function URLHomePage()
{
    return 'www.asiatravel.com';
}
/* ------------------------------------------------------------------------------------------- */


/* Hotel URL */
/* ------------------------------------------------------------------------------------------- */
function URLHotelProcess()
{
    return 'http://search.asiatravel.com/Hotel-Search-Result.aspx';
}
function URLHotelLanding()
{
    return 'book.asiatravel.com';
}
function URLHotelJsonP()
{
    return 'http://atws.asiatravel.com/QuickSearchWS/JSONP-EndPoint.asmx/GetKeywordListHotel';
}
function URLHotelPopularCityJsonP()
{
    return 'http://atws.asiatravel.com/QuickSearchWS/JSONP-EndPoint.asmx/GetPopularCityListHotel';
}
/* ------------------------------------------------------------------------------------------- */


/* Flight URL */
/* ------------------------------------------------------------------------------------------- */
function URLFlightProcess()
{
    return 'http://search.asiatravel.com/Flight-Search.aspx';
}
function URLFlightLanding()
{
    return 'flight.asiatravel.com/crs.flight/www/search.wait.aspx';
}
function URLFlightJsonP()
{
    return 'http://atws.asiatravel.com/quicksearchws/JSONP-EndPoint.asmx/GetCityList';
}
function URLMultiStop(lan, scode)
{
    var url = 'http://flight.asiatravel.com/crs.flight/www/Multi.Stop.Flight.aspx';
    
    if (lan != '')
    {url = url + '?lan=' + lan;}
    else
    {url = url + '?lan=en-US';}

    if (scode != '')
    {url = url + '&scode=' + scode;}

    return url;
}

function URLTopDestinationSoap()
{		
	 //LIVE
	 return 'http://flightws.asiatravel.com/flightpromofarews/ATFlightPromoFare.asmx?op=GetTopDestinations';
	 //UAT
	 //return 'http://flight.asiatravel.net/FlightPromoFareWS/ATFlightPromoFare.asmx?op=GetTopDestinations';
	 
}

function URLTopAirlinesSoap()
{
	 //LIVE
	 return 'http://flightws.asiatravel.com/flightpromofarews/ATFlightPromoFare.asmx?op=GetTopAirlines';
	 //UAT
	 //return 'http://flight.asiatravel.net/FlightPromoFareWS/ATFlightPromoFare.asmx?op=GetTopAirlines';
}

/* ------------------------------------------------------------------------------------------- */


/* Package URL */
/* ------------------------------------------------------------------------------------------- */
function URLFHT(lan, scode)
{
    var url = 'http://packages.asiatravel.com/packagebooking/flight-hotels-tours.aspx';
    
    if (lan != '')
    {url = url + '?lan=' + lan;}
    else
    {url = url + '?lan=en-US';}

    if (scode != '')
    {url = url + '&scode=' + scode;}

    return url;
}
function URLFH(lan, scode)
{
    var url = 'http://packages.asiatravel.com/packagebooking/flight-hotels.aspx';
    
    if (lan != '')
    {url = url + '?lan=' + lan;}
    else
    {url = url + '?lan=en-US';}

    if (scode != '')
    {url = url + '&scode=' + scode;}

    return url;
}
function URLT(lan, scode)
{
    var url = 'http://packages.asiatravel.com/packagebooking/tours-attractions.aspx';
    
    if (lan != '')
    {url = url + '?lan=' + lan;}
    else
    {url = url + '?lan=en-US';}

    if (scode != '')
    {url = url + '&scode=' + scode;}

    return url;
}
function URLHT(lan, scode)
{
    var url = 'http://packages.asiatravel.com/packagebooking/hotels-tours.aspx';
    
    if (lan != '')
    {url = url + '?lan=' + lan;}
    else
    {url = url + '?lan=en-US';}

    if (scode != '')
    {url = url + '&scode=' + scode;}

    return url;
}
/* ------------------------------------------------------------------------------------------- */