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
