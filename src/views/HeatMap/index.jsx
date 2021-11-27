/* eslint-disable  */
import './index.less'

import React, { useEffect } from 'react'

const transparentImg =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

const HeatMap = () => {
  useEffect(() => {
    const data = [
      [104.14322240845, 30.396064370321, 37.6, 1],
      [104.14280555506, 30.39633761213, 37.6, 2],
      [104.14307598649, 30.396125905084, 37.6, 3],
      [104.14301682797, 30.396035316745, 37.6, 4],
      [104.1428734612, 30.396160551632, 37.6, 37.6],
      [104.14200215328, 30.39595702204, 37.6, 6],
      [104.14138577045, 30.396113748704, 37.6, 7],
      [104.1400398833, 30.395973050702, 37.6, 8],
      [104.13893453465, 30.39517220446, 37.6, 9],
      [104.1382899739, 30.394062922977, 37.6, 10],
      [104.13634057665, 30.393446752432, 37.6, 11],
      [104.13413680453, 30.392112168844, 37.6, 12],
      [104.13333353311, 30.392145779364, 37.6, 13],
      [104.13306479103, 30.391759284837, 37.6, 14],
      [104.13265960629, 30.391641351722, 37.6, 15],
      [104.1327455782, 30.391430284343, 37.6, 16],
      [104.13218153673, 30.390180120187, 37.6, 17],
      [104.13170681763, 30.389925745619, 37.6, 18],
      [104.13140700148, 30.389576173509, 37.6, 19],
      [104.13119614803, 30.388996846637, 37.6, 20],
      [104.13066649155, 30.388846445356, 37.6, 21],
      [104.13023980134, 30.388226570416, 37.6, 22],
      [104.12989250643, 30.388177899345, 37.6, 23],
      [104.1297674531, 30.387895075522, 37.6, 24],
      [104.12941575407, 30.388596968401, 37.6, 25],
      [104.12900512996, 30.388293967376, 37.6, 26],
      [104.12920653848, 30.388281493076, 37.6, 27],
      [104.12914997592, 30.38811126636, 37.6, 28],
      [104.12887629039, 30.387990425169, 37.6, 29],
    ]
    const bmapChart = echarts.init(document.getElementById('bmapChart'))
    const bmapOpt = {
      animation: false,
      bmap: {
        center: [104.13066322374, 30.390018034923],
        zoom: 14,
        roam: true,
      },
      visualMap: {
        show: true,
        bottom: 45,
        calculable: true,
        seriesIndex: 0,
        min: 35,
        max: 38,
        inRange: {
          color: ['blue', 'green', 'yellow', 'red'],
        },
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'bmap',
          pointSize: 5,
          blurSize: 6,
          data: data,
        },
      ],
    }
    bmapChart.setOption(bmapOpt)
    let bmap = bmapChart.getModel().getComponent('bmap').getBMap()
    bmap.addControl(new BMap.MapTypeControl())

    function addClickHandler(content, marker) {
      marker.addEventListener('click', function (e) {
        console.log(e)
      })
    }

    const icon = new BMap.Icon(transparentImg, new BMap.Size(20, 20), {
      anchor: new BMap.Size(12, 14),
    })
    for (var i = 0; i < data.length; i++) {
      var marker = new BMap.Marker(new BMap.Point(data[i][0], data[i][1]), {
        icon,
      })
      var content = `<div style="margin:0;line-height:20px;padding:2px;">
            <div style="margin-bottom:8px;font-weight:bold;">热点详细信息</div>
            <span>坐标: ${data[i][0]}, ${data[i][1]}
            <br/>体温：${data[i][2]}
            <div style="margin-top:10px;text-align:center;">
              <button style="cursor:pointer;" id="markerbtn" value="点击弹出" data-sid="${data[i][3]}">查看详情</button>
            </div>
          </div>`
      bmap.addOverlay(marker) // 将标注添加到地图中
      addClickHandler(content, marker)
    }
    //给点位添加点击事件
    function addClickHandler(content, marker) {
      marker.addEventListener('click', function (e) {
        openInfo(content, e)
      })
    }
    //打开信息窗口
    function openInfo(content, e) {
      var p = e.target
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
      var infoWindow = new BMap.InfoWindow(content) // 创建信息窗口对象
      bmap.openInfoWindow(infoWindow, point) //开启信息窗口
      //判断窗口的打开状态
      if (!infoWindow.isOpen()) {
        //如果没有打开，则监听打开事件，获取按钮，添加事件
        infoWindow.addEventListener('open', function () {
          document.getElementById('markerbtn').onclick = function (e) {
            // alert('门店编号：' + e.target.dataset.sid)
            window.location.href = `${window.location.origin}${window.location.pathname}#/detail`
          }
        })
      } else {
        //如果已经打开，直接获取按钮，添加事件
        document.getElementById('markerbtn').onclick = function (e) {
          // alert('门店编号：' + e.target.dataset.sid)
          window.location.href = `${window.location.origin}${window.location.pathname}#/detail`
        }
      }
    }
  }, [])

  const handleClick = (e) => {
    console.log(e)
  }

  return <div id="bmapChart" onClick={handleClick} />
}

export default HeatMap
