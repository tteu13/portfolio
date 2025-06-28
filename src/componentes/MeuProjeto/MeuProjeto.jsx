import './MeuProjeto.css'

function MeuProjeto(props){
    return (
        <>
           <div className="card-projeto">
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
                <a href={props.site} target="_blank">Acessar projeto</a>
            </div>  
        </>
    )
}

export default MeuProjeto