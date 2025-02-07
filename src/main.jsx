import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import IC from './page/IC/IC'
import BemVindo from './page/BemVindo/BemVindo'
import Projetos from './page/Projetos/Projetos'
import Sobre from './page/Sobre/Sobre'
import Especialidades from './page/Especialidades/Especialidades'
import Contato from './page/Contato/Contato'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BemVindo />
    <Sobre />
    <Especialidades />
    <Projetos />
    <IC />
    <Contato/>

  </StrictMode>,
)
