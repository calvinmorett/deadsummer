var public_spreadsheet_url = '15TRqyf371YwFRByi1vPKRmKDsNFOSDtPky5b7dd4Cb4';
      function init() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true } );
      }
      window.addEventListener('DOMContentLoaded', init)
      function showInfo(data) {
        // data comes through as a simple array since simpleSheet is turned on
        document.getElementById("date").innerHTML = '<div class="event_label">Date</div>' + ['<div class="column">'] + [ data[0].day, ] + ['</div><div class="column">'] + [ data[1].day, ] + ['</div><div class="column">'] + [ data[2].day] + ['</div><div class="column">'] + [ data[3].day] + ['</div><div class="column">'] + [ data[4].day] + ['</div><div class="column">'] + [ data[5].day ] + ['</div>'].join(", ");
	
        document.getElementById("time").innerHTML = '<div class="event_label">Time</div>' + ['<div class="column">'] + [ data[0].time, ] + ['</div><div class="column">'] + [ data[1].time, ] + ['</div><div class="column">'] + [ data[2].time ] + ['</div><div class="column">'] + [ data[3].time, ] + ['</div><div class="column">'] + [ data[4].time, ] + ['</div><div class="column">'] + [ data[5].time ] + ['</div>'].join(", ");
        
        document.getElementById("venue").innerHTML = '<div class="event_label">Venue</div>' + ['<div class="column">'] + [ data[0].venue, ] + ['</div><div class="column">'] + [ data[1].venue, ] + ['</div><div class="column">'] + [ data[2].venue ] + ['</div><div class="column">'] + [ data[3].venue ] + ['</div><div class="column">'] + [ data[4].venue ] + ['</div><div class="column">'] + [ data[5].venue ] + ['</div>'].join(", ");
        
        console.log(data);
      }  

     $.ajax({
            url: public_spreadsheet_url, 
            type: "GET",   
            dataType: 'jsonp',
            cache: false,
            success: function(response){                          
                alert(response);                   
            }           
        });