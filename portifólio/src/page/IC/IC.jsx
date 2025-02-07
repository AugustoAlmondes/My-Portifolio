import './IC.css'
import Image_IC from '../../assets/IC2.png'
import { IoSearchSharp } from "react-icons/io5";
import Artigo from '../../documents/Artigo.pdf';
import { IoMdDownload } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function IC() {
    return (
        <>
            <div className="container-ic" id='IC'>
                <div className="conteudo-ic">
                    <div className="config-imagem-ic" >
                        <img className="imagem-ic" src={Image_IC} />
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
                            <a href={Artigo} target="iframe_download" download={true}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <button>
                                    <iframe name="iframe_download"
                                        style={{ display: 'none' }}
                                    ></iframe>

                                    Baixar Paper
                                    <IoMdDownload
                                        style={{ fontSize: '15px', marginLeft: '10px' }} />
                                </button>
                            </a>
                            <a href="https://colab.research.google.com/drive/1umIPVSSHvREcrt5uPi3zhpAIFEQAicqK?usp=sharing"

                                style={{ textDecoration: 'none', color: 'inherit' }}
                                target='_blank'
                            >
                                <button>
                                    Notebook Colab
                                    <MdOutlineArrowOutward style={{ fontSize: '15px', marginLeft: '10px' }} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}