const template = (checked=false) => {
    return `
<div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Attenzione</h5>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
            <p>È online una nuova versione della risorsa.</p>
            <p>Queste pagine saranno dismesse prossimamente.</p>
        </div>
        <div class="modal-footer">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="do-not-show-again" ${checked ? 'checked' : ''}>
                <label class="form-check-label" for="do-not-show-again">non mostrare di nuovo</label>
            </div>
            <div class="ms-auto">
                <button type="button" class="btn btn-secondary btn-sm" id="ok-buttton">Ok</button>
                <button type="button" class="btn btn-primary btn-sm" id="go-buttton">Scopri il nuovo sito</button>
            </div>
        </div>
        </div>
    </div>
</div>
`
}

export default class ModalManager {
    #modalElement
    #checkboxElement
    #okButtonElement
    #goButtonElement
    #modal
    #redirectURL
    
    constructor(redirectURL) {
        this.#redirectURL = redirectURL
        this.init()

    }

    init() {
        const modalContainer = document.createElement('div')
        modalContainer.innerHTML = template(this.doNotShowChecked).trim()
        this.#modalElement = modalContainer.firstChild
        document.body.appendChild(this.#modalElement)
        this.#checkboxElement = this.#modalElement.querySelector('#do-not-show-again')
        this.#okButtonElement = this.#modalElement.querySelector('#ok-buttton')
        this.#goButtonElement = this.#modalElement.querySelector('#go-buttton')
        this.#modal = new bootstrap.Modal(this.#modalElement, {
            backdrop: 'static',
        })
        this.#okButtonElement.addEventListener('click', this.onOkClicked.bind(this))
        this.#goButtonElement.addEventListener('click', this.onGoClicked.bind(this))
    }

    show() {
        this.#modal.show()
    }

    get doNotShowChecked() {
        return !this.constructor.shouldShow()
    }

    updateSettings() {
        if (this.#checkboxElement.checked) {
            localStorage.setItem('do-not-show-again', true);
        }
    }

    onOkClicked() {
        this.updateSettings()
        this.#modal.hide()
    }

    onGoClicked() {
        this.updateSettings()
        location.href = this.#redirectURL
    }

    static shouldShow() {
        return localStorage.getItem('do-not-show-again') !== 'true';
    }
}