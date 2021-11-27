import React from 'react'
import PageList from 'src/components/PageList'
import { getImageRow, getRender, getTimeRow } from 'src/utils/tableUtil'

const News = () => {
  return <PageList columns={columns} drawerWidth={900} showRowSelection />
}

export default News

const columns = [
  {
    ...getImageRow('封面图', 'faceUrl'),
    hideInList: true,
    form: {
      comp: 'FormImage',
    },
  },
  {
    title: '标题',
    dataIndex: 'titleCh',
    width: 200,
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '描述',
    dataIndex: 'subTitleCh',
    hideInList: true,
    form: {
      comp: 'FormInput',
      type: 'textarea',
      rows: 4,
    },
  },
  {
    title: '排序号',
    dataIndex: 'sortOrder',
    form: {
      comp: 'FormInputNum',
      required: false,
    },
  },
  {
    title: '头部新闻',
    dataIndex: 'isHeaderItem',
    render: getRender((record) => (record.isHeaderItem ? '是' : '否')),
  },
  {
    title: '是否发布',
    dataIndex: 'isPublish',
    render: getRender((record) => (record.isPublish ? '是' : '否')),
    form: {
      comp: 'FormPublishRadio',
    },
  },
  {
    title: '内容',
    dataIndex: 'contentCh',
    hideInList: true,
    form: {
      comp: 'FormEditor',
    },
  },
  getTimeRow('编辑时间', 'lastEditTime'),
]
