import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О компании" },
    { path: "/team", label: "Сотрудники" },
    { path: "/services", label: "Услуги" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Ash-Cargo
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:+78001234567"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <Icon name="Phone" size={20} />
            <span className="hidden sm:block font-medium">
              8 (800) 123-45-67
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
