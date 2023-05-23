import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { login } from './src/vistas/login'
import { registro } from './src/vistas/registro'
import { header } from './src/componentes/header.js'
import { home } from './src/vistas/home'
import { panel } from './src/vistas/panel'

document.querySelector('header').innerHTML = header.template//inyectamos en la seccion header de la pagina principal el componente header
header.script()//llamamos a su script

