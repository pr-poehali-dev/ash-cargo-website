import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TransportCarousel from "@/components/TransportCarousel";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Truck",
      title: "Грузоперевозки",
      description: "Надежная доставка грузов по России и СНГ",
    },
    {
      icon: "Package",
      title: "Складские услуги",
      description: "Современные складские комплексы с контролем климата",
    },
    {
      icon: "Route",
      title: "Логистика",
      description: "Комплексные логистические решения для бизнеса",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Ash-Cargo</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональные транспортные и логистические услуги. Гарантируем
              безопасность, скорость и надежность доставки.
            </p>
            <Link
              to="/contacts"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>

      {/* Transport Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наш автопарк
          </h2>
          <TransportCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши услуги
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    name={service.icon}
                    size={48}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
            >
              Все услуги →
            </Link>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
