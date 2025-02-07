import PropTypes from 'prop-types';
import './style/HabilidadesArea.css'
import Imagem from '../assets/icons/telegram-png-21807.png'

export default function HabilidadesArea({ tituloHabilidades, lista }) {
    return (
        <>
            <div className="lista-habilidades">
                <h2>{tituloHabilidades}</h2>
                <div className="imagens-habilidades">
                    {lista.map((imagem, index) => (
                        <img key={index} src={imagem} alt={`habilidade-${index}`} />
                    ))}
                </div>
            </div>
        </>
    );
}

HabilidadesArea.propTypes = {
    tituloHabilidades: PropTypes.string.isRequired,
    lista: PropTypes.arrayOf(PropTypes.string).isRequired,
};
