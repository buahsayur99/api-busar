// socketConfig.js
import { Server } from "socket.io";
import Carts from "../models/CartModel.js";
import Wishlist from "../models/WishlistModel.js";
import Pusher from "pusher";

export const io = new Server({
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    },
    transports: ['websocket'] // Menggunakan websocket saja
});

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

export const handleBroadcastClient = (event, data) => {
    io.emit(event, data);
}

export const handleSendMessage = (event, message) => {
    io.emit(event, message)
}

export const sendCartDataToClient = async (uuidUsers) => {
    const cart = await Carts.findAll({
        where: {
            uuidUser: uuidUsers
        }
    })

    io.emit(`${uuidUsers}-socket-cart`, cart);
}

export const sendWishlistDataToClient = async (uuidUsers) => {
    const wishlists = await Wishlist.findAll({
        where: {
            uuidUser: uuidUsers
        }
    });
    console.log(wishlists)

    io.emit(`${uuidUsers}-socket-wishlists`, wishlists);
}




// const pusher = new Pusher({
//     appId: "1863778",
//     key: "219991e5be6e2d274d39",
//     secret: "711b95e10105e50e8f14",
//     cluster: "ap1", // Contoh: 'ap1'
//     useTLS: true,
// });

// export const sendWishlistDataToClient = async (uuidUsers) => {
//     const wishlists = await Wishlist.findAll({
//         where: {
//             uuidUser: uuidUsers
//         }
//     });
//     console.log({ pusher: wishlists })

//     // Kirim event ke Pusher dan tambahkan logging dengan then/catch
//     pusher.trigger(
//         "my-channel",
//         "my-event",
//         { message: "Test event from Vercel" }
//         // wishlists
//     )
//         .then(() => {
//             console.log('Event sent to Pusher successfully'); // Log sukses
//         })
//         .catch(error => {
//             console.error('Error sending event to Pusher:', error); // Log error
//         });
// }