import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
// import BotaoMudar from './componentes/BotaoMudar/BotaoMudar'
import Habilidades from './componentes/Habilidades/Habilidades'
import MeusProjetos from './componentes/MeusProjetos/MeusProjetos'
import Navbar from './componentes/Navbar/Navbar'
import RodaPe from './componentes/RodaPe/RodaPe'
import SobreMim from './componentes/SobreMim/SobreMim'


function App() {
  return (
    <>
      <Navbar />
      <Apresentacao />
      <SobreMim />  
      <Habilidades />
      <MeusProjetos />
      <RodaPe />
      {/* <BotaoMudar /> */}
    </>
  )
}

export default App
