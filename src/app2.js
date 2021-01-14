import './app2.css'
import $ from 'jquery'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

//监听父元素 事件委托
$tabBar.on('click','li',(e) => {
    // e.target()就是用户点击的元素
    // console.log(e.target)
    console.log(e.currentTarget);
    const $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    //一个jquery元素   加一个index()就可以获取排行老几
    const index = $li.index()
    console.log(index);
    // 永远不要用.show()   .hide()  .css()   那用什么？？？
    // $tabContent.children()
    //     .eq(index).css({display:'block'})
    //     .siblings().css({display:'none'})

    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

// 自动触发第一个孩子的点击事件
$tabBar.children().eq(0).trigger('click')