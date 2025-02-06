import './IC.css'
import Image_IC from '../../assets/IC2.png'
import { IoSearchSharp } from "react-icons/io5";

export default function IC() {
    return (
        <>
            <div className="container-ic">
                <div className="conteudo-ic">
                    <div className="config-imagem-ic" >
                        <img className="imagem-ic" src={Image_IC}/>
                        <legend> Detecção da bactéria em imagens de microscópio</legend>
                    </div>

                    <div className="informacao-ic">
                        <div className="titulo-ic">
                            <h1>Pesquisa <br /> Científica</h1>
                            <span>
                                <IoSearchSharp />
                            </span>
                        </div>
                        <div className="texto-ic">
                            <p>
                                O avanço da Visão Computacional, com o uso de Deep Learning, tem sido aplicado para auxiliar no combate à Tuberculose, melhorando o diagnóstico e o tratamento. Essas tecnologias podem automatizar e aprimorar a detecção do Mycobacterium tuberculosis em amostras de escarro, tornando o processo mais eficiente. O objetivo da pesquisa é desenvolver uma ferramenta de Visão Computacional que auxilie no diagnóstico da tuberculose, focando na classificação e contagem de bacilos por meio da baciloscopia.
                            </p>
                        </div>
                        <div className="botoes-ic">
                            <button>Acessar Paper</button>
                            <button>Notebook Colab</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}