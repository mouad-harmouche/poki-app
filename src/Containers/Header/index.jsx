import './style.scss'
import { Link } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";

export default function Header() {
    return (
        <header className="header">
            <PageHeader content="Gotta catch 'em all !" subContent="Le lorem ipsum est, en imprimerie, une suite de mots"  />
            <nav>
                <Link to="/">Home Page</Link>
                <Link to="types">Pokemon</Link>
                <Link to="types">Types</Link>
            </nav>
        </header>
    );
}