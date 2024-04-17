const html = String.raw;

class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const color = this.getAttribute("color") || "#d1d6db";
        const style = this.getAttribute("style") || "outline";
        this.shadowRoot.innerHTML = html`
            <style>
                button {
                    display: flex;
                    padding: 5px 10px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    border-radius: 4px;
                    border: 1px solid ${color};
                    background: ${style == "outline" ? "#fff" : color};
                    color: ${style == "outline" ? color : "#fff"};
                    height: 20px;
                    box-sizing: content-box;
                }
            </style>
            <button>
                <slot></slot>
            </button>
        `;
    }
}

customElements.define("custom-button", Button);
