import axios from 'axios';
import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getUser: () => client.request({
      method: 'GET',
      url: '/user'
    }),
    getSpecificUser: (id) => client.request({
      method: 'GET',
      url: `/user/${id}`,
    }),
    updateUser: (data, id) => client.request({
      method: 'PATCH',
      url: `/user/${id}`,
      data,
    })
  };
};
