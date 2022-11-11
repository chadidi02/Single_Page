import AbstractView from "../AbstractView";
import "./Home.css"

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }
    async getHtml() {
        let name = "Souhaib";
        let dev = ["Javascript", "nodeJs", "Vue"]
        return `
            <h1 class="h1">Hi, I'm ${name}. on a daily basis I work with ${dev[0]}</h1>
        `;
    }
}