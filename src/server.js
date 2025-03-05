const io = require('socket.io')(3001, {
    cors: {
        origin: "*"
    }
});

let globalState = {
    seconds: 0,
    isBlinking: false,
    blinkColor: '',
    intervalId: null
};

io.on('connection', (socket) => {
    console.log('Nueva conexión:', socket.id);
    
    // Enviar el estado actual a la nueva conexión
    socket.emit('updateState', globalState);

    socket.on('toggleBlink', (data) => {
        globalState = { ...globalState, ...data };
        io.emit('updateState', globalState); // Enviar actualización a todas las ventanas
    });
});

console.log('Servidor WebSocket corriendo en puerto 3001');
