class lectorInmersivo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="modal fade ocultar " id="information-1" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close btn-cerrar-modal" data-dismiss="modal" aria-label="Cerrar"
                        aria-hidden="true" accesskey="x">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                        <div class="container">

                        <div class="text-center mb-3">

                            <p class="parrafo mt-4">
                                <strong>Información de ayuda</strong>
                            </p>

                        </div>

                        <p class="parrafo">
                            Para navegar dentro de la Experiencia Educativa utiliza los siguientes atajos:
                        </p>
                        
                        <p aria-hidden="true" class="parrafo mb-0" lang="en"><b><i>Windows</i></b></p>

                        <ul class="parrafo ml-4">
                            <li>Abrir la ventana con la información de ayuda: Alt + I </li>
                            <li><i lang="en" >Activity </i> OPA01: Alt + 1</li>                            
                        </ul>
                        <p aria-hidden="true" class="parrafo mb-0" lang="en"><b><i>MacOS</i></b></p>
                            <ul class="parrafo ml-4">
                            <li>Abrir la ventana con la información de ayuda: <i lang="en">Control</i> + <i lang="en">Option</i> + I </li>
                            <li><i lang="en" >Activity </i> OPA01: <i lang="en">Control </i> + <i lang="en">Option</i> + 1</li>                            
                        </ul>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-cerrar-modal waves-effect waves-light"
                        style="border-radius: 7px;" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
        
        `;

    }
}

customElements.define('modal-lectorinmersivo', lectorInmersivo);