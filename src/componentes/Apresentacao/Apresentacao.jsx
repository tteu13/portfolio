import imagemPerfil from '../../assets/Matheus.jpeg'
import './Apresentacao.css'

function Apresentacao(){
    return(
        <>
          <section className='apresentacao-container' id="apresentacao-container">
        
            <div className="apresentacao-conteudo">
               <h1>Matheus Falcão</h1>
               <h2>Pessoal Legal</h2>
            </div>

            <div>
             <img src={imagemPerfil} alt="" className='imagem-de-perfil' />
            </div>
          </section>
        </>
    )
}

export default Apresentacao