const html = String.raw;

class Modal extends HTMLElement {
  constructor() {
    super();
    this.list = [];
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.renderList();
    this.handleEvent();
  }

  disconnectedCallback() {}

  renderList() {
    if (this.list && this.list.length > 0) {
      const listHTML = this.list.map(({ name }) => {
        return html`<li>${name}</li>`;
      });
      this.shadowRoot.querySelector("#list").innerHTML = listHTML.join("");
    } else {
      this.shadowRoot.querySelector("#list").innerHTML = "";
    }
    this.renderCount();
  }

  renderCount() {
    const currentCount = Array.from(
      this.shadowRoot.querySelectorAll("#list li"),
    ).length;

    this.shadowRoot.querySelector(
      "#count",
    ).innerText = `(${currentCount}/${this.list.length})`;
  }

  handleEvent() {}

  setList(selectedData) {
    this.list = selectedData;
    this.renderList();
  }
  show() {
    this.modalContainer.show();
  }
  hide() {
    this.modalContainer.hide();
  }

  render() {
    this.shadowRoot.innerHTML = html` 
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
    <style>
      #btn-close {
      }
      #modal-dialog {
        max-width: 90%;
        width: 1270px;
      }
      #modal-dialog .modal-header h5 a {
        display: flex;
      }
      .form-check-input {
        width: 20px;
        height: 20px;
      }
      #all-select-line {
      }
      #list {
      }
    </style>`;

    const modalContent = html`
      <div class="modal" tabindex="-1">
        <div id="modal-dialog" class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">모달</h5>
              <button id="btn-close">닫기</button>
            </div>
            <div id="all-select-line">
              <p>
                <input class="form-check-input" type="checkbox" value="" />
                <label>
                  <span>전체</span>
                  <span id="count">(0/${this.list.length})</span>
                </label>
              </p>
            </div>
            <ul id="list"></ul>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const container = document.createElement("div");
    container.innerHTML = modalContent;
    this.shadowRoot.appendChild(container);

    this.modalContainer = new bootstrap.Modal(
      container.querySelector(".modal"),
    );
  }
}

customElements.define("custom-modal", Modal);
