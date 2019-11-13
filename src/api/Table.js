import Base from './Base';

export default class extends Base {
  async fetchTable(url, query) {
    const data = await this.client.get(url, query);

    return data;
  }

  async addRow(url, payload) {
    const data = await this.client.post(url, payload);

    return data;
  }
}
