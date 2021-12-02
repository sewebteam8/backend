import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})


let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
}

const Socketconnection = async () => {
    try {
        io.on('connection', (socket) => {
            console.log('user connected')

            //connect
            socket.on("addUser", userId => {
                addUser(userId, socket.id);
                io.emit("getUsers", users);
                console.log(userId);
               
            })
            console.log(users);
            //send message
            socket.on("sendMessage", (senderId, receiverId, text) => {
                const receiver = getUser(receiverId);
                if (receiver) {
                    io.to(receiver.socketId).emit("getMessage", senderId, text);
                }
            })
            
            socket.on("disconnect", () => {
                removeUser(socket.id);
                console.log('user disconnected')
            })
            
        
        })
        
    }
    catch (error) {
        console.error(error);
    }
}
export default Socketconnection;