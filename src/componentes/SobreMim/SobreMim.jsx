import imagemPerfil from '../../assets/Matheus2.jpeg'
import './SobreMim.css'

function SobreMim(){
    return(
        <>
          <section id='sobre-mim'>  
            <div className='sobre-section'>
                <div className='sobre-imagem'>
                  <img src={imagemPerfil} alt=""  />
                </div>
                <div className='sobre-info'>
                  <h2>Sobre mim</h2>
                  <p>esse é o Matheus,uma pessoa boa e legal,ele joga video game,assiste muitos filmes de herois e é muito fã de anime.Esse homem na sua esquerda é o seu pai.</p>
                </div>
                
            </div>
          </section>
        </>
    )
}

export default SobreMim