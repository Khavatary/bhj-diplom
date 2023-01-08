/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const side = document.querySelector(`a.sidebar-toggle`);
    side.addEventListener(`click`, (ev) => {
      ev.preventDefault();
      const sideMini = document.querySelector(`body.sidebar-mini`);
      sideMini.classList.toggle(`sidebar-open`);
      sideMini.classList.toggle(`sidebar-collapse`); //для совместимости с Fire-Fox
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector(`.menu-item_register`).addEventListener(`click`, () => {
      App.getModal(`register`).open();
    });

    document.querySelector(`.menu-item_login`).addEventListener(`click`, () => {
      App.getModal(`login`).open();
    });

    document.querySelector(`.menu-item_logout`).addEventListener(`click`, () => {
      let callback = function (err, response) {
        if (response && response.success) {
          App.setState(`init`);
        }
      };
      User.logout(callback);
    });
  }
}