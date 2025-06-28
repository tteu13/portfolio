import Habilidade from '../Habilidade/Habilidade'
import './Habilidades.css'

function Habilidades(){
    return(
        <>
          <section id='habilidades'>

            <h2>Minhas habilidades</h2>
            <div className="habilidades-conjuntos">
                <Habilidade nome="HTML"/>
                <Habilidade nome="CSS"/>
                <Habilidade nome="Python"/>
                <Habilidade nome="Javascript"/>
                <Habilidade nome="MagicalVoxel"/>
            </div>

          </section>
        </>
    )
}

export default Habilidades