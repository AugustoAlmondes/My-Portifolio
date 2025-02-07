import PropTypes from 'prop-types';
import './style/Projeto.css'

export default function Projeto({ nome, linguagem, link }) {

    console.log("Nome do Projeto:", nome);
    console.log("Linguagens:", linguagem);

    return (
        <>
            <a className='link-projeto' href={link} target={'_blank'}>
                <div className="projeto">

                    <h3 className='titulo-projeto'>{nome}</h3>

                    <div className="lista-linguagem">
                        {linguagem && linguagem.length > 0 ? (
                            linguagem.map((ling, index) => (
                                <li key={index} className={ling}>
                                    {ling}
                                </li>
                            ))
                        ) : (
                            <li>Nenhuma Linguagem fornecida</li>
                        )}
                    </div>
                </div>
            </a>
        </>
    );
}

Projeto.propTypes = {
    nome: PropTypes.string.isRequired,
    linguagem: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
}