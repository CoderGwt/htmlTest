{
    $pic = $(".banner .pic li");
    $radio = $(".banner .radio li")
    $trangle = $(".banner .trangles li")
    first = 0;
    len = $pic.length
    console.log($trangle)
    $pic.eq(0).show()
    $radio.eq(0).addClass("active")


    // 点击小圆点的时候，切换图片和圆点的颜色
    $radio.click(function(){
        // 获取当前点击的圆点的索引
        console.log($(this).index());
        index = $(this).index();

        // 切记是：先取消，在添加
        // 取消之前那一个的active
        if(first != index){
            $radio.eq(first).removeClass("active")
            $pic.eq(first).fadeOut(2000)
            first = index;
    
            // 点击哪一个，就给当前这一个添加上active的class属性值
            $radio.eq(first).addClass("active")
            $pic.eq(first).fadeIn(2000)
        }
       


    })

    $trangle.click(function(){
        index = $(this).index()
        console.log(index)
    })
}