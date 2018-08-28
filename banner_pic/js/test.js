{
    var $pic = $(".banner .pic li");
    var $radio = $(".banner .radio li")
    var $trangle = $(".banner .trangles li")
    var first = 0;  // 保存额
    var len = $pic.length  // 
    // console.log($trangle)
    
    // 页面初始化。显示第一张图片并且给第一个圆点增加上一个active的class属性值 
    $pic.eq(0).show()
    $radio.eq(0).addClass("active")

    // 点击小圆点的时候，切换图片和圆点的颜色
    $radio.click(function(){
        // 获取当前点击的圆点的索引
        console.log($(this).index());
        var index = $(this).index();

        // 切记是：先取消，在添加
        // 取消之前那一个的active
        if(first != index){
            // $radio.eq(first).removeClass("active")
            // $pic.eq(first).fadeOut(2000)
            // first = index;
    
            // // 点击哪一个，就给当前这一个添加上active的class属性值
            // $radio.eq(first).addClass("active")
            // $pic.eq(first).fadeIn(2000)
            sameCode(index);
        }

    })

    // 点击左右箭头事件--切换图片
    $trangle.click(function(){
        // 一点击（无论哪一个）都应当获取当前圆点的位置
        var index = first;

        // 如果点击的是右箭头，当前位置的索引+1，
        if($(this).index()){
            index ++;
            index %= len;  // 可用if判断，也可以用这种方法获取值。好用
        }else{
            index --;
            if(index < 0){
                // 当在第一张的时候，再点击就返回到最后一张，这一张的位置是len-1
                index = len - 1;  
            }
        }

        sameCode(index)
    })

    // 实现自动轮播,其实就是自动执行右箭头的点击时间
    autoPlay()
    // 当鼠标放上去的时候，取消自动轮播
    $(".banner").hover(function(){
        clearInterval(timer)
    }, autoPlay)

    function autoPlay(){
        timer = setInterval(function(){
            var index = first;
            index ++;
            index %= len;

            sameCode(index);

        }, 3000)
    }

    // 把图片和圆点切换的重复代码写在该函数里。需要的时候，调用一下就可以了。
    // i 值表示当前的位置
    function sameCode(i){
            $pic.eq(first).fadeOut(2000)
            $radio.eq(first).removeClass("active")

            first = i;

            $pic.eq(first).fadeIn(2000)
            $radio.eq(first).addClass("active")
    }
}