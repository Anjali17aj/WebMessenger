if(process.env.NODE_ENV != "production"){     
    require('dotenv').config();    
}

const mongoose = require('mongoose');

const Chat = require("./models/chat.js");
const DBURL=process.env.URL;

main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  //await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  await mongoose.connect(DBURL);
}

let allChats = [
    {
        from: "Anjali",
        to: "Ashwini",
        msg: "Any plans for today? What's the project about? What do you think about The IT Revolution Project? I feel it's interesting, and there's so much to cover! CheckOut and Thank me later.",
        created_at: new Date(),
        },
        {
            from: "Ajay",
            to: "Anita",
            msg: "Hey, I was thinking it's been a while since we had a family event.What do you say we plan something?",
            created_at: new Date(),
            },
            {
                from: "Julie",
                to: "Pratik",
                msg: "Hey, how's the exam prep treating you? Hey, how's the studying going?",
                created_at: new Date(),
                },
                {
                    from: "Sujal",
                    to: "Prachi",
                    msg: "See you tomorrow for lunch.",
                    created_at: new Date(),
                    },
]
Chat.insertMany(allChats);

