 var link=document.getElementsByTagName("link")[0];
  function changeFace(){
    localStorage.setItem("href", link.href);
    link.href="change.css";
}
// $(".content").addClass( "active");  
// $(".content").removeClass("content");
/**
 * 文件扩展说明
 * 一.3个文件要如何完成
 * 二.还原到默认样式
 * 三.文件多时需不需要回原到上一个状态
 */

function getdefault(){ 
    localStorage.setItem("href", link.href);  
    link.href="default.css";
  
}

function changeFace1(){
     localStorage.setItem("href", link.href);
     link.href="change1.css";
    
}
function getlast(){
    var c=localStorage.getItem("href");
    link.href=c;

}