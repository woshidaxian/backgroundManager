$(function(){
    window.operateEvents = {
        // 删除按钮
        'click .btn-danger':function(e,value,row,index){
            ids = [];
            $('.mask').fadeIn();
            $('.popup').animateCss('bounceIn');
            ids.push(row.id);
        },
        // 编辑按钮
        'click .btn-info':function(e,value,row,index){
            // var newPassword = prompt("请输入新的密码","");
            // $.ajax({
            //     url:'',
            //     type:'post',
            //     data:{"password":newPassword},
            //     success:function(code){
            //         if(code==1){
            //             alert('修改成功');
            //         }else{
            //             alert('修改失败');
            //         }
            //     },
            //     error:function(){
            //         alert('请求出错，请稍后再试');
            //     }
            // });
        },
    }
    // 表格
    $('#table').bootstrapTable({
        url:'../json/administrator.json',
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
            valign : 'middle'
        },{
            field:'account',
            title:'账号',
            align:'center',
            valign : 'middle'
        },{
            field:'realName',
            title:'真实姓名',
            align:'center',
            valign : 'middle'
        },{
            field:'ablity',
            title:'权限',
            align:'center',
            valign:'middle'
        },{
            field:'email',
            title:'邮箱',
            width:'240',
            align:'center',
            valign : 'middle'
        },{
            field:'operate',
            title:'操作',
            align:'center',
            valign : 'middle',
            events:operateEvents,
            formatter:operateFormatter
        }]
    })
    function operateFormatter(value, row, index) {
        return [
            '<button class="btn btn-danger">删除</button>',
            '<button class="btn btn-info">编辑</button>',
        ].join('');
    };
})