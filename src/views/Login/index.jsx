import './index.less'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as appAction from 'src/actions/app'
import api from 'src/utils/api'
import { local, TOKEN } from 'src/utils/storage'
import logo from 'src/images/logo.jpeg'

const Login = ({ history }) => {
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    const { username, password } = values
    try {
      const result = await api.post(
        `/common/login?username=${username}&password=${password}`
      )
      local.setItem(TOKEN, result)
      dispatch(appAction.getUserInfo())
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-container">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            className="login-container-title"
            label="疫情防控系统"
          ></Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            label="用户名"
            name="username"
          >
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="密码" name="password">
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">登录</Button>
            <Button style={{ marginLeft: 50 }}>忘记密码</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
