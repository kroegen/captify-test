export default class Base {
  constructor({ client }) {
    if (!client) throw new Error('[client] required');

    this.client = client;
  }
}
