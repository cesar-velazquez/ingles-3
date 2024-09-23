class lectorInmersivo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
  <div class="modal fade" id="information-1" tabindex="-1" style="display: none;"
        lang="es">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <button  type="button" class="close btn-cerrar-modal" data-dismiss="modal" aria-label="Close"
                        accesskey="X">
                        <span >×</span>
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

                        <p class="parrafo mb-0" ><b><i lang="en">Windows</i></b></p>

                        <ul class="parrafo ml-4">
                            <li><i lang="en">Activity</i> OPA 52. Alt + 1</li>
                            <li><i lang="en">Activity</i> OPA 53. Alt + 2</li>
                            <li><i lang="en">Activity</i> OPA 54. Alt + 3</li>
                            <li><i lang="en">Activity</i> OPA 55. Alt + 4</li>
                            <li><i lang="en">Activity</i> OPA 56. Alt + 5</li>                            
                        </ul>

                        <p class="parrafo mb-0" ><b><i lang="en">MacOS</i></b></p>

                        <ul class="parrafo ml-4">
                            <li><i lang="en">Activity</i> OPA 52. <i lang="en">Control</i> + <i lang="en">Option</i> + 1</li>
                            <li><i lang="en">Activity</i> OPA 53. <i lang="en">Control</i> + <i lang="en">Option</i> + 2</li>
                            <li><i lang="en">Activity</i> OPA 54. <i lang="en">Control</i> + <i lang="en">Option</i> + 3</li>
                            <li><i lang="en">Activity</i> OPA 55. <i lang="en">Control</i> + <i lang="en">Option</i> + 4</li>
                            <li><i lang="en">Activity</i> OPA 56. <i lang="en">Control</i> + <i lang="en">Option</i> + 5</li>                            
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