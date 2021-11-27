import { SettingFilled } from '@ant-design/icons'
import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Admin from './Admin'
import Login from './Login'

export const navs = [
  {
    path: '/admin',
    title: '平台管理员',
    titleProp: 'username',
    apiPath: '/user/platformAdmin',
    isEnable: true,
    isPassword: true,
    comp: Admin,
    icon: <SettingFilled />,
  },
]

export const routes = [...navs, { path: '/login', comp: Login }]

const Router = () => (
  <Switch>
    {routes.map((route) => {
      const { path, comp } = route
      return <Route key={path} path={path} exact component={comp} />
    })}
    <Redirect
      to={{
        pathname: routes[0].path,
      }}
    />
  </Switch>
)

export default Router
