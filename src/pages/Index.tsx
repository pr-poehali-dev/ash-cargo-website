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
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
            alt="Грузовики на дороге"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Ash-Cargo</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
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

      {/* Warehouse & Terminals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Складские комплексы и терминалы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop"
                alt="Современный складской комплекс"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Складской комплекс</h3>
                <p className="text-sm">Автоматизированное хранение</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                alt="Логистический терминал"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Терминал</h3>
                <p className="text-sm">Сортировка и распределение</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop"
                alt="Погрузочно-разгрузочные работы"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Погрузка</h3>
                <p className="text-sm">Профессиональная обработка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Галерея автопарка
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&h=200&fit=crop"
                alt="Фургон для перевозки товаров"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Фургоны</h3>
                <p className="text-xs">До 3.5 тонн</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop"
                alt="Грузовик средней грузоподъемности"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Средние грузовики</h3>
                <p className="text-xs">До 10 тонн</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop"
                alt="Тяжелый грузовик с прицепом"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Тягачи</h3>
                <p className="text-xs">До 40 тонн</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop"
                alt="Рефрижератор для перевозки продуктов"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Рефрижераторы</h3>
                <p className="text-xs">Температурный режим</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
                alt="Контейнеровоз"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Контейнеровозы</h3>
                <p className="text-xs">20/40 футовые</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
                alt="Низкорамный тралл"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Тралы</h3>
                <p className="text-xs">Негабаритные грузы</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop"
                alt="Автокран"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Краны</h3>
                <p className="text-xs">Подъемная техника</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=300&h=200&fit=crop"
                alt="Микроавтобус для курьерских услуг"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold">Курьерские</h3>
                <p className="text-xs">Малые грузы</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Более 200 единиц современной техники в вашем распоряжении
            </p>
            <TransportCarousel />
          </div>
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
