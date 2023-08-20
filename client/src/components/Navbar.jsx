import { Link } from 'react-router-dom'
import logo from "/logo[fff].png"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white logo">
                    <img src={logo} alt="log" />
                </Link>
                {/* Add responsive menu button */}
                {/* Add navigation links */}
            </div>
        </nav>
    )
}

export default Navbar