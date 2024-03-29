import { SettingFilled, StarOutlined, TagOutlined } from '@ant-design/icons'
import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Detail from './Detail'
import HeatMap from './HeatMap'
import Login from './Login'

export const navs = [
  {
    path: '/heat-map',
    title: '体温热点',
    comp: HeatMap,
    icon: <StarOutlined />,
  },
  {
    path: '/detail',
    title: '热点详情',
    comp: Detail,
    icon: <SettingFilled />,
  },
  {
    path: '/track',
    title: '轨迹跟踪',
    icon: <TagOutlined />,
    navigate: false,
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
