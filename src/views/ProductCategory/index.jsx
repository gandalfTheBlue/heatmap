import { DownOutlined } from '@ant-design/icons'
import { EditableProTable } from '@ant-design/pro-table'
import { Dropdown, Menu, message, modal } from 'antd'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageCustom from 'src/components/PageCustom'
import PageFormDrawer from 'src/components/PageFormDrawer'
import api from 'src/utils/api'
import * as appAction from 'src/actions/app'

const { confirm } = modal

const maxLevel = 2

export default () => {
  const dispatch = useDispatch()
  const { categories, treeCategories } = useSelector((state) => state.app)
  const [formVisible, setFormVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState()

  const getCategories = useCallback(() => {
    dispatch(appAction.getCategories())
  }, [dispatch])

  const handleAction = (e) => {
    const { type = '', id } = e.target
    const item = categories.find((item) => item.id === Number(id))
    if (type.startsWith('add')) {
      if (type === 'add-current') {
        setSelectedItem({ parent: item.parent, pid: item.pid })
      }
      if (type === 'add-next') {
        setSelectedItem({ parent: item.name, pid: item.id })
      }
      setFormVisible(true)
    }

    if (type === 'edit') {
      setSelectedItem(item)
      setFormVisible(true)
    }

    if (type === 'delete') {
      deleteCategory(item)
    }
  }

  const deleteCategory = (record) => {
    confirm({
      title: `请问您确认要删除该产品分类吗?`,
      content: `产品分类名: ${record.name}`,
      okText: '确定',
      cancelText: '取消',
      onOk: async () => {
        await api.post(`/goodsCategory/del?id=${record.id}`)
        message.success(`删除产品分类成功`)
        getCategories()
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  return (
    <PageCustom title="产品分类" customClass="pro-table">
      <div onClick={handleAction}>
        <EditableProTable
          rowKey="id"
          recordCreatorProps={false}
          columns={getColumns(maxLevel).filter((column) => !column.hideInList)}
          value={treeCategories}
        />
        {formVisible && (
          <PageFormDrawer
            formItems={getColumns(maxLevel)}
            onClose={() => setFormVisible(false)}
            defaultValues={selectedItem}
            callback={getCategories}
          />
        )}
      </div>
    </PageCustom>
  )
}

const getColumns = (maxLevel) => [
  {
    dataIndex: 'pid',
    hideInList: true,
    form: {
      comp: 'FormInput',
      hide: true,
    },
  },
  {
    title: '父级',
    dataIndex: 'parent',
    hideInList: true,
    form: {
      comp: 'FormInput',
      disabled: true,
      required: false,
    },
  },
  {
    title: '名称',
    dataIndex: 'name',
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
      required: false,
      type: 'textarea',
    },
  },
  {
    title: '图片',
    dataIndex: 'imageUrl',
    hideInList: true,
    form: {
      comp: 'FormImage',
      required: false,
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'date',
  },
  {
    title: '更新时间',
    dataIndex: 'lastEditTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    width: 200,
    render: (_, record) => [
      <Dropdown key="add" overlay={getMenu(record, maxLevel)}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          添加 <DownOutlined />
        </a>
      </Dropdown>,
      <a key="edit" type="edit" id={record.id}>
        编辑
      </a>,
      <a key="delete" type="delete" id={record.id}>
        删除
      </a>,
    ],
  },
]

const getMenu = (record, maxLevel) => {
  return (
    <Menu>
      <Menu.Item key="1">
        <a type="add-current" id={record.id}>
          同级产品分类
        </a>
      </Menu.Item>
      {record.level < maxLevel && (
        <Menu.Item key="2">
          <a type="add-next" id={record.id}>
            下级产品分类
          </a>
        </Menu.Item>
      )}
    </Menu>
  )
}
