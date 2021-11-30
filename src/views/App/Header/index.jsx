import './index.less'

import { AppstoreOutlined, UserOutlined, BellOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Badge } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { project } from 'src/config'
import { signout } from 'src/utils/common'

import ChangePassword from './ChangePassword'

const Header = ({ user }) => {
  const [showChangePwdModal, setShowChangePwdModal] = useState(false)

  const changePwd = () => {
    setShowChangePwdModal(true)
  }

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <AppstoreOutlined />
          <span>疫情防控</span>
        </Link>
      </div>
      <div className="header-right">
        <div className="header-right-welcome">
          {project}-疫情防控系统欢迎您！
        </div>
        <div className="header-right-user">
          <div className="header-right-user-warning">
            <span>体温告警: </span>
            <Badge count={5} size="small">
              <BellOutlined style={{ fontSize: 16 }} />
            </Badge>
          </div>
          <div className="header-right-user-signout">
            <Dropdown overlay={getLogoutDropdown(changePwd, signout)}>
              <span>
                <UserOutlined />
                <span className="username">{user?.username}</span>
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
      {showChangePwdModal && (
        <ChangePassword setVisible={setShowChangePwdModal} user={user} />
      )}
    </div>
  )
}

export default Header

const getLogoutDropdown = (changePwd, signout) => {
  return (
    <Menu>
      {/* <Menu.Item onClick={changePwd}>修改密码</Menu.Item> */}
      <Menu.Item onClick={signout}>安全退出</Menu.Item>
    </Menu>
  )
}
