import { Button, Input } from 'antd'
import React, { useState } from 'react'

const ListHeader = ({
  fetchTable,
  search: defaultSearch,
  placeholder = '请输入查询条件',
  showAdd,
  addCallback,
  deleteCallback,
}) => {
  const [search, setSearch] = useState(defaultSearch?.keyword ?? '')

  const handleSearch = () => {
    fetchTable({ keyword: search })
  }

  const clearSearch = () => {
    setSearch('')
    fetchTable({ keyword: '' })
  }

  const handleAdd = () => {
    addCallback && addCallback()
  }

  const handleDelete = () => {
    deleteCallback && deleteCallback()
  }

  return (
    <div className="list-header">
      <div>
        <Button
          type="primary"
          onClick={handleAdd}
          style={{ visibility: showAdd ? 'visible' : 'hidden' }}
        >
          新增
        </Button>
        <Button
          onClick={handleDelete}
          style={{
            visibility: deleteCallback ? 'visible' : 'hidden',
            marginLeft: 10,
          }}
        >
          批量删除
        </Button>
      </div>
      <div className="list-header-right">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={handleSearch}
          placeholder={placeholder}
          style={{ width: 220 }}
        />
        <Button className="mr-10" onClick={handleSearch}>
          搜索
        </Button>
        <Button onClick={clearSearch}>清空</Button>
      </div>
    </div>
  )
}

export default ListHeader
