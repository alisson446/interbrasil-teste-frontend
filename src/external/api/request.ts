import Cookies from 'js-cookie';

const headerApiToken = (): Object => ({
  headers: {
    'x-access-token': Cookies.get('token')
  }
});

export const getJson = (path: string): Object => ({
  method: 'get',
  url: path,
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
  ...headerApiToken()
})

export const post = (path: string, data: Object): Object => ({
  method: 'post',
  url: path,
  baseURL: process.env.REACT_APP_API_URL,
  data,
  responseType: 'json',
  ...headerApiToken()
})

export const put = (path: string, data: any): Object => ({
  method: 'put',
  url: path,
  baseURL: process.env.REACT_APP_API_URL,
  data,
  responseType: 'json',
  ...headerApiToken()
})

export const remove = (path: string): Object => ({
  method: 'delete',
  url: path,
  baseURL: process.env.REACT_APP_API_URL,
  ...headerApiToken()
})
