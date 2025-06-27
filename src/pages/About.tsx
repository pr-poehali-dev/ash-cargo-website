import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">О компании</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Ash-Cargo — ведущая транспортно-логистическая компания, которая
            более 15 лет предоставляет профессиональные услуги грузоперевозок по
            всей территории России и стран СНГ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Наша миссия
              </h2>
              <p className="text-gray-600">
                Обеспечивать надежную и своевременную доставку грузов,
                предоставляя клиентам максимально качественный сервис и
                индивидуальный подход к каждому заказу.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Наши ценности
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Надежность и пунктуальность</li>
                <li>• Профессионализм команды</li>
                <li>• Индивидуальный подход</li>
                <li>• Современные технологии</li>
              </ul>
            </div>
          </div>

          {/* Office and Warehouse Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Офис компании Ash-Cargo"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Наш офис</h3>
                <p className="text-sm">Современное рабочее пространство</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop"
                alt="Складские помещения"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Складские помещения</h3>
                <p className="text-sm">Высокотехнологичное хранение</p>
              </div>
            </div>
          </div>

          {/* Team at Work Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Команда за работой
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=250&fit=crop"
                  alt="Команда в офисе"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Планерка в офисе
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=250&fit=crop"
                  alt="Работа на складе"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Контроль на складе
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=250&fit=crop"
                  alt="Логистические процессы"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Логистическое планирование
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему мы лидеры отрасли
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Опыт и надежность
                </h3>
                <p className="text-gray-600 text-sm">
                  15+ лет успешной работы на рынке логистических услуг
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Современный парк
                </h3>
                <p className="text-gray-600 text-sm">
                  Обновленный автопарк с системами мониторинга и безопасности
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Географическое покрытие
                </h3>
                <p className="text-gray-600 text-sm">
                  Доставка по всей России, странам СНГ и Европы
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Гарантии качества
                </h3>
                <p className="text-gray-600 text-sm">
                  Страхование грузов и полная ответственность за сохранность
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
