import './style.css'
import { useState } from 'react';
import Background from '../../components/Background/Background'

export default function Especialidades() {

    const [detalhes, setDetalhes] = useState([
        `
        Tenho experiência na implementação de redes neurais para classificação e contagem de objetos, utilizando modelos como Detectron2, Faster R-CNN e YOLOv5 para detecção de objetos. Também trabalho com manipulação de datasets no formato COCO e pré-processamento de imagens, além de realizar a extração e análise de métricas de desempenho, incluindo Recall, Precisão, F1-Score e Acurácia.
        `,

        `
        No desenvolvimento front-end, utilizo React.js para criar interfaces dinâmicas e responsivas, implementando React Router para o gerenciamento de rotas. Desenvolvo componentes reutilizáveis, integro APIs e aplico estilização moderna com CSS e frameworks especializados. Além disso, implemento toast notifications para proporcionar feedback interativo ao usuário.
        `,

        `
        Tenho experiência no desenvolvimento de APIs REST com Node.js e Express, conectando e gerenciando bancos de dados MySQL, PostgreSQL e MongoDB. Trabalho na manipulação eficiente de dados, implementando operações CRUD completas e garantindo a integração adequada entre o back-end e o front-end.
        `,

        `
        Além do desenvolvimento, também atuo na área de design gráfico, utilizando Adobe Photoshop para edição e manutenção de imagens. Trabalho com design de interface e criação de layouts no Figma, além de desenvolver estampas e aprimorar elementos visuais para diferentes aplicações e produtos.
        `,

        'Coloque o mouse sobre uma especialidade',
    ]);


    const [detalheAtual, setDetalheAtual] = useState(detalhes[4]);

    function handleDetalhes(index) {
        setDetalheAtual([detalhes[index]]);
    }

    return (
        <>
            <div className="especialidades-area">
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
                    <p>{detalheAtual}</p>
                </div>

                <div className="detalhe-especialidade">
                    <h3>Skills</h3>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=html,css,react,bootstrap,vite,docker,vscode,discord,git,github"/>
                    </a>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=mysql,postgresql,prisma,mongodb,express,nodejs,c,python,js"/>
                    </a>

                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=pnpm,ps,figma"/>
                    </a>

                </div>
                <Background />

            </div>
            
        </>
    );
}