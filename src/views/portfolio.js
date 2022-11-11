import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Portfolio");
    }

    async getHtml() {
        return `
            <h1>Portfolio</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}