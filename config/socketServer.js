/*
Client-Side Integration: On the client-side, when displaying a post, check if the chatButton is true.
If it is, display a chat button or UI element to allow users to initiate a chat with the post owner.
*/

/*
Socket Event Handling: Modify your socketServer.js to handle the chat initiation event when a user clicks on the chat button.
Upon clicking the chat button, emit a createChat event to the server with the sender's ID (current user) and the receiver's ID (post owner's ID).
*/
/*
Client-Side Implementation: On the client-side, implement the logic to handle the chat initiation event.
Upon receiving a successful response from the server after initiating the chat, redirect the user to the chat room or display the chat interface.
*/

const { Server } = require("socket.io");
const Message = require("../models/messageModel"); // Import your Message model
const ChatRoom = require("../models/conversationModel"); // Import your ChatRoom model if used

const socketServer = (server) => {
  const io = new Server(server);

  // Handle new connections
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Send a welcome message to the connected client
    socket.emit("message", "Welcome to the chat!");

    // Join a room based on user ID or any other identifier
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined room`);
    });

    // Create a new chat room
    socket.on("createChat", async ({ senderId, receiverId }) => {
      try {
        const roomId = `${senderId}-${receiverId}`; // Unique room ID based on sender and receiver IDs

        // Join sender and receiver to the chat room
        socket.join(roomId);
        io.to(receiverId).emit("joinRoom", roomId); // Notify receiver to join the room
        console.log(`New chat room created: ${roomId}`);

        // Save chat room details to the database if using ChatRoom model
        if (ChatRoom) {
          const newChatRoom = new ChatRoom({
            roomId,
            participants: [senderId, receiverId],
          });
          await newChatRoom.save();
        }

        // Send acknowledgment to the client
        socket.emit("chatCreated", roomId);
      } catch (error) {
        console.error("Error creating chat room:", error);
        // Emit error message to the client
        socket.emit("chatError", "Failed to create chat room");
      }
    });

    // Handle chat messages
    socket.on("chatMessage", async ({ roomId, senderId, message }) => {
      try {
        // Save the message to the database
        const newMessage = new Message({
          sender: senderId,
          recipient: roomId.split("-").find((id) => id !== senderId), // Extract recipient ID from room ID
          content: message,
        });
        await newMessage.save();

        // Emit the message to all participants in the chat room
        io.to(roomId).emit("chatMessage", { senderId, message });
      } catch (error) {
        console.error("Error saving chat message:", error);
        // Emit error message to the client
        socket.emit("chatError", "Failed to send message");
      }
    });

    // Handle disconnect event
    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = socketServer;
