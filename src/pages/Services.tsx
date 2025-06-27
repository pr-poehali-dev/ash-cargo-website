import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Truck",
      title: "Автомобильные перевозки",
      description:
        "Грузоперевозки по России и СНГ различными типами транспорта",
      features: [
        "Тентованные фуры",
        "Рефрижераторы",
        "Негабаритные грузы",
        "Экспресс-доставка",
      ],
    },
    {
      icon: "Package",
      title: "Складские услуги",
      description: "Современные складские комплексы с полным спектром услуг",
      features: [
        "Хранение грузов",
        "Таможенное оформление",
        "Упаковка и маркировка",
        "Инвентаризация",
      ],
    },
    {
      icon: "Route",
      title: "Логистические решения",
      description: "Комплексная организация цепочек поставок для бизнеса",
      features: [
        "Планирование маршрутов",
        "Мультимодальные перевозки",
        "Консолидация грузов",
        "Аутсорсинг логистики",
      ],
    },
    {
      icon: "Shield",
      title: "Страхование грузов",
      description: "Полное страхование и гарантии сохранности вашего груза",
      features: [
        "Полное покрытие",
        "Быстрое урегулирование",
        "Документооборот",
        "Экспертиза ущерба",
      ],
    },
    {
      icon: "Clock",
      title: "Срочные перевозки",
      description: "Экстренная доставка в кратчайшие сроки 24/7",
      features: [
        "Доставка за 24 часа",
        "Приоритетная обработка",
        "Сопровождение груза",
        "Онлайн-отслеживание",
      ],
    },
    {
      icon: "Globe",
      title: "Международные перевозки",
      description: "Доставка грузов в страны СНГ и Европейского союза",
      features: [
        "Таможенное оформление",
        "Международные документы",
        "Валютное законодательство",
        "Мультимодальность",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр транспортно-логистических услуг для решения любых
            задач вашего бизнеса
          </p>
        </div>

        {/* Services Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop"
              alt="Грузовые перевозки"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-sm font-semibold">Грузовые перевозки</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=300&h=200&fit=crop"
              alt="Складское хранение"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-sm font-semibold">Складское хранение</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
              alt="Логистические решения"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-sm font-semibold">Логистические решения</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=200&fit=crop"
              alt="Международные перевозки"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-sm font-semibold">Международные перевозки</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Прайс-лист
            </h2>
            <p className="text-lg text-gray-600">
              Стоимость основных транспортно-логистических услуг
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Icon name="Truck" size={20} className="text-blue-600 mr-2" />
                  Автомобильные перевозки
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Газель (до 1,5 т)</span>
                  <span className="font-medium text-gray-900">от 25 ₽/км</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">
                    Фура тентованная (до 20 т)
                  </span>
                  <span className="font-medium text-gray-900">от 45 ₽/км</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Рефрижератор (до 20 т)</span>
                  <span className="font-medium text-gray-900">от 55 ₽/км</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Негабаритные грузы</span>
                  <span className="font-medium text-gray-900">от 70 ₽/км</span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-green-600 mr-2"
                  />
                  Экспресс-доставка
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">
                    В пределах города (до 24ч)
                  </span>
                  <span className="font-medium text-gray-900">от 1 500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Межгород (до 48ч)</span>
                  <span className="font-medium text-gray-900">от 3 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Сопровождение груза</span>
                  <span className="font-medium text-gray-900">+2 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Работа в выходные</span>
                  <span className="font-medium text-gray-900">+50%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="bg-purple-50 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Icon
                    name="Package"
                    size={20}
                    className="text-purple-600 mr-2"
                  />
                  Складские услуги
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Хранение (за м²/сутки)</span>
                  <span className="font-medium text-gray-900">от 15 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">
                    Погрузо-разгрузочные работы
                  </span>
                  <span className="font-medium text-gray-900">
                    от 800 ₽/час
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Упаковка и маркировка</span>
                  <span className="font-medium text-gray-900">
                    от 50 ₽/место
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Инвентаризация</span>
                  <span className="font-medium text-gray-900">
                    от 5 ₽/место
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="bg-orange-50 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Icon
                    name="Globe"
                    size={20}
                    className="text-orange-600 mr-2"
                  />
                  Дополнительные услуги
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Таможенное оформление</span>
                  <span className="font-medium text-gray-900">от 5 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Страхование груза</span>
                  <span className="font-medium text-gray-900">0,1-0,3%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Консультация логиста</span>
                  <span className="font-medium text-gray-900">2 000 ₽/час</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">GPS-мониторинг</span>
                  <span className="font-medium text-gray-900">300 ₽/сутки</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              * Цены указаны без учета НДС. Точная стоимость рассчитывается
              индивидуально.
            </p>
            <a
              href="/contacts"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
            >
              <Icon name="Calculator" size={16} className="mr-2" />
              Рассчитать стоимость
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Нужна консультация?
            </h2>
            <p className="text-gray-600 mb-6">
              Наши специалисты помогут подобрать оптимальное решение для ваших
              задач
            </p>
            <a
              href="/contacts"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
