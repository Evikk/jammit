

const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');

var gIo = null
var gSocketBySessionIdMap = {}

function emit({ type, data }) {
    gIo.emit(type, data);
}


function connectSockets(http, session) {
    gIo = require('socket.io')(http);

    const sharedSession = require('express-socket.io-session');

    gIo.use(sharedSession(session, {
        autoSave: true
    }));
    gIo.on('connection', socket => {
        // console.log('socket.handshake', socket.handshake)
        gSocketBySessionIdMap[socket.handshake.sessionID] = socket
        socket.on('disconnect', socket => {
            console.log('Someone disconnected')
            if (socket.handshake) {
                gSocketBySessionIdMap[socket.handshake.sessionID] = null
            }
        })
        socket.on('jam id', jam => {
            if (socket.currJam) {
                socket.leave(socket.currJam)
            }
            socket.join(jam)
            socket.currJam = jam
        })
        socket.on('chat newMsg', msg => {
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            gIo.to(socket.currJam).emit('chat addMsg', msg)
            // socket.broadcast.to(socket.currJam).emit('chat addMsg', msg)
        }) 
        socket.on('invite', invite =>{
            // if(socket.invite){
            //     socket.leave(socket.jam)
            // }
            // socket.join(invite)
            console.log(invite,'invite');
            gIo.to(socket.currJam).emit('invite sendInvites', invite)
            
        })
        socket.on('user connection', userId => {
            console.log(userId)
            if (socket.currUserId) {
                socket.leave(socket.currUserId)
            }
            socket.join(userId)
            socket.currUserId = userId
        })
        socket.on('invite', invite => {
            // gIo.to(socket.currUserId).emit('send', invite)
            socket.broadcast.to(socket.currUserId).emit('send', invite)
        })
    })
            
}


// Send to all sockets BUT not the current socket 
function broadcast({ type, data }) {
    const store = asyncLocalStorage.getStore()
    const { sessionId } = store
    if (!sessionId) return logger.debug('Shoudnt happen, no sessionId in asyncLocalStorage store')
    const excludedSocket = gSocketBySessionIdMap[sessionId]
    if (!excludedSocket) return logger.debug('Shouldnt happen, No socket in map', gSocketBySessionIdMap)
    excludedSocket.broadcast.emit(type, data)
}

module.exports = {
    connectSockets,
    emit,
    broadcast
}



