class Menu2 extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `

        <ul class="sidebar__lista container">

            <li class="sidebar__elemento">
                <a class="sidebar__enlace titulo-nav-modulo sidebar__elemento--borde" href="../index.html">Home</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="../general-information.html">General information</a>
            </li>
            
            <li class="sidebar__elemento">
                <a class="sidebar__enlace" href="../topic1/topic-1.html"><b>Week 1.</b> Introductory session</a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="../topic1/topic-1_1.html">1.1 Educational theories</a>
            </li>

            <li class="sidebar__elemento sangria-menu-2">
                <a class="sidebar__enlace" href="#">1.1.1 What is a word?</a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="#">Activity 101</a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace sidebar__elemento--borde" href="#">Activity 102</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="#"><b>Week 2.</b> Daily activities</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="#"><b>Week 3.</b> Personal information and relationships</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="#"><b>Week 4.</b> New year</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="#"><b>Week 5.</b> Clothing styles and consumption habits</a>
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="#"><b>Week 6.</b> General and personal health</a>
            </li>

        </ul>

        `;

    }
}

customElements.define('menu-component-2', Menu2);