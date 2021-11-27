/* eslint-disable  */
import React, { useEffect } from 'react'
import bmapData from './bmap.json'
import './index.less'

const Admin = () => {
  useEffect(() => {
    const bmapChart = echarts.init(document.getElementById('bmapChart'))
    //配置
    const bmapOpt = {
      animation: false,
      bmap: {
        center: [120.13066322374, 30.240018034923],
        zoom: 14,
        roam: true,
      },
      visualMap: {
        show: false,
        bottom: 45,
        calculable: true,
        seriesIndex: 0,
        min: 0,
        max: 5,
        inRange: {
          color: ['green', 'yellow', 'red'],
        },
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'bmap', //基于百度地图
          pointSize: 5,
          blurSize: 6,
          data: bmapData,
        },
      ],
    }
    bmapChart.setOption(bmapOpt)
    //添加百度地图插件
    let bmap = bmapChart.getModel().getComponent('bmap').getBMap()
    bmap.addControl(new BMap.MapTypeControl())
  }, [])

  return <div id="bmapChart" />
}

export default Admin
