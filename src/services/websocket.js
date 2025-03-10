import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SOCKET_URL = 'http://localhost:8085/SerialAndRest';

class WebSocketService {
    constructor() {
        if (!WebSocketService.instance) {
            this.client = new Client({
                webSocketFactory: () => new SockJS(SOCKET_URL),
                reconnectDelay: 5000,
                onConnect: () => {
                    console.log('Conectado al WebSocket');
                },
                onStompError: (frame) => {
                    console.error('Error en STOMP:', frame);
                },
            });

            WebSocketService.instance = this;
        }
        return WebSocketService.instance;
    }

    connect(callback) {
        if (!this.client.active) {
            this.client.activate();
            this.client.onConnect = () => {
                console.log('WebSocket activado');
                if (callback) {
                    this.subscribe(callback);
                }
            };
        } else {
            console.log('WebSocket ya está conectado, evitando conexión duplicada.');
        }
    }

    subscribe(callback) {
        if (this.client && this.client.connected) {
            console.log('📡 Suscrito a /topic/llamado');
            this.client.subscribe('/topic/llamado', (message) => {
                const llamado = JSON.parse(message.body);
                console.log('📥 Llamado recibido:', llamado);

                // Guardar en localStorage para sincronizar con otras ventanas
            localStorage.setItem("lastMessage", JSON.stringify(llamado));
                
            if (callback) callback(llamado);
            });
        } else {
            console.warn('⏳ Intentando suscribirse antes de que WebSocket esté conectado.');
        }
    }

    sendMessage(destination, message) {
        if (this.client && this.client.connected) {
            this.client.publish({
                destination: destination,
                body: JSON.stringify(message),
            });
            console.log(`📤 Mensaje enviado a ${destination}:`, message);
        } else {
            console.warn('❌ No se pudo enviar el mensaje, WebSocket no conectado.');
        }
    }

    disconnect() {
        if (this.client && this.client.active) {
            this.client.deactivate();
            console.log('🔴 WebSocket desconectado');
        }
    }
}

const webSocketService = new WebSocketService();
export default webSocketService;
