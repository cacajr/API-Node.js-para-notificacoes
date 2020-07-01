require('dotenv/config');

const express = require('express');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json());

// Serviço de envio de SMS via Twilio
app.get('/sms', (req, res) => {
    const number = req.body.number
    const message = req.body.message

    client.messages
    .create({
        body: message,
        from: twilioNumber,
        to: number
    })
    .then(message => console.log(message.sid));

    res.json({ status: 'Your message was sent!' });
})

app.listen(3333);