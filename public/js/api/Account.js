/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  
  static URL = '/account';
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback = f => f){
    return createRequest({method: `GET`, URL: this.URL, ID: id}, callback);
  }
}