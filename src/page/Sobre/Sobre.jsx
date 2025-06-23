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
                        {/* Meu nome é Augusto Almondes Teixeira, um entusiasta da tecnologia com foco no desenvolvimento front-end. Sou apaixonado por construir interfaces de usuário intuitivas e performáticas, utilizando as mais recentes tecnologias do mercado. Minha experiência principal é com React e Node.js. Domino HTML5, CSS3, JavaScript moderno (ES6+) e estou começando a explorar o TypeScript. Tenho experiência com a integração de APIs RESTful/GraphQL, controle de versão com Git/GitHub, e estou constantemente explorando ferramentas e bibliotecas de animação para enriquecer a experiência do usuário. */}
                         Sou Augusto Almondes, profissional multidisciplinar de Picos (PI), com formação sólida e atuação em áreas como administração, atendimento ao público, design gráfico, edição e produção de vídeo, desenvolvimento web, web design e suporte administrativo . A partir dessas experiências, desenvolvi uma combinação única de habilidades criativas, técnicas e de gestão, que me permite atuar com qualidade desde o atendimento ao cliente até a entrega de produtos digitais.
                        <br />
                        <br />
                        Atualmente, atuo como desenvolvedor Fullstack Junior, unindo conhecimentos de UI/UX, desenvolvimento de interfaces e lógica de aplicação para criar produtos completos, funcionais e bem estruturados.

                        Tenho experiência em projetos que envolvem desde a criação de sites modernos, dinâmicos e responsivos, dashboards interativos, integração entre Frontend e Backend, até o desenvolvimento de APIs e modelagem de bancos de dados.

                        Gosto de participar ativamente de todas as etapas: definição da lógica de interação, estrutura técnica, organização visual e usabilidade final. Minha meta é sempre entregar soluções que sejam claras, intuitivas e eficientes, com foco real nas necessidades do usuário final.
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