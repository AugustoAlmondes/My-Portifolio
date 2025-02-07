import './Bemvindo.css'
import Imagem from '../../assets/fundoBV.png'
import Avatar from '../../assets/augusto.png'
import RedesBotaao from '../../components/RedesBotao.jsx'

import Curriculo from '../../documents/Curriculo.pdf'

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import Header from '../Header/Header.jsx'
import { IoIosArrowForward } from 'react-icons/io'
import scrollToElement from '../../utils/Scroll.js'

export default function BemVindo() {
    return (
        <>
            <div className="bemvindo" id='home'>
                <Header />
                <img className='img1' src={Imagem} />
                <img className='img2' src={Imagem} />

                <div className="conteudo">
                    <img className='avatar' src={Avatar} />

                    <div className="container-text-conteudo">

                        <div className="titulo-conteudo">
                            <h1 ><span>Seja</span> Bem Vindo!!</h1>
                            <h1> Me chamo <span>Augusto Almondes.</span></h1>
                        </div>
                        {/* <Titulo/> */}

                        <div className="botoes-conteudo">
                            <button
                            onClick={() => scrollToElement('sobre')}
                            >View Portfólio <IoIosArrowForward fontSize={"13px"} /></button>

                            <a href={Curriculo} target="iframe_download" download={true}
                                style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button>
                                    Curriculum Vitae < IoIosArrowForward fontSize={"13px"} />
                                </button>
                            </a>
                        </div>

                        {/* <div className="texto-conteudo">Aqui você encontrará uma coleção de trabalhos que refIetem minha jornada, habilidades e paixão pelo que faço. Seja no desenvolvimento de soluções criativas, projetos inovadores ou na aplicação prática de conhecimentos técnicos, cada projeto representa um passo na evolução da minha carreira e meu compromisso com a excelência. Navegue à vontade e descubra mais sobre minha visão, processos e experiências que moldam minha trajetória profissional.</div> */}

                        <div className="redes-conteudo">
                            <RedesBotaao
                                IconComponent={FaWhatsapp}
                                url={"https://wa.me/+5589988083671"}
                                height={50}
                                width={50}
                                fontSize={50}
                            />
                            <RedesBotaao
                                IconComponent={MdOutlineEmail}
                                url={"mailto: augusto7666@gmail.com"}
                                height={50}
                                width={50}
                                fontSize={50}
                            />
                            <RedesBotaao
                                IconComponent={FaGithub}
                                url={"https://github.com/AugustoAlmondes"}
                                height={50}
                                width={50}
                                fontSize={50}
                            />
                            <RedesBotaao
                                IconComponent={FaLinkedin}
                                url={"https://www.linkedin.com/in/augusto-almondes-812196231/"}
                                height={50}
                                width={50}
                                fontSize={50}
                            />
                            <RedesBotaao
                                IconComponent={FaInstagram}
                                url={"https://www.instagram.com/augusto_almondes/"}
                                height={50}
                                width={50}
                                fontSize={50}
                            />
                        </div>
                    </div>
                </div>
                <MdOutlineKeyboardDoubleArrowDown className='seta' onClick={() => { scrollToElement('sobre') }} />
            </div>
        </>
    );
}