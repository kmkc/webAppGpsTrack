var ws;
var host = window.location.host;
var gpsmax = 2, pinmax = 2;
var gpslog = [], pin = [], popup = [];

ws = new WebSocket('ws://' + host + '/websocket');
ws.onmessage = function(ev) {
    // Add to GPS array
    gpslog.unshift(ev.data);
    if (gpslog.length > gpsmax) { gpslog.pop(); }

    // Change HTML text
    var txt = '';
    for (var i = 0; i < gpslog.length; ++i) {
        txt += gpslog[i] + '<br>';
    }
    document.getElementById('sidebar').innerHTML = txt;

    // Analyzing receive data
    var splitstr = gpslog[0].split(/\s+/);
    console.log(gpslog[0]);

    // Descript pin and popup on the map
    var latlon = splitstr[2].split(',');
    console.log(latlon);
    pin.unshift(L.marker([parseFloat(latlon[0]),
                          parseFloat(latlon[1])]));
    pin[0].addTo(map001);
    popup.unshift(pin[0].bindPopup(splitstr[1]));
    popup[0].openPopup();

    // Remove oldest pin
    if (pin.length > pinmax) {
        map001.removeLayer(pin[pinmax]);
        pin.pop();
    }
}
