const express = require('express');
// const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');

const clientId = "712781514852-0ntojjfpll8htjkfkulut9k1squ29fqs.apps.googleusercontent.com";
const client = new OAuth2Client(clientId);

const app = express();
app.use(express.json());

const users = [];

function upsert(array, item){
    const i = array.findIndex((_item)=> _item.email === item.email);
    if(i>-1){
        array[i] = item;
    }else{
        array.push(item);
    }
}

app.post('/api/google-login', async(request,response)=>{
    const { token } = request.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId,
    });

    const { name, email, picture } = ticket.getPayload();
    upsert (users, {name, email, picture});
    response.status(201);
    response.json({name, email, picture});
});

app.listen(3000, ()=>{
    console.log(`Server started running at port 3000`);
});