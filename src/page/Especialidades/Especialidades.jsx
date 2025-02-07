import './style.css'
import { useState } from 'react';
import Background from '../../components/Background/Background'
import scrollToElement from '../../utils/Scroll';
import { MdOutlineArrowOutward, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

export default function Especialidades() {

    const [detalhes, setDetalhes] = useState([
        `
        Tenho experiência na implementação de redes neurais para classificação e contagem de objetos. Minha iniciação na área de visão computacional inclui o uso de modelos avançados como Detectron2, Faster R-CNN e YOLOv5 para detecção. Além disso, trabalho com manipulação de datasets no formato COCO, pré-processamento de imagens e extração de métricas de desempenho, como Recall, Precisão, F1-Score e Acurácia, para avaliar a eficácia dos modelos.
        `,

        `
        Tenho experiência no desenvolvimento front-end, criando interfaces dinâmicas e responsivas com foco na usabilidade e na experiência do usuário. Utilizo React.js para desenvolver aplicações interativas, implementando React Router para o gerenciamento de rotas e criando componentes reutilizáveis para otimizar o desenvolvimento. Além disso, integro APIs para consumo de dados, aplico estilização moderna com CSS e frameworks especializados e utilizo técnicas de feedback interativo, como toast notifications. Busco sempre adotar boas práticas de desenvolvimento, garantindo código modular, eficiente e de fácil manutenção.
        `,

        `
        Tenho experiência no desenvolvimento de APIs REST com Node.js e Express, conectando e gerenciando bancos de dados MySQL, PostgreSQL e MongoDB. Trabalho na manipulação eficiente de dados, implementando operações CRUD completas e garantindo a integração adequada entre o back-end e o front-end.
        `,

        `
        Além do desenvolvimento, também atuo na área de design gráfico, utilizando Adobe Photoshop para edição e manutenção de imagens. Trabalho com design de interface e criação de layouts no Figma, além de desenvolver estampas e aprimorar elementos visuais para diferentes aplicações e produtos.
        `,

        'Coloque o mouse sobre uma especialidade',
    ]);

    const [detalheNumber, setDetalheNumber] = useState(4);
    const [detalheAtual, setDetalheAtual] = useState(detalhes[4]);

    function handleDetalhes(index) {
        setDetalheAtual([detalhes[index]]);
        setDetalheNumber(index);
    }

    return (
        <>
            <div className="especialidades-area" id='especialidades'>
                <div className="texto-especialidades">
                    <h1>ESPECIALIDADES EM</h1>
                </div>

                <div className="botoes-especialidades">
                    <button
                        className='custom-button'
                        onMouseEnter={() => handleDetalhes(0)}>
                        Visão Computacional e IA
                    </button>

                    <button
                        className='custom-button'
                        onMouseEnter={() => handleDetalhes(1)}>
                        Desenvolvimento Web
                    </button>

                    <button
                        className='custom-button'
                        onMouseEnter={() => handleDetalhes(2)}>
                        Back-end e Banco de Dados
                    </button>

                    <button
                        className='custom-button'
                        onMouseEnter={() => handleDetalhes(3)}>
                        Design
                    </button>
                </div>

                <div className="detalhe-especialidade">
                    <h3>Detalhes</h3>
                    <p>
                        {
                            detalheAtual
                        }
                    </p>
                    {
                        detalheNumber === 0 ?
                            <button
                                className='detalhe-button'
                                onClick={() => scrollToElement('IC')}>
                                Clique aqui para ver o projeto <MdOutlineKeyboardDoubleArrowDown style={{ fontSize: '13px' }} />
                            </button>
                            :
                            detalheNumber === 3 ?
                                <button
                                    className='detalhe-button'
                                    onClick={() => scrollToElement('design')}>
                                    <a href="https://github.com/AugustoAlmondes/Project-Gallery" 
                                        target="_blank"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        Ver Galeria </a> <MdOutlineArrowOutward style={{ fontSize: '13px' }} />
                                </button>
                                :
                                null
                    }
                </div>

                <div className="detalhe-especialidade">
                    <h3>Skills</h3>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=html,css,react,bootstrap,vite,vercel" />
                    </a>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=docker,vscode,discord,git,github,pnpm,prisma" />
                    </a>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=mysql,postgresql,mongodb,c,python,js" />
                    </a>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=express,nodejs,ps,figma,netlify" />
                    </a>

                </div>
                <Background />

            </div>

        </>
    );
}