import client from './Client';
import tableAPI from './Table';

function apiFactory() {
  const { REACT_APP_ROOT_API: apiPrefix } = process.env;

  if (!apiPrefix) {
    throw new Error('[apiPrefix] required');
  }

  const api = new client({ prefix: apiPrefix });

  return {
    api,
    table: new tableAPI({ client: api })
  };
}

export default apiFactory();
