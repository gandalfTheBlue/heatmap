import React from 'react'
import { useSelector } from 'react-redux'
import PageList from 'src/components/PageList'

const Product = () => {
  const { categories, treeCategories } = useSelector((state) => state.app)

  const initValues = (form, entity) => {
    if (entity) {
      const category = categories.find((item) => item.id === entity.categoryId)
      if (category) {
        form.setFieldsValue({ category: [category.pid, category.id] })
      }
    }
  }

  const beforeFinish = (values) => {
    values.categoryId = values.category[1]
  }

  return (
    <PageList
      columns={getColumns(treeCategories)}
      initValues={initValues}
      beforeFinish={beforeFinish}
      drawerWidth={900}
    />
  )
}

export default Product

const getColumns = (treeCategories) => [
  {
    title: '产品分类',
    dataIndex: 'category',
    hideInList: true,
    form: {
      comp: 'FormCascader',
      options: treeCategories,
    },
  },
  {
    title: '产品名称',
    dataIndex: 'name',
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '产品分类',
    dataIndex: 'categoryName',
  },
  {
    title: '描述',
    dataIndex: 'subTitle',
    hideInList: true,
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '产品标签',
    dataIndex: 'tag',
    hideInList: true,
    form: {
      comp: 'FormSelect',
      mode: 'tags',
    },
  },
  {
    title: '首图',
    dataIndex: 'image1',
    hideInList: true,
    form: {
      comp: 'FormImage',
    },
  },
  {
    title: '子图',
    dataIndex: 'image2',
    hideInList: true,
    form: {
      comp: 'FormImage',
    },
  },
  {
    title: '产品单页pdf',
    dataIndex: 'fileUrl',
    hideInList: true,
    form: {
      comp: 'FormFile',
    },
  },
  {
    title: '执行标准',
    dataIndex: 'excuteStandardNum',
    hideInList: true,
    form: {
      comp: 'FormInput',
    },
  },
  {
    title: '可机播',
    dataIndex: 'isMachine',
    hideInList: true,
    form: {
      comp: 'FormEnableRadio',
    },
  },
  {
    title: '内容',
    dataIndex: 'content',
    hideInList: true,
    form: {
      comp: 'FormEditor',
    },
  },
]
