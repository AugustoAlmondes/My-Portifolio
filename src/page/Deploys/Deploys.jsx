import './style.css';
import DonutImage from '../../assets/donut.png';
import WorkImage from '../../assets/work.png';
import BoostImage from '../../assets/boost.png';

const projects = [
    {
        name: 'Donut',
        url: 'https://donut-page.netlify.app',
        image: DonutImage,
        alt: 'donut'
    },
    {
        name: 'WorkFinder',
        url: 'https://workfinder-site.netlify.app',
        image: WorkImage,
        alt: 'workfinder'
    },
    {
        name: 'Boost',
        url: 'https://boost-ads.netlify.app',
        image: BoostImage,
        alt: 'boost'
    }
];

const otherProjects = [
    {
        name: 'Conversor de Moedas',
        url: 'https://benevolent-buttercream-ef8d7d.netlify.app',
    },
    {
        name: 'Fast Search Wiki',
        url: 'https://fastsearchwiki.netlify.app/',
    },
    {
        name: 'CEP Search',
        url: 'https://cep-search-react.netlify.app/',
    },
    {
        name: 'Viagens Landing Page',
        url: 'https://viagem-landing-page.netlify.app/',
    },
    {
        name: 'Model Login',
        url: 'https://login-model-react.netlify.app/',
    }
]

export default function Deploys() {
    return (
        <section className="deploy-area" id="deploys">
            <header className="texto-deploy">
                <h1>MEUS PROJETOS</h1>
            </header>
            <ul className="big-projects">
                {projects.map((project) => (
                    <li key={project.name}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Acessar o projeto ${project.name}`}
                        >
                            <img src={project.image} alt={project.alt} />
                        </a>
                    </li>
                ))}
            </ul>

            <div className="other">
                <h2>Outros projetos</h2>
                <ul className="other-projects">

                    {otherProjects.map((project) => {
                        return (
                            <li key={project.name}>
                                <a href={project.url}>
                                    <button>{project.name}</button>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}