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
                        
                        <p class="parrafo">
                            Un lector inmersivo es una herramienta de <i lang='en'>software</i>&nbsp; que proporciona acceso a texto digital al estudiante en situación de discapacidad visual. Esta Experiencia Educativa cuenta con los ajustes e información necesaria para ser accesible a lectores inmersivos, permitiendo navegar y acceder a contenido web de manera autónoma.
                        </p>

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