import './index.less'

import { Table } from 'antd'
import React from 'react'

const Detail = () => {
  const columns = [
    {
      title: '采集设备编号',
      dataIndex: 'device',
      key: 'device',
    },
    {
      title: '上报时间',
      dataIndex: 'report',
      key: 'report',
    },
    {
      title: '被监测IMEI',
      dataIndex: 'IMEI',
      key: 'IMEI',
    },
    {
      title: '被监测IMSI',
      dataIndex: 'IMSI',
      key: 'IMSI',
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '身份证号',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  const data = [
    {
      key: '1',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
    {
      key: '2',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
    {
      key: '3',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
    {
      key: '4',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
    {
      key: '5',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
    {
      key: '6',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
    {
      key: '7',
      device: 'SCDMA',
      report: '2021/11/27 18:10:24',
      IMEI: '990006202564906',
      IMSI: '460006598141406',
      phone: '13567890556',
      id: '510182198907153345',
    },
  ]

  return (
    <div className={`page page-list`}>
      <div className="page-list-title">体温详情</div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default Detail
