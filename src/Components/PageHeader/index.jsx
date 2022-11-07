import { Link } from 'react-router-dom';
import './style.scss'

export default function PageHeader({ content, subContent }) {
    return (
        <section className="page-heading">
            <Link to="/">
                <picture>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" loading='lazy' />
                </picture>
            </Link>
            <h1>{content}</h1>
            <h2>{subContent}</h2>
        </section>
    );
}