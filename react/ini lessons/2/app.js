//  подключаем для модуля - http и fs, которые необходимы соответственно для обработки http-запросов и для работы с файлами
const http = require("http");
const fs = require("fs");
// Далее создаем собственно веб-сервер с помощью функции
// В качестве параметра она принимает функцию, которая будет запускаться для обработки каждого приходящего на сервер запроса. 
// И эта функция имеет два параметра: request - объект, который хранит все данные запроса, и response - объект, 
// который позволяет определить нам ответ на запрос.
http.createServer(function (request, response) {

    let filePath = "index.html";
    if (request.url !== "/") {
        // получаем путь после слеша
        filePath = request.url.substring(1);
    }
    fs.readFile(filePath, function (error, data) {

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            response.end(data);
        }
    });

}).listen(3000, function () {
    console.log("Server started at 3000");
});