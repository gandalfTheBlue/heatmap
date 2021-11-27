import './index.less'

import { Menu } from 'antd'
import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router'
import { navs } from 'src/views/Router'

const SideMenu = ({ activeRoute }) => {
  const history = useHistory()
  const [selectedKeys, setSelectedKeys] = useState([])
  const rootNavKeys = navs.map((item) => item.path)

  const defaultSelectedKeys = useMemo(() => {
    let defaultSelectedKeys = []

    navs.forEach((menu) => {
      if (activeRoute.path === menu.path) {
        defaultSelectedKeys = [`${menu.path}`]
      }
    })
    return defaultSelectedKeys
  }, [activeRoute])

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find((key) => !selectedKeys.includes(key))
    if (rootNavKeys.includes(latestOpenKey)) {
      setSelectedKeys(latestOpenKey ? [latestOpenKey] : [])
    } else {
      setSelectedKeys(openKeys)
    }
  }

  if (navs.length === 0) return null

  return (
    <Menu
      className="side-menu"
      selectedKeys={defaultSelectedKeys}
      mode="inline"
      onOpenChange={onOpenChange}
      theme="dark"
    >
      {navs.map((item) => {
        return (
          <Menu.Item
            key={item.path}
            icon={item.icon}
            onClick={() => history.push(item.path)}
          >
            {item.title}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

export default SideMenu
