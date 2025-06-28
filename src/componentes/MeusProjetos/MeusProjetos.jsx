import MeuProjeto from "../MeuProjeto/MeuProjeto"
import './MeusProjetos.css'

function MeusProjetos(){
    return(
        <>
          <section id="cards-projetos">
              <h2>Meus Projetos</h2>
              <div>
              
                  <MeuProjeto titulo="Calculadora" descricao="Descrição da calculadora" site="https://github.com/tteu13/calculadora-python"/>
                  <MeuProjeto titulo="Jogo da cobrinha"descricao="Descrição do jogo da cobrinha" site="https://github.com/tteu13/jogo-da-cobrinha"/>
                  <MeuProjeto titulo="Portfolio" descricao="Descrição do portfolio"/>
                  {/* <MeuProjeto titulo="Restaurante" descricao="Descrição do restaurante"/> */}
              </div>
          </section>

        </>
    )
}
export default MeusProjetos