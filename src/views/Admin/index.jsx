import React from 'react'
import PageList from 'src/components/PageList'
import { getImageRow, getRender } from 'src/utils/tableUtil'

const Admin = () => {
  return <PageList columns={columns} />
}

export default Admin

const columns = [
  {
    ...getImageRow('头像', 'faceUrl'),
    form: {
      comp: 'FormImage',
    },
  },
  {
    title: '用户名',
    dataIndex: 'username',
    form: {
      comp: 'FormInput',
      disabled: 'isEdit',
    },
  },
  {
    title: '密码',
    dataIndex: 'password',
    hideInList: true,
    form: {
      comp: 'FormInput',
      hide: 'isEdit',
    },
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '是否启用',
    dataIndex: 'isEnable',
    render: getRender((record) => (record.isEnable ? '是' : '否')),
    form: {
      comp: 'FormEnableRadio',
    },
  },
]
