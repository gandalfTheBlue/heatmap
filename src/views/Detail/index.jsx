import './index.less'
import head1 from 'src/images/head1.jpeg'
import head2 from 'src/images/head2.jpeg'
import head3 from 'src/images/head3.jpeg'
import head4 from 'src/images/head4.jpeg'
import head5 from 'src/images/head5.jpeg'
import head6 from 'src/images/head6.jpeg'

import { Avatar, Table } from 'antd'
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
    {
      title: '体温',
      dataIndex: 'temperature',
      key: 'temperature',
    },
    {
      title: '头像',
      dataIndex: 'head',
      key: 'head',
      render: (_, record) => (
        <Avatar shape="square" size={40} src={record.head} />
      ),
    },
  ]

  const data = [
    {
      key: '1',
      device: 'SCDMA',
      report: '2021/11/30 18:10:24',
      IMEI: '990006202564906',
      IMSI: '750006598141406',
      phone: '13567890556',
      id: '510106196911308374',
      temperature: '38.0',
      head: head1,
    },
    {
      key: '2',
      device: 'GSM_02',
      report: '2021/11/27 10:33:09',
      IMEI: '985748608531888',
      IMSI: '460006598141406',
      phone: '13345821345',
      id: '510182198907153345',
      temperature: '37.4',
      head: head2,
    },
    {
      key: '3',
      device: 'FDD',
      report: '2021/11/27 12:54:45',
      IMEI: '537710824851857',
      IMSI: '089904310062647454',
      phone: '17811235390',
      id: '510106197106269979',
      temperature: '37.5',
      head: head3,
    },
    {
      key: '4',
      device: 'TDD',
      report: '2021/11/28 13:16:22',
      IMEI: '987186195310226',
      IMSI: '088904139151920268',
      phone: '13547890123',
      id: '510106197106266997',
      temperature: '37.9',
      head: head4,
    },
    {
      key: '5',
      device: 'CDMA',
      report: '2021/11/26 11:10:55',
      IMEI: '355153362133223',
      IMSI: '086922069344117037',
      phone: '13067523304',
      id: '510403197806267357',
      temperature: '37.3',
      head: head5,
    },
    {
      key: '6',
      device: 'WCDMA_01',
      report: '2021/11/30 08:43:11',
      IMEI: '867658718006759',
      IMSI: '460006598141406',
      phone: '13888902344',
      id: '510403197806266936',
      temperature: '37.6',
      head: head6,
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
