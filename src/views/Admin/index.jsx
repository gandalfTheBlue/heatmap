/* eslint-disable  */
import { Button } from 'antd'
import React, { useEffect } from 'react'
import './index.less'

const transparentImg =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

const Admin = () => {
  useEffect(() => {
    const data = [
      [120.14322240845, 30.236064370321, 5, 1],
      [120.14280555506, 30.23633761213, 5, 2],
      [120.14307598649, 30.236125905084, 5, 3],
      [120.14301682797, 30.236035316745, 5, 4],
      [120.1428734612, 30.236160551632, 5, 5],
      [120.14200215328, 30.23595702204, 5, 6],
      [120.14138577045, 30.236113748704, 5, 7],
      [120.1400398833, 30.235973050702, 5, 8],
      [120.13893453465, 30.23517220446, 5, 9],
      [120.1382899739, 30.234062922977, 5, 10],
      [120.13634057665, 30.233446752432, 5, 11],
      [120.13413680453, 30.232112168844, 5, 12],
      [120.13333353311, 30.232145779364, 5, 13],
      [120.13306479103, 30.231759284837, 5, 14],
      [120.13265960629, 30.231641351722, 5, 15],
      [120.1327455782, 30.231430284343, 5, 16],
      [120.13218153673, 30.230180120187, 5, 17],
      [120.13170681763, 30.229925745619, 5, 18],
      [120.13140700148, 30.229576173509, 5, 19],
      [120.13119614803, 30.228996846637, 5, 20],
      [120.13066649155, 30.228846445356, 5, 21],
      [120.13023980134, 30.228226570416, 5, 22],
      [120.12989250643, 30.228177899345, 5, 23],
      [120.1297674531, 30.227895075522, 5, 24],
      [120.12941575407, 30.228596968401, 5, 25],
      [120.12900512996, 30.228293967376, 5, 26],
      [120.12920653848, 30.228281493076, 5, 27],
      [120.12914997592, 30.22811126636, 5, 28],
      [120.12887629039, 30.227990425169, 5, 29],
    ]
    const bmapChart = echarts.init(document.getElementById('bmapChart'))
    const bmapOpt = {
      animation: false,
      bmap: {
        center: [120.13066322374, 30.240018034923],
        zoom: 14,
        roam: true,
      },
      visualMap: {
        show: true,
        bottom: 45,
        calculable: true,
        seriesIndex: 0,
        min: 0,
        max: 5,
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

    // for (let i = 0; i < data.length; i++) {
    //   const hotPoint = new BMap.Point(data[i][0], data[i][1])
    //   const icon = new BMap.Icon(transparentImg, new BMap.Size(20, 20), {
    //     anchor: new BMap.Size(12, 14),
    //   })
    //   const marker = new BMap.Marker(hotPoint, { icon })
    //   bmap.addOverlay(marker)

    //   const infoWindow = new BMap.InfoWindow(`
    //     <div style="margin:0;line-height:20px;padding:2px;">
    //       标题：热点详细信息
    //       <br/>${data[i][0]}, ${data[i][1]}
    //       <br/>热力值：${data[i][2]}
    //       <div style="margin-top:10px;text-align:center;">
    //         <button style="cursor:pointer;" id="${data[i][2]}">查看详情</button>
    //       </div>
    //     </div>`)

    //   marker.infoWindow = infoWindow // 给当前标注新增一个属性以便保存窗口信息infoWindow
    //   marker.addEventListener('click', function (e) {
    //     this.openInfoWindow(e.target.infoWindow) // 点击标注时，打开改标注对打开改标注对应的回调信息
    //   })
    // }

    const icon = new BMap.Icon(transparentImg, new BMap.Size(20, 20), {
      anchor: new BMap.Size(12, 14),
    })
    for (var i = 0; i < data.length; i++) {
      var marker = new BMap.Marker(new BMap.Point(data[i][0], data[i][1]), {
        icon,
      })
      var content = `<div style="margin:0;line-height:20px;padding:2px;">
            标题：热点详细信息
            <br/>${data[i][0]}, ${data[i][1]}
            <br/>热力值：${data[i][2]}
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
            alert('门店编号：' + e.target.dataset.sid)
          }
        })
      } else {
        //如果已经打开，直接获取按钮，添加事件
        document.getElementById('markerbtn').onclick = function (e) {
          alert('门店编号：' + e.target.dataset.sid)
        }
      }
    }
  }, [])

  const handleClick = (e) => {
    console.log(e)
  }

  return <div id="bmapChart" onClick={handleClick} />
}

export default Admin
