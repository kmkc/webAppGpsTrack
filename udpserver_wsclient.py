import socket
import sys
from websocket import create_connection

# socket; Low-level networking interface
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(('', 39153))

# websocket
ws = create_connection('ws://localhost:3001/websocket')

while True:
    try:
        data = s.recv(1024)
    except socket.error:
        pass
    else:
        ws.send(data)
