import socketIOClient from "socket.io-client";

export const socket = socketIOClient(process.env.NEXT_PUBLIC_API_URL);

export const emitNotification = (userId, user) => {
  if (userId === user.id) return;
  socket.emit("notification received", userId);
};
