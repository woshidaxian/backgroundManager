$(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('chart1'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '过去七天浏览量',
            textStyle:{
                color:'#fff',
                fontSize:'20'
            },
            top:[10],
            left:[20]
        },
        tooltip: {},
        legend: {
            data:['浏览量']
        },
        xAxis: {
            data: ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],
            data:[{
                value:'星期一',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            },
            {
                value:'星期二',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            },
            {
                value:'星期三',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            },
            {
                value:'星期四',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            },
            {
                value:'星期五',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            },
            {
                value:'星期六',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            },
            {
                value:'星期日',
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                    padding:[10,10,10,10]
                },
            }]
        },
        yAxis: {},
        series: [{
            name: '浏览量',
            type: 'line',
            data: [50, 20, 36, 100, 160, 200,120],
            itemStyle:{
                borderWidth: 15,
                borderColor:'#fff',
                color:'#00FFFF'
            },
            lineStyle:{
                color:'#fff'
            },
            areaStyle:{
                color:'#8ee6d5'
            },
        }],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
    var myChart2 = echarts.init(document.getElementById('chart2'))
    var option1 = {
        title : {
            text: '服务器可用空间',
            subtext:'单位GB',
            x:'right'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            // orient: 'vertical',
            bottom:0,
            left: 'center',
            data: ['已使用','剩余']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:'33', name:'已使用'},
                    {value:'31', name:'剩余'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart2.setOption(option1);
    var myChart3 = echarts.init(document.getElementById('newUser'));

        // 指定图表的配置项和数据
        var option2 = {
            title: {
                text: '过去七天注册人数',
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: [1,2,3,4,5,6,7,8,9,10,11,12]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20,30,20,24,32,12,15]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option2);
    window.addEventListener("resize", function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    });
    function count(obj,sec){
        var count = parseInt($(obj).text());
        var a = 0;
        var timer = setInterval(function(){
            if(a<=count){
                $(obj).text(a);
                a=a+2;
            }else{
                clearInterval(timer);
            }
        },sec);
    }
    var tap1 = new count('.num-newUser',1);
    var tap2 = new count('.num-totalUser',1);
    var tap3 = new count('.num-lastMonthUser',1);
    var tap4 = new count('.num-visitor',1);
    var tap5 = new count('.num-totalVisit',1);
    var tap6 = new count('.num-lastMonthVisit',1);
    var tap7 = new count('.num-auditor',1);
})