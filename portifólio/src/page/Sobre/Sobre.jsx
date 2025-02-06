import './style.css'
import ImagemSobre from '../../assets/augusto2.png'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

export default function Sobre() {
    return (
        <>
            <div className="sobre-area">
                <div className="texto-sobre">
                    <h1>Sobre mim</h1>
                    <p>
                        Meu nome é Augusto Almondes Teixeira e sou um entusiasta da tecnologia, sempre buscando aprimorar meus conhecimentos em desenvolvimento de software e inteligência artificial. Minha jornada acadêmica e profissional tem sido voltada para a resolução de problemas computacionais, com foco em aprendizado de máquina, visão computacional e desenvolvimento web.
<br />
<br />
                        Atualmente, estou trabalhando em um projeto de classificação e contagem de bacilos utilizando redes neurais e desenvolvendo aplicações web utilizando React e Node.js. Também tenho experiência com bancos de dados SQL e NoSQL, além de conhecimento em estruturas de dados e algoritmos.
                    </p>

                    <div className="botoes-sobre">
                        <button>Especialidades <MdOutlineKeyboardDoubleArrowDown style={{ fontSize:'15px' }} /></button>
                        <button>Projetos < MdOutlineKeyboardDoubleArrowDown style={{ fontSize:'15px' }}/></button>
                    </div>
                </div>
                <div className="imagem-sobre">
                    <img src={ImagemSobre} />
                </div>
            </div>
        </>
    );
}