const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(()=>{console.log("connection succesfull")}).catch(err=>console.log(err));

let allChats =  [{
    from:"aditya",
    to:"bajrangbali",
    msg:"Bajrangbali dhyaan rakhiyega!",
    created_at: new Date()
    },
    {
    from:"aditya",
    to:"ankur",
    msg:"kaisa h beta!",
    created_at: new Date() 
    },
    {
    from:"pradyumna",
    to:"himanshu",
    msg:"kaise ho saawre balam",
    created_at: new Date()
    },
    {
    from:"ankur",
    to:"pradyumna",
    msg:"kaise ho chote bhai",
    created_at: new Date()
    },
    {
    from:"aditya",
    to:"nitin",
    msg:"jai baba ki!",
    created_at: new Date()
    }
];

Chat.insertMany(allChats);