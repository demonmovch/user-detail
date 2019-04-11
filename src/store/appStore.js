import {observable, computed, action} from 'mobx';

class appStore{
    usersSaved = [];
    @observable users = [];
    @action add(users){
        this.users = [...users];
        this.usersSaved = [...users];
    }

    @action search(users){
      this.users = [...users];
    }

    @observable fetching = true;
    @action toggle(){
        this.fetching = false;
    }

    @computed get usersNumber(){
        return this.users.length;
    }
}

export default new appStore();