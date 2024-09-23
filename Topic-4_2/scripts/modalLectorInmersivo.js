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
                            <li><i lang="en">Activity</i> OPA 46. Alt + 1</li>
                            <li><i lang="en">Activity</i> OPA 47. Alt + 2</li>
                            <li><i lang="en">Activity</i> OPA 48. Alt + 3</li>
                            <li><i lang="en">Activity</i> OPA 49. Alt + 4</li>
                            <li><i lang="en">Activity</i> OPA 50. Alt + 5</li>
                            <li><i lang="en">Activity</i> OPA 51. Alt + 6</li>
                        </ul>

                        <p class="parrafo mb-0" ><b><i lang="en">MacOS</i></b></p>

                        <ul class="parrafo ml-4">
                            <li><i lang="en">Activity</i> OPA 46. <i lang="en">Control</i> + <i lang="en">Option</i> + 1</li>
                            <li><i lang="en">Activity</i> OPA 47. <i lang="en">Control</i> + <i lang="en">Option</i> + 2</li>
                            <li><i lang="en">Activity</i> OPA 48. <i lang="en">Control</i> + <i lang="en">Option</i> + 3</li>
                            <li><i lang="en">Activity</i> OPA 49. <i lang="en">Control</i> + <i lang="en">Option</i> + 4</li>
                            <li><i lang="en">Activity</i> OPA 50. <i lang="en">Control</i> + <i lang="en">Option</i> + 5</li>
                            <li><i lang="en">Activity</i> OPA 51. <i lang="en">Control</i> + <i lang="en">Option</i> + 6</li>
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