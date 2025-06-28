import './Navbar.css'
import { useState } from 'react'

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false)

    const toggleMenu = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <nav className="navbar-content">
            <h2>Matheus Falcão</h2>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar ${menuAberto ? 'rotate-top' : ''}`}></div>
                <div className={`bar ${menuAberto ? 'hide' : ''}`}></div>
                <div className={`bar ${menuAberto ? 'rotate-bottom' : ''}`}></div>
            </div>

            <ul className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
                <li><a href="#apresentacao-container">Início</a></li>
                <li><a href="#sobre-mim">Sobre mim</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#cards-projetos">Projetos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
