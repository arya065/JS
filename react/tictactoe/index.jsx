const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <h1>Hello React</h1>,  // элемент html, который мы хотим создать
);
//элементы нельзя изменить, их можно только обновить