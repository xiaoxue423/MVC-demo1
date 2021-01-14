import $ from 'jquery'
import './app3.css'
const $square =  $('#app3 .square')
$square.on('click',()=>{
    // $square.addClass('active')
    //如果没有就加上这个class
    $square.toggleClass('active')
})