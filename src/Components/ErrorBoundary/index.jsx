import './style.scss';
import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
    let { status, statusText } = useRouteError();
    return (
        <section className='error-boundary'>
            <h1>{status}</h1>
            <h2>{statusText}</h2>
        </section>
    )
  }