// элемент для рендеринга приложения React
const rootNode = document.getElementById("app");
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <h1>Hello React</h1>  // элемент, который мы хотим создать
);