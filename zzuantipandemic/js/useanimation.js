var myIndexScroll = function(element,className){

    var mainEvent =function(){
            element.css('opacity','0')
            //页面卷曲高度
            var scrollHeight = $(window).scrollTop();

            //顶部距文章顶部高度
            var elementTopToTop = element.offset().top
            //显示器高度
            var screenH = $(window).height()
            //当元素从上往下出现在屏幕中
        if(elementTopToTop  - scrollHeight >=  0 && elementTopToTop - scrollHeight  <= screenH )
            {
				setTimeout(1000);
                element.addClass('animated '+className).css('opacity','1');
            }
        }
// 开始先执行一次;

    $(window).scroll(function(){

      mainEvent();

    })

}