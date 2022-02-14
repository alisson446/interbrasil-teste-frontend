import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Main from '../pages/Main';
import Login from '../pages/Login';

const beforeRender = (Component: React.FC , props: any) => {
  if (Cookies.get('token')) {
      return <Component {...props} />;
  } else {
    return <Redirect to='/login' />
  }
}

export default [
  {
    path: '/',
    component: (props: any) => beforeRender(Main, props),
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    render: () => <Redirect to='/' />
  }
]