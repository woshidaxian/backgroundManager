$(function(){
    function getCookie(name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    };
    var account = getCookie("isLogin_zx");
    var city = getCookie("nowCity_zx");
    $('.info-account').text('欢迎！'+account);
    $('.word-yun').text('知乡');
    $('.web-img').text(city);
    // 刷新
    $('.reload').click(function(){
        window.location.reload();
    })
    // 退出登录
    $('.info-config').click(function(){
        self.location = '../index.html'
    })
    // 导航栏效果
    function reset(){
        $('.ul-two').slideUp();
        $('.triangle').removeClass("fa-angle-down");
        $('.triangle').addClass("fa-angle-left");
        $('.li-one').css({
            background:"#fbf9f5"
        })
    }
    $('#news').click(function(){
        reset();
        $('.ul-two').eq(0).slideDown();
        $('.li-one').eq(1).css({
            background:"#FFF"
        })
        $('.triangle').eq(0).removeClass("fa-angle-left");
        $('.triangle').eq(0).addClass("fa-angle-down");
    })
    $('#active').click(function(){
        reset();
        $('.ul-two').eq(1).slideDown();
        $('.li-one').eq(2).css({
            background:"#FFF"
        })
        $('.triangle').eq(1).removeClass("fa-angle-left");
        $('.triangle').eq(1).addClass("fa-angle-down");
    })
    $('#shiwu').click(function(){
        reset();
        $('.ul-two').eq(2).slideDown();
        $('.li-one').eq(3).css({
            background:"#FFF"
        })
        $('.triangle').eq(2).removeClass("fa-angle-left");
        $('.triangle').eq(2).addClass("fa-angle-down");
    })
    $('#xianzhi').click(function(){
        reset();
        $('.ul-two').eq(3).slideDown();
        $('.li-one').eq(4).css({
            background:"#FFF"
        })
        $('.triangle').eq(3).removeClass("fa-angle-left");
        $('.triangle').eq(3).addClass("fa-angle-down");
    })
    $('#xinxiang').click(function(){
        reset();
        $('.ul-two').eq(4).slideDown();
        $('.li-one').eq(6).css({
            background:"#FFF"
        })
        $('.triangle').eq(4).removeClass("fa-angle-left");
        $('.triangle').eq(4).addClass("fa-angle-down");
    })
    $('.li-one').mouseover(function(){
        $(this).css({
            background:"#fff"
        })
    })
    $('.li-one').mouseleave(function(){
        $(this).css({
            background:"#fbf9f5"
        })
    })
    // 导航栏链接效果
    $('#btn-statistics').click(function(){self.location = 'home.html'});//网站统计

    $('#btn-newsRelease').click(function(){self.location = 'communication.html'});//社区热门
    $('#btn-newsStatistics').click(function(){self.location = 'communityRecommend.html'});//社区推荐
    $('#btn-notice').click(function(){self.location = 'initiatingActivities.html'});//社区来稿
    
    $('#btn-alreadyOnline').click(function(){self.location = 'administrator.html'});//管理员管理
    $('#btn-toBeAudited').click(function(){self.location = 'newAdmin.html'});//添加新管理

    $('#btn-published').click(function(){self.location = 'manuscriptStatistics.html'});//文稿统计
    $('#btn-toBeAudited-lost').click(function(){self.location = 'newManuscript.html'});//新建文稿

    
    $('#btn-user').click(function(){self.location = 'user.html'});//用户管理
    $('#btn-mess').click(function(){self.location = 'webMessage.html'})//网站留言
    // if(!account){
    //     $('#center-box').html('请先登录');
    // }
})