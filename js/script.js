var ws;
var host = window.location.host;
var max = 5;
var logs = []

ws = new WebSocket('ws://' + host + '/websocket');
ws.onmessage = function(ev) {
    // Add to GPS array
    logs.push(ev.data);
    if (logs.length > max) {
        logs.shift();
    }

    // Change HTML text
    var txt = '';
    for (var i = logs.length; i > 0; --i) {
        txt += logs[i-1] + '<br>';
    }

    document.getElementById('sidebar').innerHTML = txt;
}
