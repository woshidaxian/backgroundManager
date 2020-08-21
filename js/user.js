$(function(){
    // 单击操作
    // 确定按钮
    var ids = [];
    $('.btn-sure').click(function(){
        $('.popup').animateCss('bounceOut',function(){
            $('.mask').css({
                display:'none'
            })
        });
        $("#table").bootstrapTable('remove', {field: 'id', values:ids});
    })
    // 取消按钮
    $('.btn-cancel').click(function(){
        $('.popup').animateCss('bounceOut',function(){
            $('.mask').css({
                display:'none'
            })
        });
    })
    $('.closepopup').click(function(){
        $('.popup').animateCss('bounceOut',function(){
            $('.mask').css({
                display:'none'
            })
        });
    })
    window.operateEvents = {
        // 删除按钮
        'click .btn-danger':function(e,value,row,index){
            ids = [];
            $('.mask').fadeIn();
            $('.popup').animateCss('bounceIn');
            ids.push(row.id);
        },
        // 改密按钮
        'click .btn-info':function(e,value,row,index){
            var newPassword = prompt("请输入新的密码","");
            $.ajax({
                url:'',
                type:'post',
                data:{"password":newPassword},
                success:function(code){
                    if(code==1){
                        alert('修改成功');
                    }else{
                        alert('修改失败');
                    }
                },
                error:function(){
                    alert('请求出错，请稍后再试');
                }
            });
        },
        // 禁用按钮
        'click .btn-warning':function(e,value,row,index){
            var aa = {"status":'禁用'};
            if(row.status == '正常'){
                $.ajax({
                    url:'',
                    type:'post',
                    data:{"status":"禁用"},
                    success:function(){
                        $('#table').bootstrapTable('updateRow',{index:index,row:aa});
                        alert('已禁用');
                    },
                    error:function(){
                        alert('请求失败，稍后再试');
                    }
                })
            }else{
                alert('无需二次禁用');
            }
        },
        // 解禁按钮
        'click .btn-success':function(e,value,row,index){
            var bb = {"status":'正常'};
            if(row.status == '禁用'){
                $.ajax({
                    url:'',
                    type:'post',
                    data:{"status":"正常"},
                    success:function(){
                        $('#table').bootstrapTable('updateRow',{index:index,row:bb});
                        alert('已解禁');
                    },
                    error:function(){
                        alert('请求失败，稍后再试');
                    }
                })
            }else{
                alert('本次请求无效')
            }
        }
    }
    // 表格
    $('#table').bootstrapTable({
        url:'../json/user.json',
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
            title:'昵称',
            align:'center',
            valign : 'middle'
        },{
            field:'realName',
            title:'真实姓名',
            align:'center',
            valign : 'middle'
        },{
            field:'sex',
            title:'性别',
            align:'center',
            valign : 'middle'
        },{
            field:'time',
            title:'注册时间',
            align:'center',
            valign : 'middle'
        },{
            field:'phone',
            title:'联系方式',
            align:'center',
            valign : 'middle'
        },{
            field:'email',
            title:'邮箱',
            width:'240',
            align:'center',
            valign : 'middle'
        },{
            field:'status',
            title:'状态',
            align:'center',
            valign : 'middle',
            cellStyle:operateColor
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
            '<button class="btn btn-info">改密</button>',
            '<button class="btn btn-warning">禁用</button>',
            '<button class="btn btn-success">解禁</button>',
        ].join('');
    };
    // 状态样式，禁用为红，正常为黑
    function operateColor(value,row,index){
        if(row.status=='禁用'){
            return {css:{"color":"red"}}
        }else if(row.status=='正常'){
            return {css:{"color":"black"}}
        }
    }
})