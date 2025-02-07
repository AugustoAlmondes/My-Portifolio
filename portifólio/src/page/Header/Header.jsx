import './Header.css'
import scrollToElement from '../../utils/Scroll';

export default function Header() {
    return (
        <>
            <div className="header">
                <h2>AUGUSTO ALMONDES</h2>
                <nav>
                    <h3>Home</h3>
                    <h3
                        onClick={() => scrollToElement('sobre')}
                    >Sobre</h3>
                    <h3
                        onClick={() => scrollToElement('especialidades')}
                    >Especialidades</h3>
                    <h3
                        onClick={() => scrollToElement('projetos')}
                    >Projetos</h3>
                    <h3
                        onClick={() => scrollToElement('contatos')}
                    >Contatos</h3>
                </nav>
            </div>
        </>
    );
}