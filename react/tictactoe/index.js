const rootNode = document.getElementById("app"); // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render( /*#__PURE__*/React.createElement("h1", null, "Hello React") // элемент html, который мы хотим создать
);
//элементы нельзя изменить, их можно только обновить
