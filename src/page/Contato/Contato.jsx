import './style.css';
import RedesBotaao from '../../components/RedesBotao.jsx';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { useState } from 'react';

export default function Contato() {
    const [mensagem, setMensagem] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setMensagem({ ...mensagem, [e.target.name]: e.target.value });
    };

    const enviarMensagem = (e) => {
        e.preventDefault();

        const { nome, email, mensagem: textoMensagem } = mensagem;

        if (!nome || !email || !textoMensagem) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        const mensagemCompleta = `Olá, me chamo: ${nome} (Email: ${email}) e estou entrando em contato porque:\n${textoMensagem}`;
        const link = `mailto:augusto7666@gmail.com?subject=${encodeURIComponent("Interesse ou Dúvida de Contato")}&body=${encodeURIComponent(mensagemCompleta)}`;
        window.open(link, '_blank'); // Open in a new tab
        setMensagem({ nome: '', email: '', mensagem: '' }); // Clear the form
    };

    return (
        <>
            <div className="contato-area" id='contatos'>
                <div className="contato-area-left">
                    <h1>SE <span className="highlight">INTERESSOU</span> OU TEM ALGUMA DÚVIDA?</h1>
                    <h3>Entre em contato</h3>

                    <ul className="contact-info-list">
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
                                    url={"mailto:augusto7666@gmail.com"}
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
                    <h2>Formulário de Contato</h2>
                    <form onSubmit={enviarMensagem}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                className='input-form-contato'
                                value={mensagem.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='input-form-contato'
                                value={mensagem.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                className='input-form-contato'
                                value={mensagem.mensagem}
                                onChange={handleChange}
                                rows="7" // Provide a default height
                                required
                            ></textarea>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="direitos-reservados">
                <p>&copy; 2025 - All rights reserved, web design and development - Augusto Almondes Teixeira</p>
            </div>
        </>
    );
}