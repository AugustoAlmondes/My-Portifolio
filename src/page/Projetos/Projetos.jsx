import './Projetos.css'
// import Repositorios from '../../repos.json'
import { FaGithub } from 'react-icons/fa';
import Projeto from '../../components/Projeto.jsx'
import { useEffect, useState } from 'react';


const hiddenRepos = ["AugustoAlmondes", "My-Portifolio", "Project-Gallery", "PDSI-2-WorkFinder", "Landing-Page-React", "workfinder"];

export default function Projetos() {

    const [repositorios, setRepositorios] = useState([]);

    async function buscarLinguagens(url) {
        const resposta = await fetch(url);
        const linguagens = await resposta.json();
        // Retorna uma lista de linguagens (as chaves do objeto são as linguagens)
        return Object.keys(linguagens);
    }

    async function buscarDados() {

        let resposta = await fetch('https://api.github.com/users/AugustoAlmondes/repos')
        // let resposta = await fetch(Repositorios)
        let variaveis = await resposta.json();

        let repositorioFull = await Promise.all(
            variaveis.map(async (repos) => {
                const linguagens = await buscarLinguagens(repos.languages_url)
                return {
                    nome: repos.name,
                    linguagens: linguagens,
                    link: repos.html_url
                };
            })
        );

        setRepositorios(repositorioFull);
    }

    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <>
            <div className="projetos" id='projetos'>
                <div className="titulo-projetos">
                    <FaGithub />
                    <h1>Meus Repositórios</h1>
                </div>

                <div className="container-projetos">

                    {/* {
                        repositorios.map((repo, index) => (

                            repo.nome === "AugustoAlmondes" ||
                                repo.nome === "My-Portifolio" ||
                                repo.nome === "Project-Gallery" ||
                                repo.nome === "PDSI-2-WorkFinder" ||
                                repo.nome === "Landing-Page-React" ||
                                repo.nome === 'workfinder' ? null :
                                <Projeto
                                    key={index}
                                    nome={repo.nome}
                                    linguagem={repo.linguagens}
                                    link={repo.link}
                                />
                        ))
                    } */}
                    {
                        repositorios.map((repo, index) => (
                            !hiddenRepos.includes(repo.nome) && (
                                <Projeto
                                    key={index}
                                    nome={repo.nome}
                                    linguagem={repo.linguagens}
                                    link={repo.link}
                                />
                            )
                        ))
                    }
                </div>
            </div>
        </>
    );
}