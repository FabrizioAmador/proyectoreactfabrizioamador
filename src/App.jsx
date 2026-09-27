import './App.css';

import Encabezado from './Encabezado.jsx';
import CuerpoPosteo from './CuerpoPosteo.jsx'
import PiePagina from './PiePagina.jsx';
import Asistentes from './Asistente.jsx';


function App(){
  
  const asistentes =[
  {nombre: 'Juanito Perito', tarea: 'Desarrollador de Frente', emoji: 'XD'},
  {nombre: 'Anita Gomita', tarea: 'Diseñadora de Interfase de Usuario', emoji: 'B)'},
  {nombre: 'Charles Louis', tarea:'Diseñador Trasero', emoji: ':3'}
  ]


  return(
    <>
      <Encabezado/>
      <CuerpoPosteo/>
      <Asistentes {...asistentes} />
      <PiePagina/>
    </>
  )
}

export default App