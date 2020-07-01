# API-Node.js-para-notificações
Construída no intuito de aperfeiçoar o conhecimento em Node.js, essa é uma API básica para enviar mensagens via SMS e Whatsapp usando a plataforma de comunicação em nuvem Twilio.

# Instalando o projeto
Para testar o projeto é preciso ter o Node.js instalado na sua máquina, de preferência a versão mais recente possível. Além disso, deve criar uma conta na plataforma Twilio. 
Você pode criar uma conta gratuita no link a seguir: https://www.twilio.com/try-twilio.

Veja também como [comprar um número](https://www.youtube.com/watch?v=f9jE5ywz8cs&t=3s) e [criar uma SandBox](https://www.youtube.com/watch?v=O2PB6o2E8aA) no Twilio. Isso será necessário para efetuar as requisições de envio de SMS e mensagem via WhatsApp.

## Passo 1: Clonando o repositório
Clone o repositório clicando no botão **Clonar** na própria plataforma GitHug ou, se preferir, use o seguinte comando git:<br />
$ git clone https:<span></span>//github.com/cacajr/API-Node.js-para-notificacoes.git

## Passo 2: Instalando dependências
Na pasta raíz do projeto execute o seguinte comando no terminal para instalar as dependências necessárias:<br />
npm install

## Passo 3: Credenciais Twilio
Crie um arquivo **.env** na pasta raiz do projeto e insira as seguintes variáveis:

TWILIO_ACCOUNT_SID = accountSid<br />
TWILIO_AUTH_TOKEN = authToken<br />
TWILIO_NUMBER = twilioNumber<br />

Nos campos **accountSid**, **authToken** e **twilioNumber** insira as respectivas informações da sua conta Twilio.

## Passo 4: Subindo o servidor
Para efetuar as requisições e testar o projeto, você precisa subir o servidor antes. Execute o seguinte comando na pasta raiz:<br />
npm start

Pronto! Agora é só testar efetuando as requisições.

# Testando o projeto
Feito **todos** os passos de instalação do projeto, para testar os dois serviços, envio de SMS e envio de mensagens Whatsapp, basta mandar requisições http.<br />

## SMS
http://localhost:3333/sms<br />
O corpo da requisição é em formato JSON e segue o seguinte padrão:<br />
{<br />
&nbsp;&nbsp;&nbsp;&nbsp;"number": "+5585966666666",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"message": "Hello World"<br />
}<br />
Onde **number** é o número do celular/telefone em formato [E.164](https://www.twilio.com/docs/glossary/what-e164) e **message** é a mensagem que se quer enviar via SMS.

## WhatsApp
http://localhost:3333/whatsapp<br />
O corpo da requisição é em formato JSON e segue o seguinte padrão:<br />
{<br />
&nbsp;&nbsp;&nbsp;&nbsp;"number": "+5585966666666",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"message": "Hello World"<br />
}<br />
Onde **number** é o número do celular em formato [E.164](https://www.twilio.com/docs/glossary/what-e164) e **message** é a mensagem que se quer enviar via WhatsApp.
