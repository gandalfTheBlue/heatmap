import React from 'react'
import PageList from 'src/components/PageList'
import { getImageRow } from 'src/utils/tableUtil'

const Partner = () => {
  return <PageList columns={columns} />
}

export default Partner

const columns = [
  {
    title: '合作伙伴',
    dataIndex: 'name',
    form: {
      comp: 'FormInput',
    },
  },
  {
    ...getImageRow('Logo', 'logoUrl'),
    form: {
      comp: 'FormImage',
    },
  },
  {
    title: '描述',
    dataIndex: 'description',
    form: {
      comp: 'FormSelect',
      mode: 'tags',
    },
  },
  {
    title: '跳转链接',
    dataIndex: 'toLink',
    form: {
      comp: 'FormInput',
    },
  },
]
