import { observable, action, runInAction } from 'mobx';
import api from '../api';

class TableStore {
  @observable table = [];
  @observable error = '';

  @action fetchTable = async () => {
    try {
      const table = await api.table.fetchTable('table');

      runInAction(() => {
        this.table = table;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    }
  }

  @action clearTable = () => {
    this.table = [];
  }

  @action addRow = async row => {
    try {
      const data = await api.table.addRow('row', row);

      runInAction(() => {
        this.table.push(data.row)
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    }
  }

  @action clearError = () => {
    this.error = '';
  }
}

const tableStore = new TableStore();

export default tableStore;
