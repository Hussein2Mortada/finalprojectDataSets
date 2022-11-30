
var xhr = new XMLHttpRequest;
var parsedrecord;
window.onload=pageSetup;

function pageSetup() {
	
    document.getElementById("libname").addEventListener("keyup", function (){ searchByLibraryName();},false);
    document.getElementById("libPostal").addEventListener("keyup", function (){ searchByLibraryPostal();},false);
    document.getElementById("libSquareFeet").addEventListener("keyup", function (){ searchByLibrarySqrFeet();},false);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/m9y7-ui7j.json", true);
  xhr.send();
	
	
}


/**
 *  {
        "library": "W.R. Castell Central Library",
        "postal_code": "T2G 2M2",
        "square_feet": "177532",
        "phone_number": "403-260-2600",
        "monday_open": "9:00",
        "monday_close": "20:00",
        "tuesday_open": "9:00",
        "tuesday_close": "20:00",
        "wednesday_open": "9:00",
        "wednesday_close": "20:00",
        "thursday_open": "9:00",
        "thursday_close": "20:00",
        "friday_open": "9:00",
        "friday_close": "17:00",
        "saturday_open": "10:00",
        "saturday_close": "17:00",
        "sunday_open": "12:00",
        "sunday_close": "17:00",
        "location": {
            "latitude": "51.0470276",
            "longitude": "-114.0578995"
        },
        "location_1": {
            "latitude": "51.0470276",
            "longitude": "-114.0578995",
            "human_address": "{\"address\": \"616 Macleod Tr SE\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    }
 */



function searchByLibraryName()
{
    document.getElementById("searchvalue").innerHTML="Searching by Library Name";
    var librarytoUse=libname.value.toUpperCase();
    libPostal.value="";
    libSquareFeet.value="";
    var gmap="";
    var position="";
    var output="<tr><th>Library</th><th>Postal Code</th><th>Square Feet</th><th>Phone Number</th><th>Location</th></tr>";

    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            var searchLib=record.library.toUpperCase();//assign
            if(searchLib.startsWith(librarytoUse))//partial match on string
            {
                output+="<tr><td>";
                output+=record.library;
                output+="</td><td>"
                output+=record.postal_code;
                output+="</td><td>";
                output+=record.square_feet;
                output+="</td><td>";
                output+=record.phone_number;
                output+="</td><td>";
                position=record.location.latitude+","+record.location.longitude;
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";
                output+=gmap;
                output+="</td></tr>";
            }
           
    }
    document.getElementById("searchresults").innerHTML=output;

}


function searchByLibraryPostal(){ //unfinished because first function doesnt work

}

function searchByLibrarySqrFeet(){//unfinished because first function doesnt work
    
}
