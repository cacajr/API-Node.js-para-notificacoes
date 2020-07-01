require('dotenv/config');

const express = require('express');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json());

// Serviço de envio de SMS via Twilio
app.post('/sms', (req, res) => {
    const { number, message } = req.body;

    client.messages
    .create({
        body: message,
        from: twilioNumber,
        to: number
    })
    .then(message => console.log(message.sid));

    res.json({ status: 'Your message was sent!' });
})

// Serviço de envio de mensagens WhatsApp via Twilio
app.post('/whatsapp', (req, res) => {
    const { number, message, mediaUrl } = req.body;

    client.messages
    .create({
        mediaUrl: [mediaUrl],
        from: 'whatsapp:+14155238886',
        body: message,
        to: 'whatsapp:' + number
    })
    .then(message => console.log(message.sid));

    res.json({ status: 'Your message was sent!' });
})

app.listen(3333);