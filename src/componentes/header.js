import { login } from "../vistas/login";
import { panel } from "../vistas/panel";
import { registro } from "../vistas/registro";

export const header = {
    template: `
    <header>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
          <div>
            <button class="btn btn-secondary ms-2" id="panel">PANEL</button>
            <button class="btn btn-secondary ms-2" id="login">LOGIN</button>
            <button class="btn btn-secondary ms-2" id="registro">REGISTRO</button>
          </div>
          <div>
            <span>administrador@fpllefia.com</span>
            
          </div>
        </div>
      </nav>
    </header>
    
    `,
    script: ()=>{
      console.log('header cargado');
      document.querySelector('#panel').addEventListener('click', ()=>{
        console.log('click enpanel')
        document.querySelector('main').innerHTML = panel.template;
        panel.script()
      });
      document.querySelector('#login').addEventListener('click', ()=>{
        console.log('click en login')
        document.querySelector('main').innerHTML = login.template;
        login.script()
      });
      document.querySelector('#registro').addEventListener('click', ()=>{
        console.log('click en registro')
        document.querySelector('main').innerHTML = registro.template;
        registro.script()
      });
    }
}