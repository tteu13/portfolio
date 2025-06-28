 import './Habilidade.css'

function Habilidade(props){
    return(
        <>
           <div className='habilidade-container'>
                <p>{props.nome}</p>
           </div>
        </>
    )
}

export default Habilidade