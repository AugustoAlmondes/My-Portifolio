import Typewriter from 'typewriter-effect';

const TituloConteudo = () => {
    return (
        <div className="titulo-conteudo">
            <h1>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`Seja Bem Vindo!!{ }`)
                            // .pauseFor(900)
                            .start()
                            .callFunction(() => {
                                document.querySelector('.second-typing').style.display = 'inline'; // Mostra o segundo h1
                            });
                    }}
                />
            </h1>
            <h1 style={{ display: 'none' }} className="second-typing">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Me chamo Augusto Almondes.')
                            .start();
                    }}
                />
            </h1>
        </div>
    );
};

export default TituloConteudo;
