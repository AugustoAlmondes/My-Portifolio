import './style.css'
import ImagemSobre from '../../assets/eu.jpg'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import scrollToElement from '../../utils/Scroll';

export default function Sobre() {
    return (
        <>
            <div className="sobre-area" id='sobre'>
                <div className="texto-sobre">
                    <h1>Sobre mim</h1>
                    <p>
                        Meu nome é Augusto Almondes Teixeira, um entusiasta da tecnologia com foco no desenvolvimento front-end. Sou apaixonado por construir interfaces de usuário intuitivas e performáticas, utilizando as mais recentes tecnologias do mercado. Minha experiência principal é com React e Node.js. Domino HTML5, CSS3, JavaScript moderno (ES6+) e estou começando a explorar o TypeScript. Tenho experiência com a integração de APIs RESTful/GraphQL, controle de versão com Git/GitHub, e estou constantemente explorando ferramentas e bibliotecas de animação para enriquecer a experiência do usuário.
                    </p>

                    <div className="botoes-sobre">
                        <button
                            onClick={() => scrollToElement('especialidades')}
                        >Especialidades <MdOutlineKeyboardDoubleArrowDown style={{ fontSize: '15px' }} /></button>
                        <button
                            onClick={() => scrollToElement('deploys')}
                        >Projetos < MdOutlineKeyboardDoubleArrowDown style={{ fontSize: '15px' }} /></button>
                    </div>
                </div>
                <div className="imagem-sobre">
                    <img src={ImagemSobre} />
                </div>
            </div>
        </>
    );
}