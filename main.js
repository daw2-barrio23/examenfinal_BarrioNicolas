import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { login } from './src/vistas/login'
import { registro } from './src/vistas/registro'
import { header } from './src/componentes/header'
import { home } from './src/vistas/home'
import { panel } from './src/vistas/panel'

document.querySelector('header').innerHTML = header.template
header.script()
//document.querySelector('main').innerHTML = panel.template
//panel.script()
