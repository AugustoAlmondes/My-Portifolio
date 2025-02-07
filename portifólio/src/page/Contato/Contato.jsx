import './style.css';
import RedesBotaao from '../../components/RedesBotao.jsx'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { useState } from 'react';

export default function Contato() {

    const [mensagem, setMensagem] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    function enviarMensagem(e) {
        e.preventDefault();

        const {nome, email, mensagem: textoMensagem} = mensagem;
        const mensagemCompleta = `Olá, me chamo: ${nome} e estou entrando em contato porquê:\n${textoMensagem}`;
        const link = `mailto:augusto7666@gmail.com?subject=Tenho interesse ou dúvida&body=${encodeURIComponent(mensagemCompleta)}`;
        window.open(link);
    }

    return (
        <>
            <div className="contato-area" id='contatos'>
                <div className="contato-area-left">
                    <h1>SE <span>INTERESSOU</span> OU TEM ALGUNMA DÚVIDA?</h1>
                    <h3>Entre em contato</h3>

                    <ul>
                        <li>
                            <h2>CONTATO</h2>
                            <p>augusto7666@gmail.com</p>
                        </li>

                        <li>
                            <h2>REDES SOCIAIS</h2>

                            <div className="redes-area">
                                <RedesBotaao
                                    IconComponent={FaWhatsapp}
                                    url={"https://wa.me/+5589988083671"}
                                    height={40}
                                    width={40}
                                    fontSize={40}
                                />
                                <RedesBotaao
                                    IconComponent={MdOutlineEmail}
                                    url={"mailto: augusto7666@gmail.com"}
                                    height={40}
                                    width={40}
                                    fontSize={40}
                                />
                                <RedesBotaao
                                    IconComponent={FaGithub}
                                    url={"https://github.com/AugustoAlmondes"}
                                    height={40}
                                    width={40}
                                    fontSize={40}
                                />
                                <RedesBotaao
                                    IconComponent={FaLinkedin}
                                    url={"https://www.linkedin.com/in/augusto-almondes-812196231/"}
                                    height={40}
                                    width={40}
                                    fontSize={40}
                                />
                                <RedesBotaao
                                    IconComponent={FaInstagram}
                                    url={"https://www.instagram.com/augusto_almondes/"}
                                    height={40}
                                    width={40}
                                    fontSize={40}
                                />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="contato-area-right">
                    <h2>Formulário de contato</h2>

                    <form>
                        <div className="container-input-form">
                            <label htmlFor="name">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className='input-form-contato'
                                onChange={(e) => setMensagem({ ...mensagem, nome: e.target.value })}
                            />
                        </div>

                        <div className="container-input-form">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='input-form-contato'
                                onChange={(e) => setMensagem({ ...mensagem, email: e.target.value })}
                            />
                        </div>

                        <div className="container-input-form">
                            <label htmlFor="message">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className='input-form-contato'
                                onChange={(e) => setMensagem({ ...mensagem, mensagem: e.target.value })}
                            ></textarea>
                            <button
                                type="submit"
                                onClick={enviarMensagem}
                            >Enviar</button>
                        </div>


                    </form>
                </div>

            </div>
            <div className="direitos-reservados">
                <p>@ 2025 - All rights reserved, web design and development - Augusto Almondes Teixeira</p>
            </div>
        </>
    );
}