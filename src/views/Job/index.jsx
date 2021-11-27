import React from 'react'
import PageList from 'src/components/PageList'
import { getRender } from 'src/utils/tableUtil'

const Job = () => {
  return <PageList columns={columns} />
}

export default Job

const columns = [
  {
    title: '职位',
    dataIndex: 'name',
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '城市',
    dataIndex: 'city',
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '数量',
    dataIndex: 'amount',
    form: {
      comp: 'FormInputNum',
      min: 1,
    },
  },
  {
    title: '学历',
    dataIndex: 'minEducation',
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '邮箱',
    dataIndex: 'companyEmail',
    form: {
      comp: 'FormInput',
      type: 'email',
    },
  },
  {
    title: '岗位职责',
    dataIndex: 'jobDescription',
    hideInList: true,
    form: {
      comp: 'FormSelect',
      mode: 'tags',
    },
  },
  {
    title: '任职要求',
    dataIndex: 'jobRequest',
    hideInList: true,
    form: {
      comp: 'FormSelect',
      mode: 'tags',
    },
  },
  {
    title: '公司福利',
    dataIndex: 'companyBenefits',
    hideInList: true,
    form: {
      comp: 'FormSelect',
      mode: 'tags',
    },
  },
  {
    title: '是否发布',
    dataIndex: 'isPublish',
    render: getRender((record) => (record.isPublish ? '是' : '否')),
    form: {
      comp: 'FormPublishRadio',
    },
  },
]
