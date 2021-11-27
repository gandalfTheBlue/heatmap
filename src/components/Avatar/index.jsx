import { Avatar } from 'antd'
import React from 'react'
import { getDomain } from 'src/utils/common'

const AdminAvatar = ({ src, shape, size }) => {
  if (!src) {
    return null
  }
  return <Avatar shape={shape} size={size} src={`${getDomain()}${src}`} />
}

export default AdminAvatar
