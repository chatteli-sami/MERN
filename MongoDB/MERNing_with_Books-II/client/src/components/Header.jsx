import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <button><Link to="/books">All Books</Link></button>
                <button><Link to="/add-book">Add a new Book</Link></button>
            </nav>
        </header>
    )
}
export default Header