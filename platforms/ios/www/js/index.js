
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
    
    console.log("ok");


$('document').ready(function(){
        console.log("yolo");

        // $.get('./img/logo.svg', function(svg){
        //     var svgElement = $(svg).find('svg');
        //     $('#logo').append(svgElement);
        // });


        /*
        document.getElementById("svg1").addEventListener("load", function() {
            var doc = this.getSVGDocument();
            var rect = doc.querySelector("rect"); // suppose our image contains a <rect>

                $("#logo").on("click", function(){
                    rect.setAttribute("fill", "green");
                });
        });
*/

  });