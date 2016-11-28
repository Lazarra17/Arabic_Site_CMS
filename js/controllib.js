// JavaScript Document
function quicksearchhideshow(selectedtype)
{
  try
  {
    if (selectedtype == 'FLIGHT')
    {
        hideshow('QuickSearchFlight', 'SHOW');
        hideshow('QuickSearchHotel', 'HIDE');
    }
    else if (selectedtype == 'HOTEL')
    {
        hideshow('QuickSearchFlight', 'HIDE');
        hideshow('QuickSearchHotel', 'SHOW');
    }
  }
  catch(e)
  {
    alert("Error encounter at quicksearchhideshow : " + e);
  }
}


function quicksearchflighthideshow(selectedtype, returndate, url)
{
  try
  {
    if (selectedtype == 'RETURN')
    {
        document.getElementById(returndate).disabled = false;
        document.getElementById(returndate).style.background = "";
    }
    else if (selectedtype == 'ONEWAY')
    {
        document.getElementById(returndate).disabled = true;
        document.getElementById(returndate).style.background = "#DEDBD5";
        document.getElementById(returndate).value = "";
    }
    else if (selectedtype == 'MULTISTOP')
    {
        window.location = url;
    }
  }
  catch(e)
  {
    alert("Error encounter at quicksearchflighthideshow : " + e);
  }
}

function hideshow(target, type)
{
  try
  {
    if (type == 'SHOW')
    {
        $("#"+target).show();
    }
    else if (type == 'HIDE')
    {
        $("#"+target).hide();
    }
    else if (type == 'TOGGLE')
    {

        if (document.getElementById(target).style.visibility == 'hidden')
        {
            document.getElementById(target).style.visibility = 'visible';
        }
        else
        {
            document.getElementById(target).style.visibility = 'hidden';
        }
    }
  }
  catch(e)
  {
    alert("Error encounter at hideshow : " + e);
  }
}

function overflowcontrol(divtarget, divcontrol)
{
  try
  {
    $("#"+divtarget).css('height', 'auto').css('overflow', 'visible');
    $("#"+divcontrol).css('display', 'none');
  }
  catch(e)
  {
    alert("Error encounter at overflowcontrol : " + e);
  }
}


function jsredirect(url)
{

    window.location = url;
}

function jsredirectdw(url, lan, pc, target)
{

    var ct = document.getElementById(target).value;
    
    if (ct != '0')
    {
        window.location = url + '?lan=' + lan + '&pc=' + pc + '&country=' + ct;
    }
}

//Package.Search.aspx 20151228 Joseph Avestruz
function validateroominfo(room, roominfo1, roominfo2, roominfo3, roominfo4, roominfo5)
{
  try
  {
    var totalroom = document.getElementById(room).value; 
    if (totalroom >= 2)
    {hideshow(roominfo2, 'SHOW');}
    else 
	{hideshow(roominfo2, 'HIDE');}
    if (totalroom >= 3) 
	{hideshow(roominfo3, 'SHOW');}
    else 
	{hideshow(roominfo3, 'HIDE');}
    if (totalroom >= 4) 
	{hideshow(roominfo4, 'SHOW');}
    else 
	{hideshow(roominfo4, 'HIDE');}
    if (totalroom >= 5) 
	{hideshow(roominfo5, 'SHOW');}
    else 
	{hideshow(roominfo5, 'HIDE');}
  }
  catch(e)
  {
    //alert("error encounter at validateroominfo : " + e);
  }
}

/*function validateAdultwithChild(DropdownlistAdult,DropdownlistChildWithBed,TextBoxChildAgeWithBed,DropdownlistChildWithoutBed,TextBoxChildAgeWithoutBed,IsFlightIncluded)
{
  try
  {
    if ((IsFlightIncluded == 'True') && (document.getElementById(DropdownlistAdult).value == 1))
    {
        document.getElementById(DropdownlistChildWithBed).disabled = true;
        document.getElementById(DropdownlistChildWithBed).style.color="#D1CDC6"
        document.getElementById(DropdownlistChildWithBed).value = 0;
        document.getElementById(TextBoxChildAgeWithBed).value = '';
        document.getElementById(TextBoxChildAgeWithBed).disabled = true;
    
        document.getElementById(DropdownlistChildWithoutBed).disabled = true;
        document.getElementById(DropdownlistChildWithoutBed).style.color="#D1CDC6"
        document.getElementById(DropdownlistChildWithoutBed).value = 0;
        document.getElementById(TextBoxChildAgeWithoutBed).value = '';
        document.getElementById(TextBoxChildAgeWithoutBed).disabled = true;
    }
    else if((document.getElementById(DropdownlistAdult).value == 1) && (document.getElementById(DropdownlistChildWithBed).value == 0))
    {
        document.getElementById(DropdownlistChildWithoutBed).disabled = true;
        document.getElementById(DropdownlistChildWithoutBed).style.color="#D1CDC6"
        document.getElementById(DropdownlistChildWithoutBed).value = 0;
        document.getElementById(TextBoxChildAgeWithoutBed).value = '';
        document.getElementById(TextBoxChildAgeWithoutBed).disabled = true;
    }
    else
    {
        document.getElementById(DropdownlistChildWithBed).disabled = false;
        document.getElementById(DropdownlistChildWithBed).style.color="#454545"
        
        document.getElementById(DropdownlistChildWithoutBed).disabled = false;
        document.getElementById(DropdownlistChildWithoutBed).style.color="#454545"
    }
  }
  catch(e)
  {
    //alert("error encounter at validateAdultwithChild : " + e);
  }
}*/

function validateAdultwithChild(DropdownlistAdult,DropdownlistChildWithBed,TextBoxChildAgeWithBed,DropdownlistChildWithoutBed,TextBoxChildAgeWithoutBed,IsFlightIncluded)
{
  try
  {
    //comment: FHT/FH same as HT
//    if ((IsFlightIncluded == 'True') && (document.getElementById(DropdownlistAdult).value == 1))
//    {
//        document.getElementById(DropdownlistChildWithBed).disabled = true;
//        document.getElementById(DropdownlistChildWithBed).style.color="#D1CDC6"
//        document.getElementById(DropdownlistChildWithBed).value = 0;
//        document.getElementById(TextBoxChildAgeWithBed).value = '';
//        document.getElementById(TextBoxChildAgeWithBed).disabled = true;
//    
//        document.getElementById(DropdownlistChildWithoutBed).disabled = true;
//        document.getElementById(DropdownlistChildWithoutBed).style.color="#D1CDC6"
//        document.getElementById(DropdownlistChildWithoutBed).value = 0;
//        document.getElementById(TextBoxChildAgeWithoutBed).value = '';
//        document.getElementById(TextBoxChildAgeWithoutBed).disabled = true;
//    }
    if((document.getElementById(DropdownlistAdult).value == 1) && (document.getElementById(DropdownlistChildWithBed).value == 0))
    {
        document.getElementById(DropdownlistChildWithoutBed).disabled = true;
        document.getElementById(DropdownlistChildWithoutBed).style.color="#D1CDC6"
        document.getElementById(DropdownlistChildWithoutBed).value = 0;
        document.getElementById(TextBoxChildAgeWithoutBed).value = '';
        document.getElementById(TextBoxChildAgeWithoutBed).disabled = true;
    }
    else if((document.getElementById(DropdownlistAdult).value == 1) && (document.getElementById(DropdownlistChildWithBed).value == 1))
    {
        document.getElementById(DropdownlistChildWithoutBed).disabled = false;
        document.getElementById(DropdownlistChildWithoutBed).style.color="#454545"
        document.getElementById(DropdownlistChildWithoutBed).value = 0;
        document.getElementById(TextBoxChildAgeWithoutBed).value = '';
        document.getElementById(TextBoxChildAgeWithoutBed).disabled = true;
    }
    else
    {
        document.getElementById(DropdownlistChildWithBed).disabled = false;
        document.getElementById(DropdownlistChildWithBed).style.color="#454545"
        
        document.getElementById(DropdownlistChildWithoutBed).disabled = false;
        document.getElementById(DropdownlistChildWithoutBed).style.color="#454545"
    }
  }
  catch(e)
  {
    //alert("error encounter at validateAdultwithChild : " + e);
  }
}

/*//Package.Search.aspx
function validatechildagetextbox(Mode,Adult,ChildWithBed,ChildWithoutBed,ChildAgeWoBed,ChildAgeTarget1,ChildAgeTarget2,trTarget)
{
  try
  {
    if (Mode == 'WB') 
    {
        ChildAge = ChildWithBed;
        
        if((document.getElementById(Adult).value == 1) && (document.getElementById(ChildAge).value == 0))
        {
            document.getElementById(ChildWithoutBed).disabled = true;
            document.getElementById(ChildWithoutBed).style.color="#D1CDC6"
            document.getElementById(ChildWithoutBed).value = 0;
            document.getElementById(ChildAgeWoBed).value = '';
            document.getElementById(ChildAgeWoBed).disabled = true;
        }
        else
        {
            document.getElementById(ChildWithoutBed).disabled = false;
            document.getElementById(ChildWithoutBed).style.color="#454545"
        }
    }
    else
    {
        ChildAge = ChildWithoutBed;
    }
    
    
    if(document.getElementById(ChildAge).value >= 1)
    {
        document.getElementById(trTarget).style.display = 'none';
        if(document.getElementById(ChildAge).value >= 1)
        {
            document.getElementById(ChildAgeTarget1).disabled=false;
        }
        if(document.getElementById(ChildAge).value == 2)
        { 
            document.getElementById(trTarget).style.cssText ='';
            document.getElementById(ChildAgeTarget2).disabled=false;
        }
    }
    else
    {
        document.getElementById(trTarget).style.display = 'none';
        document.getElementById(ChildAgeTarget1).value = '';
        document.getElementById(ChildAgeTarget1).disabled=true;
        document.getElementById(ChildAgeTarget2).value = '';
        document.getElementById(ChildAgeTarget2).disabled=true;
    }
  }
  catch(e)
  {
    //alert("error encounter at validatechildagetextbox : " + e);
  }
}*/

//Package.Search.aspx
function validatechildagetextbox(Mode,Adult,ChildWithBed,ChildWithoutBed,ChildAgeWoBed,ChildAgeTarget1,ChildAgeTarget2,trTarget)
{
  try
  {
    if (Mode == 'WB') 
    {
        ChildAge = ChildWithBed;
        
        if((document.getElementById(Adult).value == 1) && (document.getElementById(ChildAge).value == 0))
        {
            document.getElementById(ChildWithoutBed).disabled = true;
            document.getElementById(ChildWithoutBed).style.color="#D1CDC6"
            document.getElementById(ChildWithoutBed).value = 0;
            document.getElementById(ChildAgeWoBed).value = '';
            document.getElementById(ChildAgeWoBed).disabled = true;
        }
        else
        {
            document.getElementById(ChildWithoutBed).disabled = false;
            document.getElementById(ChildWithoutBed).style.color="#454545"
        }
    }
    else
    {
        ChildAge = ChildWithoutBed;
    }
    
    
    if(document.getElementById(ChildAge).value >= 1)
    {
        document.getElementById(trTarget).style.display = 'none';
        if(document.getElementById(ChildAge).value >= 1)
        {
            document.getElementById(ChildAgeTarget1).disabled=false;
        }
        if(document.getElementById(ChildAge).value == 2)
        { 
            document.getElementById(trTarget).style.cssText ='';
            document.getElementById(ChildAgeTarget2).disabled=false;
        }
    }
    else
    {
        document.getElementById(trTarget).style.display = 'none';
        document.getElementById(ChildAgeTarget1).value = '';
        document.getElementById(ChildAgeTarget1).disabled=true;
        document.getElementById(ChildAgeTarget2).value = '';
        document.getElementById(ChildAgeTarget2).disabled=true;
    }
  }
  catch(e)
  {
    //alert("error encounter at validatechildagetextbox : " + e);
  }
}

	