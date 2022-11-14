require('dotenv').config()
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

//1 параметром указываем какой порт должен прослушивать наш сервер
//2 параметром передаем калбэк в котором сообщаем порт с которого стартанули
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
