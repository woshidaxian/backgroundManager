$(function(){
    window.operateEvents = {
        // 删除按钮
        'click .btn-danger':function(e,value,row,index){
            ids = [];
            $('.mask').fadeIn();
            $('.popup').animateCss('bounceIn');
            ids.push(row.id);
        },
    }
    // 表格
    $('#table').bootstrapTable({
        url:'../json/webMessage.json',
        pagination:true,     //分页
        sidePagination:'client',    //客户端分页‘client’,后台分页‘server’
        pageNumber:1,    
        pageSize:10,    
        pageList:[10, 25, 50, 100,'ALL'],
        search:true,    //搜索框
        striped: true,      //条纹
        cache:false,        //禁用ajax缓存
        showRefresh: true,   //刷新表格
        showColumns: true,    
        showPaginationSwitch:true,
        columns:[{
            checkbox:true,
            align:'center',
            valign:'middle'
        },{
            field:'id',
            title:'ID',
            align:'center',
            width: 60,
            valign : 'middle'
        },{
            field:'account',
            title:'对方称呼',
            align:'center',
            width: 130,
            valign : 'middle'
        },{
            field:'chatWay',
            title:'联系方式',
            align:'center',
            width: 150,
            valign : 'middle'
        },{
            field:'mess',
            title:'留言内容',
            align:'center',
            valign : 'middle'
        },{
            field:'operate',
            title:'操作',
            align:'center',
            width: 120,
            valign : 'middle',
            events:operateEvents,
            formatter:operateFormatter
        }]
    })
    function operateFormatter(value, row, index) {
        return [
            '<button class="btn btn-danger">删除</button>'
        ].join('');
    };
    // 状态样式，禁用为红，正常为黑
})