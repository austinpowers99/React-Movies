import { Link } from 'react-router-dom';

export default function NavBar({ user }) {

    
    return (
        <>
            <h3>Welcome, {user}!</h3>
            <nav>
                <Link to="/" className='btn btn-outline-info'>Movies List</Link>
                &nbsp; | &nbsp;
                <Link to="/actors" className='btn btn-outline-info'>Actor List</Link>
            </nav>
            <br></br>
        </>
    )
}