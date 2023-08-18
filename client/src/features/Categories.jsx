import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
      <div className="flex space-x-4">
        {/* Map through your categories and create category buttons */}
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            {category.name}
          </Link>
        ))}
      </div>
    );
  };
  
  export default Categories;