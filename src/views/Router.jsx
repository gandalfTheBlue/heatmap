import {
  BarsOutlined,
  IdcardOutlined,
  SettingFilled,
  SoundOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Admin from './Admin'
import Job from './Job'

import Login from './Login'
import News from './News'
import Partner from './Partner'
import Product from './Product'
import ProductCategory from './ProductCategory'
import Team from './Team'

export const navs = [
  {
    path: '/product/category',
    title: '产品分类',
    apiPath: '/goodsCategory',
    comp: ProductCategory,
    icon: <BarsOutlined />,
  },
  {
    path: '/product',
    title: '产品',
    apiPath: '/goods',
    comp: Product,
    icon: <WalletOutlined />,
  },
  {
    path: '/news',
    title: '新闻',
    apiPath: '/news',
    titleProp: 'titleCh',
    isPublish: true,
    isHeaderItem: true,
    comp: News,
    icon: <SoundOutlined />,
    actionWidth: 180,
  },
  {
    path: '/partner',
    title: '合作伙伴',
    apiPath: '/companyPartner',
    comp: Partner,
    icon: <UsergroupAddOutlined />,
  },
  {
    path: '/team',
    title: '团队成员',
    apiPath: '/teamMember',
    comp: Team,
    icon: <TeamOutlined />,
  },
  {
    path: '/job',
    title: '招聘职位',
    apiPath: '/job',
    isPublish: true,
    comp: Job,
    icon: <IdcardOutlined />,
  },
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
