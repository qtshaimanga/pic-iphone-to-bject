
var macAddress = "dc7fc473563d2cf6ec23a2ee2a2a601d646d0aee";

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
    },
    onConnect: function() {
        bluetoothSerial.subscribe("\n", app.onMessage, app.subscribeFailed);
        statusDiv.innerHTML="Connected to " + macAddress + ".";        
    }, 
    onDisconnect: function() {
        alert("Disconnected");
        statusDiv.innerHTML="Disconnected.";
    },
    onMessage: function(data) {
        counter.innerHTML = data;        
    },
    subscribeFailed: function() {
        alert("subscribe failed");
    }
};


//voir CORS domaine avec GG CHROME

$('document').ready(function(){
       
    var cursor_y = 700;


    /*PLUS*/
    document.getElementById("plus").addEventListener('load', function(){
        var doc = this.getSVGDocument();
        var plus = doc.querySelector("g");
                               
    });


    document.getElementById("settings").addEventListener('load', function(){

        var a = this.getSVGDocument();
        var b = a.querySelector("svg");

        var modes = b.querySelector("#modes");
        var connect = b.querySelector("#connect");

        // warning -->  click on the line --> necessite des pleins
        $(modes).on('click', function(){
            console.log("modes");

            cursor_y = cursor_y + 10 ;
            movetocursor(cursor_y);

        });

        $(connect).on('click', function(){
            console.log("connect");

            cursor_y = cursor_y - 10 ;
            movetocursor(cursor_y);
        });

    });

    function movetocursor(y){
        var doc = document.getElementById("curseur").getSVGDocument();
        var polygon = doc.querySelector("polygon");

        var curseur_svg = doc.querySelector("svg");
        curseur_svg.setAttribute("height", y);  
    }
                    
});


    


 