const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/header.jsx");
const Article = require("./components/article.jsx");

const header = "Рассказ";
const article = "После одного из заседаний N-ского мирового съезда судьи собрались в совещательной комнате, чтобы снять свои мундиры, минутку отдохнуть и ехать домой обедать.";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { label: "press here!"};
        this.press = this.press.bind(this);
    }
    press() {
        if (this.state.label == "he touched me!") {
            this.setState({ label: "press here!" });
        } else {
            this.setState({ label: "he touched me!" });
        }
    }
    render() {
        return (
            // <h1>
            //     {this.state.welcome}
            //     {this.setState({ welcome: "hello there!" })}
            // </h1>
            <button onClick={this.press}>
                {this.state.label}
            </button>
        );
    }

}
class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { class: "off", label: "Нажми" };

        this.press = this.press.bind(this);
    }
    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({ class: className });
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}
ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        // <div>
        //     <Header text={header} />
        //     <Article content={article} />
        // </div>
        <Hello />
    );