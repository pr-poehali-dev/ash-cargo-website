const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ash-Cargo</h3>
            <p className="text-gray-400 text-sm">
              Надежные грузоперевозки и логистические решения
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>+7 (495) 123-45-67</p>
              <p>info@ash-cargo.ru</p>
              <p>Москва, ул. Логистическая, 15</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Время работы</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Пн-Пт: 08:00 - 20:00</p>
              <p>Сб: 09:00 - 18:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ash-Cargo. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
