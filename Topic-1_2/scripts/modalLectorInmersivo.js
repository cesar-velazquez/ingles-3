class lectorInmersivo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
    <div class="modal fade" id="information-1" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;"
        lang="es">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close btn-cerrar-modal" data-dismiss="modal" aria-label="Close"
                        accesskey="X">
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
                            <li><i lang="en" >Activity </i> OPA06: Alt + 1</li>                            
                            <li><i lang="en" >Activity </i> OPA07: Alt + 2</li>                            
                        </ul>
                        <p aria-hidden="true" class="parrafo mb-0" lang="en"><b><i>MacOS</i></b></p>
                        
                        <ul class="parrafo ml-4">
                            <li>Abrir la ventana con la información de ayuda: <i lang="en">Control</i> + <i lang="en">Option</i> + I </li>
                            <li><i lang="en" >Activity </i> OPA06: <i lang="en">Control </i> + <i lang="en">Option</i> + 1</li>                            
                            <li><i lang="en" >Activity </i> OPA07: <i lang="en">Control </i> + <i lang="en">Option</i> + 2</li>                                                        
                        </ul>

                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-cerrar-modal waves-effect waves-light"
                        style="border-radius: 7px;" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
        `;

    }
}

customElements.define('modal-lectorinmersivo', lectorInmersivo);