/*
 $(document).ready(function(){
            
 
           /*
            
            $("#btn-oneway").click(function(){
                
                
                $("#inputArrivalDate").prop('disabled', true);
                $("#btn-rnd").removeClass("active")
                
            });
            
              $("#btn-rnd").click(function(){
                
                
                $("#inputArrivalDate").prop('disabled', false);
      
            });
      
            $("#btn-multi").click(function (){
                
                window.location="http://flight.asiatravel.com/crs.flight/www/Multi.Stop.Flight.aspx?lan=ar-AE";
                
            });
            
            
            */
         $("#withBed").change(function (){
            var withBed = $("#withBed").val();
            
            if (withBed > 0){
            $("#withBedAge").prop('disabled',false);
            }else{
            $("#withBedAge").prop('disabled',true);  
            }
            
         });

         $("#withoutBed").change(function (){
            var withBed = $("#withoutBed").val();
            
            if (withBed > 0){
            $("#withoutBedAge").prop('disabled',false);
            }else{
            $("#withoutBedAge").prop('disabled',true);  
            }
            
         });        
         
         
           $("#fwithBed").change(function (){
            var withBed = $("#fwithBed").val();
            
            if (withBed > 0){
            $("#fwithBedAge").prop('disabled',false);
            }else{
            $("#fwithBedAge").prop('disabled',true);  
            }
            
         });

         $("#fwithoutBed").change(function (){
            var withBed = $("#fwithoutBed").val();
            
            if (withBed > 0){
            $("#fwithoutBedAge").prop('disabled',false);
            }else{
            $("#fwithoutBedAge").prop('disabled',true);  
            }
            
         });   
         
        /**
           $(".Datepicker" ).datepicker({ numberOfMonths: 2, changeMonth: true,changeYear:true,minDate: 0 });    
           $(".Datepicker2" ).datepicker({ numberOfMonths: 2, changeMonth: true,changeYear:true,minDate: 0 });   
           
       
 
           
      $("#inputCheckIn").on('change',function(){
        
           $("#inputCheckOut" ).removeClass("Datepicker2 hasDatepicker");  
          
            var da = $("#inputCheckIn").val();
            var d = new Date();
            var day = d.toLocaleDateString();
            var date1 = new Date(da);
            var date2 = new Date(day);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
            
            $(".Datepicker2" ).datepicker({ numberOfMonths: 2, changeMonth: true,changeYear:true, minDate: diffDays });   
        
      });
        
    */
    
    // Hotel Check 
 /*
     var dateFormat = "mm/dd/yy",
      from = $( "#inputCheckIn" )
        .datepicker({
          
          changeMonth: true,
          changeYear : true,
          minDate: 0,
          numberOfMonths: 2
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#inputCheckOut" ).datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
  
     
       // Flight Check 
     
         var dateFormat = "mm/dd/yy",
      from1 = $( "#inputDepartDate" )
        .datepicker({
          
          changeMonth: true,
          changeYear : true,
          minDate: 0,
          numberOfMonths: 2
        })
        .on( "change", function() {
          to1.datepicker( "option", "minDate", getDate( this ) );
        }),
      to1 = $( "#inputArrivalDate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from1.datepicker( "option", "maxDate", getDate( this ) );
      });
 
  
     
         // Flight Tour Tab Check 
     
         var dateFormat = "mm/dd/yy",
      from2 = $( "#inputFHTDepartureDate" )
        .datepicker({
          
          changeMonth: true,
          changeYear : true,
          minDate: 0,
          numberOfMonths: 2
        })
        .on( "change", function() {
          to2.datepicker( "option", "minDate", getDate( this ) );
        }),
      to2 = $( "#inputFHTReturnDate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from2.datepicker( "option", "maxDate", getDate( this ) );
      });
      
      
           
         // Flight + Hotel Tab Check 
     
         var dateFormat = "mm/dd/yy",
      from3 = $( "#inputFHArrivalCity" )
        .datepicker({
          
          changeMonth: true,
          changeYear : true,
          minDate: 0,
          numberOfMonths: 2
        })
        .on( "change", function() {
          to3.datepicker( "option", "minDate", getDate( this ) );
        }),
      to3 = $( "#inputFHReturnDate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from3.datepicker( "option", "maxDate", getDate( this ) );
      });
      
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
     
     
     
     
     
  
     
          
     
        });
     
     
     
     
     
        */
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        