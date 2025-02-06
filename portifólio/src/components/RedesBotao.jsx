import PropTypes from 'prop-types';
import './style/RedesBotao.css'

export default function RedesBotao({IconComponent, url, height, width, fontSize}) {
    return (
        <>
            <a href={url} target='_blank' className='rede-botao' 
            style={{
                height: height,
                width: width,
                fontSize: fontSize
            }}
            >
                <IconComponent className='icone'/>
            </a>
        </>
    );
}

RedesBotao.propTypes = {
    IconComponent: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    fontSize: PropTypes.number
}