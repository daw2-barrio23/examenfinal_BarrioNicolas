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
        </div>
      </nav>
    </header>
    
    `,
    script: ()=>{
      console.log('header cargado');//comprobamos por consola que carga correctamente
      document.querySelector('#panel').addEventListener('click', ()=>{
        console.log('click en panel')//comprobamos por consola que carga correctamente
        document.querySelector('main').innerHTML = panel.template;//seleccionamos la parte que tiene un id panel y le decimos que escuche el click, una vez lo detecta le decimos que inyecte la vista panel
        panel.script()//sacamos tambien el script correspondiente
      });
      document.querySelector('#login').addEventListener('click', ()=>{
        console.log('click en login')//comprobamos por consola que carga correctamente
        document.querySelector('main').innerHTML = login.template;//seleccionamos la parte que tiene un id login y le decimos que escuche el click, una vez lo detecta le decimos que inyecte la vista login
        login.script()//sacamos tambien el script correspondiente
      });
      document.querySelector('#registro').addEventListener('click', ()=>{
        console.log('click en registro')//comprobamos por consola que carga correctamente
        document.querySelector('main').innerHTML = registro.template;//seleccionamos la parte que tiene un id login y le decimos que escuche el click, una vez lo detecta le decimos que inyecte la vista registro
        registro.script()//sacamos tambien el script correspondiente
      });
    }
}