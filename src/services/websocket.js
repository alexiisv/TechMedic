import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_URL = 'http://localhost:8085/SerialAndRest';

class WebSocketService {
    constructor() {
        this.client = new Client({
            webSocketFactory: () => new SockJS(SOCKET_URL),
            reconnectDelay: 5000,
            onConnect: () => {
                console.log('Conectado al WebSocket');
                this.subscribe();
            },
            onStompError: (frame) => {
                console.error('Error en STOMP:', frame);
            },
        });
    }

    connect() {
        this.client.activate();
    }

    subscribe(callback) {
        this.client.subscribe('/topic/llamado', (message) => {
            const llamado = JSON.parse(message.body);
            console.log('Llamado recibido:', llamado);
            callback(llamado);
        });
    }

    disconnect() {
        this.client.desactivate();
    }
}

const webSocketService = new WebSocketService();
export default webSocketService;