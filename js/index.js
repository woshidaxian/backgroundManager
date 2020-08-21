$(function(){
    var city = ['杭州市','宁波市','温州市','绍兴市','湖州市','嘉兴市','金华市','衢州市','台州市','丽水市','舟山市'];
    $('.btn-up').click(function(){
        //var account = "gang";
        //var nowCity = "杭州市"
        var account = $('.inp-account').val();
        // var password = $('.inp-password').val();
        var nowCity = $('.nowCity').text();
        // $.ajax({
        //     url:"",
        //     type:"post",
        //     data:{"city":nowCity,"account":account,"password":password},
        //     success:function(code){
        //         if(code==1){
                        document.cookie = "isLogin_zx="+ account +"; path=/";
                        document.cookie = "nowCity_zx="+ nowCity +"; path=/";
                        self.location = 'html/home.html';
        //         }else if(code==0){
        //             alert('账号或密码错误！！！')
        //         }else if(code==-1){
        //             alert("该账号该城市未获得授权，请联系管理员");
        //         }
        //     },
        //     error:function(){
        //         alert("请求出错！请稍后再试")
        //     }
        // })
    });
    $('.city-div').click(function(){
        $('.haveCity-blank').slideDown();
    })
    $('.blank-li').click(function(){
        var indexOfCity = $(this).attr("index");
        $('.haveCity-blank').slideUp();
        $('.blank-li').removeClass('blank-li-active');
        $(this).addClass('blank-li-active')
        $('.nowCity').html(city[indexOfCity]);
    })
})