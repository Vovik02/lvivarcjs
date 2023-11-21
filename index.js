const express = require("express");
const app = express();
const views = require('./views');
const path = require("path");

app.set("view engine", "ejs");

app.get("/", views.main);
app.get("/obj/:id/", views.arcObject);
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('/list/:id/', views.listObjects)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'templates', '404.html'));
});

app.listen(3000, () => {
    console.log("Сервер починає прослуховувати підключення на порт 3000...")
});

