import './style.scss'

export default function Pagination ({ paginate, activeUrl }) {
    return (
        <nav className="pagination">
            <button className={`pagination-item prev ${!activeUrl.prevUrl ? 'disabled': ''}`} onClick={() => paginate('prev')}>Previous Page</button>
            <button className={`pagination-item next ${!activeUrl.nextUrl ? 'disabled': ''}`} onClick={() => paginate('next')}>Next Page</button>
        </nav>
    )
}