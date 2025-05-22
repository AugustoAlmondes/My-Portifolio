import './style.css';
import DonutImage from '../../assets/donut.png';
import WorkImage from '../../assets/work.png';
import BoostImage from '../../assets/boost.png';

export default function Deploys() {
    return (
        <>
            <div className="deploy-area">
                <div className="texto-deploy">
                    <h1>DESENVOLVIMENTO WEB</h1>
                </div>
                <ul className="big-projects">
                    <li>
                        <a href="https://donut-page.netlify.app" target="_blank">
                            <img src={DonutImage} alt="donut" />
                        </a>
                    </li>
                    <li>
                        <a href="https://workfinder-site.netlify.app" target="_blank">
                            <img src={WorkImage} alt="workfinder" />
                        </a>
                    </li>
                    <li>
                        <a href="https://boost-ads.netlify.app" target="_blank">
                            <img src={BoostImage} alt="boost" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}