import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const team = [
    {
      name: "Алексей Смирнов",
      position: "Генеральный директор",
      description:
        "Более 20 лет опыта в транспортной отрасли. Основатель компании.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Мария Петрова",
      position: "Директор по логистике",
      description:
        "Специалист по оптимизации логистических процессов и планированию маршрутов.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b3d9?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Козлов",
      position: "Начальник транспортного отдела",
      description: "Контроль автопарка и координация водительского состава.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Елена Волкова",
      position: "Менеджер по работе с клиентами",
      description:
        "Индивидуальный подход к каждому клиенту и сопровождение заказов.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Сергей Михайлов",
      position: "Главный механик",
      description: "Техническое обслуживание и ремонт автопарка компании.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Ольга Новикова",
      position: "Бухгалтер-экономист",
      description:
        "Финансовое планирование и экономический анализ деятельности.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Наша команда
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессионалы с многолетним опытом, которые обеспечивают высокое
            качество наших услуг
          </p>
        </div>

        {/* Office Background Section */}
        <div className="relative mb-16 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop"
            alt="Офис компании"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl mx-auto text-center text-white px-6">
              <h2 className="text-2xl font-bold mb-2">
                Работаем как единая команда
              </h2>
              <p className="text-lg opacity-90">
                Каждый специалист вносит свой вклад в общий успех
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>

              <p className="text-blue-600 font-medium mb-3">
                {member.position}
              </p>

              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Workplace Photos Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Рабочие моменты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop"
                alt="Команда на складе"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                Работа на складе
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop"
                alt="Планирование маршрутов"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                Планирование маршрутов
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop"
                alt="Контроль качества"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                Контроль качества
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
                alt="Командная работа"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                Командная работа
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Присоединяйтесь к нашей команде
            </h2>
            <p className="text-gray-600 mb-6">
              Мы всегда ищем талантливых специалистов в области логистики и
              транспорта
            </p>
            <a
              href="/contacts"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Отправить резюме
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
