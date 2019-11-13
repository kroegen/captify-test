import axios       from 'axios';
import qs          from 'qs';

export default class Client {
  constructor({ prefix } = {}) {
    this.prefix = prefix;
  }

  async get(url, params) {
    const query = params ? `?${qs.stringify(params, { encode: false, skipNulls: true })}` : '';
    const data  = await this.request({ url, method: 'GET', query });

    return data;
  }

  async post(url, payload) {
    const data = await this.request({ url, method: 'POST', data: payload });

    return data;
  }

  async put(url, payload) {
    const data = await this.request({ url, method: 'PUT', data: payload });

    return data;
  }

  async delete(url) {
    const data = await this.request({ url, method: 'DELETE' });

    return data;
  }

  async request({ url, method, query, data }) {
    const headers = {
      'Content-Type': 'application/json',
    };

    const options = {
      url: `${this.prefix}/${url}${query ? query : ''}`,
      method,
      data,
      headers,
    };

    try {
      const resp = await axios(options);

      if (resp.data.status && resp.data.status === 1) return resp.data.data;

      throw resp.data.data;
    } catch (error) {
      if (error.response) throw error.response.data.error;

      throw error;
    }
  }
}
