import React from 'react'
import PageList from 'src/components/PageList'
import { getImageRow } from 'src/utils/tableUtil'

const Team = () => {
  return <PageList columns={columns} />
}

export default Team

const columns = [
  {
    title: '成员名称',
    dataIndex: 'name',
    form: {
      comp: 'FormInput',
    },
  },
  {
    ...getImageRow('头像', 'faceUrl'),
    form: {
      comp: 'FormImage',
    },
  },
  {
    title: '职位',
    dataIndex: 'position',
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '排序',
    dataIndex: 'sortOrder',
    form: {
      comp: 'FormInputNum',
      min: 1,
      required: false,
    },
  },
  {
    title: '描述',
    dataIndex: 'description',
    hideInList: true,
    form: {
      comp: 'FormInput',
      type: 'textarea',
      rows: 10,
    },
  },
]
