import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-semibold">
                    ByteCanvas Stories
                </Link>
                {/* Add responsive menu button */}
                {/* Add navigation links */}
            </div>
        </nav>
    )
}

export default Navbar