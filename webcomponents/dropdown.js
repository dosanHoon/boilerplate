const html = String.raw;

class BootstrapDropdown5 extends HTMLElement {
  constructor() {
    super();
    this.dropdown = null;
    this.options = [];
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.handleEvent();
  }

  setOptions(options) {
    this.options = options;
    this.shadowRoot.querySelector(".dropdown-menu").innerHTML = "";

    const list = this.options.map((option) => {
      return html`
        <li class="dropdown-item select-language" value=${option.value}>
          ${option.name}
        </li>
      `;
    });

    this.shadowRoot.querySelector(".dropdown-menu").innerHTML = list.join("");
  }

  dropDownCallback() {}

  handleEvent() {
    this.shadowRoot
      .querySelector(".dropdown-toggle")
      .addEventListener("click", (e) => {
        this.dropdown.toggle();
      });

    this.shadowRoot
      .querySelector(".dropdown-menu")
      .addEventListener("click", (e) => {
        const target = e.target;
        let value = null;
        if (target.classList.contains("dropdown-item")) {
          value = target.getAttribute("value");
        } else if (target.parentNode.classList.contains("dropdown-item")) {
          value = target.parentNode.getAttribute("value");
        }
        this.value = value;
        this.dropDownCallback(value);
      });
  }

  get id() {
    return this.getAttribute("id");
  }

  render() {
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
      <style>
        .dropdown-menu li {
        }
        .dropdown-menu {
        }
      </style>
      <div class="dropdown">
        <a
          id=${this.id}
          class="dropdown-toggle"
          role="button"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <slot></slot>
        </a>
        <ul class="dropdown-menu slide-in" aria-labelledby=${this.id}></ul>
      </div>
    `;

    this.dropdown = new bootstrap.Dropdown(
      this.shadowRoot.querySelector(".dropdown-toggle"),
      {},
    );
  }
}

customElements.define("bootstrap-dropdown", BootstrapDropdown5);
