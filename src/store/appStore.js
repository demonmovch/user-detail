import { observable, computed, action } from 'mobx';

class AppStore {
  usersSaved = [];

  @observable users = [];

  @observable fetching = true;

  @action add(users) {
    this.users = [...users];
    this.usersSaved = [...users];
  }

  @action search(users) {
    this.users = [...users];
  }

  @action toggle() {
    this.fetching = false;
  }

  @computed get usersNumber() {
    return this.users.length;
  }
}

export default new AppStore();
