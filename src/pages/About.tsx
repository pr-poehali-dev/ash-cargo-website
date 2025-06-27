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
