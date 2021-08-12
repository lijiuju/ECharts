// 柱形图模块1
// 立即执行函数
(function () {
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.bar .chart'));
    // 2. 指定配置项和数据
    option = {
        // 通过color修改柱子颜色
        color: ["#2f89cf"],
        // grid 修改图形大小
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        // 图表的提示框组件
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            // 修改刻度标签 相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: 9
            },
            axisTick: {
                alignWithLabel: true
            },
            // x轴样式不显示
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            // 修改刻度标签 相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            },
            // y轴样式
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        },
        series: [{
            data: [200, 300, 300, 900, 1500, 1200, 600],
            type: 'bar',
            name: '直接访问',
            // 修改图形的大小
            barWidth: '35%',
            // 图形样式
            itemStyle: {
                // 修改柱子的圆角
                barBorderRadius: 4
            }
        }]
    };
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
})();


// 柱形图模块2
// 立即执行函数
(function () {
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.bar2 .chart'));
    // 2. 指定配置项和数据
    option = {
        // grid 修改图形大小
        grid: {
            left: '18%',
            right: '22%',
            bottom: '10%',
            // containLabel: true
        },
        // 不显示x轴的信息
        xAxis: {
            show: false
        },
        yAxis: [{
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 修改刻度标签颜色
                axisLabel: {
                    color: '#fff'
                },
                type: 'category',
                // 是否是反向坐标轴
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            },
            {
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 修改刻度标签颜色
                axisLabel: {
                    color: '#fff'
                },
                type: 'category',
                // 是否是反向坐标轴
                inverse: true,
                data: ['702', '350', '610', '793', '664']
            }
        ],
        series: [{
                name: '条',
                type: 'bar',
                // 给series  第一个对象里面的 添加 
                yAxisIndex: 0,
                data: [70, 34, 60, 78, 69],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 14,
                // 柱子设为圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        // console.log(params);
                        return myColor[params.dataIndex]
                    }
                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        // {c} 会自动解析为 数据 data里面的数据
                        formatter: "{c}%"
                    }
                },
            },
            {
                name: '框',
                type: 'bar',
                // 给series  第一个对象里面的 添加 
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                barCategoryGap: 50,
                barWidth: 16,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
            }
        ]
    };
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
})();


// 折线图模块3
// 立即执行函数
(function () {
    var yearData = [{
            year: '2020', // 年份
            data: [ // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021', // 年份
            data: [ // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.line .chart'));
    // 2. 指定配置项和数据
    option = {
        // 通过color 修改两条线的颜色
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // series里面有了 name值则 legend里面的data可以删掉
            // 修改图例组件 文本颜色、
            textStyle: {
                color: "#4c9bfd", // 图例文字颜色
            },
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            },
            boundaryGap: false // 去除轴内间距
        },
        series: [{
                name: '新增粉丝',
                type: 'line',
                data: yearData[0].data[0],
                smooth: true, // 平滑显示
            },
            {
                name: '新增游客',
                type: 'line',
                data: yearData[0].data[1],
                smooth: true, // 平滑显示
            },
        ]
    };
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
    // 5. 点击切换效果
    $(".line h2").on("click", "a", function () {
        // alert(1111)
        // console.log($(this).index());
        // 点击a后，根据当前的索引号 找到对应的yearData的相关对象
        // console.log(yearData[$(this).index()]);
        let obj = yearData[$(this).index()]
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
        // 需要重新渲染
        MyChar.setOption(option);
    })
})();


// 折线图模块4
// 立即执行函数
(function () {
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.line2 .chart'));
    // 2. 指定配置项和数据
    option = {
        tooltip: {
            trigger: 'axis',
        },
        // 更换图例组件文字颜色
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        // 修改图表大小
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: '播放量',
                type: 'line',
                data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
                //第一条 线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            },
            {
                name: "转发量",
                type: "line",
                data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            },
        ]
    };
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
})();

// 饼形图模块5
// 立即执行函数
(function(){
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.pie .chart'));
    // 2. 指定配置
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,// 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                // radius 可以修改饼形图的大小
                // radius 第一个是内圆的半径
                // radius 第二个是外圆的半径
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                // 不显示标签文字
                label: {
                    show: false,
                    position: 'center'
                },
                // 不显示连接线
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],
            }
        ]
    }
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
})();

// 饼形图模块6
// 立即执行函数
(function(){
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.pie2 .chart'));
    // 2. 指定配置
    let option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom:"0%",
            itemWidth:10,
            itemHeight:10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                // radius 修改饼形图大小
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                // 图形文字标签
                label:{
                    fontSize:10,
                },
                // 修改链接我们图形和文字的线条
                labelLine:{
                    // length 链接图形的线条
                    length:6,
                    // length2 链接文字的线条
                    length2:8,
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    }
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
})();


// 地图线条模块
// 立即执行函数
(function(){
    // 1. 实例化对象
    let MyChar = echarts.init(document.querySelector('.map .chart'));
    // 2. 指定配置
    var chinaGeoCoordMap = {
		'黑龙江': [127.9688, 45.368],
		'内蒙古': [110.3467, 41.4899],
		"吉林": [125.8154, 44.2584],
		'北京市': [116.4551, 40.2539],
		"辽宁": [123.1238, 42.1216],
		"河北": [114.4995, 38.1006],
		"天津": [117.4219, 39.4189],
		"山西": [112.3352, 37.9413],
		"陕西": [109.1162, 34.2004],
		"甘肃": [103.5901, 36.3043],
		"宁夏": [106.3586, 38.1775],
		"青海": [101.4038, 36.8207],
		"新疆": [87.9236, 43.5883],
		"西藏": [91.11, 29.97],
		"四川": [103.9526, 30.7617],
		"重庆": [108.384366, 30.439702],
		"山东": [117.1582, 36.8701],
		"河南": [113.4668, 34.6234],
		"江苏": [118.8062, 31.9208],
		"安徽": [117.29, 32.0581],
		"湖北": [114.3896, 30.6628],
		"浙江": [119.5313, 29.8773],
		"福建": [119.4543, 25.9222],
		"江西": [116.0046, 28.6633],
		"湖南": [113.0823, 28.2568],
		"贵州": [106.6992, 26.7682],
		"云南": [102.9199, 25.4663],
		"广东": [113.12244, 23.009505],
		"广西": [108.479, 23.1152],
		"海南": [110.3893, 19.8516],
		'上海': [121.4648, 31.2891]
	};
	var chinaDatas = [
		[{
			name: '黑龙江',
			value: 0
		}],	[{
			name: '内蒙古',
			value: 0
		}],	[{
			name: '吉林',
			value: 0
		}],	[{
			name: '辽宁',
			value: 0
		}],	[{
			name: '河北',
			value: 0
		}],	[{
			name: '天津',
			value: 0
		}],	[{
			name: '山西',
			value: 0
		}],	[{
			name: '陕西',
			value: 0
		}],	[{
			name: '甘肃',
			value: 0
		}],	[{
			name: '宁夏',
			value: 0
		}],	[{
			name: '青海',
			value: 0
		}],	[{
			name: '新疆',
			value: 0
		}],[{
			name: '西藏',
			value: 0
		}],	[{
			name: '四川',
			value: 0
		}],	[{
			name: '重庆',
			value: 0
		}],	[{
			name: '山东',
			value: 0
		}],	[{
			name: '河南',
			value: 0
		}],	[{
			name: '江苏',
			value: 0
		}],	[{
			name: '安徽',
			value: 0
		}],	[{	
		    name: '湖北',
			value: 0
		}],	[{
			name: '浙江',
			value: 0
		}],	[{
			name: '福建',
			value: 0
		}],	[{
			name: '江西',
			value: 0
		}],	[{
			name: '湖南',
			value: 0
		}],	[{
			name: '贵州',
			value: 0
		}],[{
			name: '广西',
			value: 0
		}],	[{
			name: '海南',
			value: 0
		}],	[{
			name: '上海',
			value: 1
		}]
	];

	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = chinaGeoCoordMap[dataItem[0].name];
			var toCoord = [116.0046, 28.6633];
			if(fromCoord && toCoord) {
				res.push([{
					coord: fromCoord,
					value: dataItem[0].value
				}, {
					coord: toCoord,
				}]);
			}
		}
		return res;
	};
	var series = [];
	[['江西', chinaDatas]].forEach(function(item, i) {
	    console.log(item)
		series.push({
				type: 'lines',
				zlevel: 2,
				effect: {
					show: true,
					period: 4, //箭头指向速度，值越小速度越快
					trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
					symbol: 'arrow', //箭头图标
					symbolSize: 5, //图标大小
				},
				lineStyle: {
					normal: {
						width: 1, //尾迹线条宽度
						opacity: 1, //尾迹线条透明度
						curveness: .3 //尾迹线条曲直度
					}
				},
				data: convertData(item[1])
			}, {
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: { //涟漪特效
					period: 4, //动画时间，值越小速度越快
					brushType: 'stroke', //波纹绘制方式 stroke, fill
					scale: 4 //波纹圆环最大限制，值越大波纹越大
				},
				label: {
					normal: {
						show: true,
						position: 'right', //显示位置
						offset: [5, 0], //偏移设置
						formatter: function(params){//圆环显示文字
							return params.data.name;
						},
						fontSize: 13
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'circle',
				symbolSize: function(val) {
					return 5+ val[2] * 5; //圆环大小
				},
				itemStyle: {
					normal: {
						show: false,
						color: '#f00'
					}
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[0].name,
						value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
					};
				}),
			},
			//被攻击点
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period: 4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						//offset:[5, 0],
						color: '#0f0',
						formatter: '{b}',
						textStyle: {
							color: "#0f0"
						}
					},
					emphasis: {
						show: true,
						color: "#f60"
					}
				},
				symbol: 'pin',
				symbolSize: 50,
				data: [{
					name: item[0],
					value: chinaGeoCoordMap[item[0]].concat([10]),
				}],
			}
		);
	});

	option = {
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(166, 200, 76, 0.82)',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			formatter: function(params, ticket, callback) {
				//根据业务自己拓展要显示的内容
				var res = "";
				var name = params.name;
				var value = params.value[params.seriesIndex + 1];
				res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
				return res;
			}
		},
		// backgroundColor:"#013954",
		visualMap: { //图例值控制
			min: 0,
			max: 1,
			calculable: true,
			show: false,
			color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
			textStyle: {
				color: '#fff'
			}
		},
		geo: {
			map: 'china',
			zoom: 1.2,
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true, //是否允许缩放
			itemStyle: {
				normal: {
                    // areaColor:'#142957',
					color: 'rgba(51, 69, 89, .4)', //地图背景色
					borderColor: '#516a89', //省市边界线00fcff 516a89
					borderWidth: 1
				},
				emphasis: {
					color: 'rgba(37, 43, 61, .5)' //悬浮背景
				}
			}
		},
		series: series
	};
    // 3. 把配置项给我们的实例对象
    MyChar.setOption(option);
    // 4. 让我们的图表跟随屏幕自动去适配
    window.addEventListener('resize', function () {
        MyChar.resize();
    })
})();