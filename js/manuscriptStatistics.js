$(function(){
    var ids = [];
    window.operateEvents = {
        // 删除按钮
        'click .btn-danger':function(e,value,row,index){
            ids = [];
            $('.mask').fadeIn();
            $('.popup').animateCss('bounceIn');
            ids.push(row.id);
        },
        // 查看按钮
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
        // 下架按钮
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
        // 上架按钮
        'click .btn-default':function(e,value,row,index){
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
        },
        //推荐按钮
        'click .btn-success':function(){

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
            field:'writer',
            title:'作者',
            align:'center',
            valign : 'middle'
        },{
            field:'time',
            title:'发表时间',
            align:'center',
            valign : 'middle'
        },{
            field:'title',
            title:'标题',
            align:'center',
            valign : 'middle'
        },{
            field:'see',
            title:'阅读量',
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
            '<button class="btn btn-info">查看</button>',
            '<button class="btn btn-warning">下架</button>',
            '<button class="btn btn-default">上架</button>',
            '<button class="btn btn-success">推荐</button>'
        ].join('');
    };
    // 状态样式，禁用为红，正常为黑
    function operateColor(value,row,index){
        if(row.status=='已推荐'){
            return {css:{"color":"green"}}
        }else if(row.status=='正常'){
            return {css:{"color":"black"}}
        }else if(row.status=='已下架'){
            return {css:{"color":"red"}}
        }
    }
})