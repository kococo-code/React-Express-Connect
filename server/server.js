const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
};

app.use(cors(corsOptions));
app.get('/data',(req,res)=>{
    const data = {
        lastname : "JinTaek",
        firstname : "Lim"
    };
    res.json(data);
})
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})