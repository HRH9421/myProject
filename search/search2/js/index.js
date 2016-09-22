
var txt = document.querySelector('#txt');
var list = document.querySelector('#list');

var data = [{
    name: '红米手机3S',
    image: 'http://i8.mifile.cn/v1/a1/517db742-917d-d2ef-5953-066c2c2f6625.jpg',
    info: '指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池',
    price: '699元 起'
}, {
    name: '红米Note4',
    image: 'http://i8.mifile.cn/v1/a1/65981365-72b0-d254-c4fb-e20225f10e4f.jpg',
    info: 'Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量',
    price: '899元 起'

} ,{
    name: '红米Pro',
    image: 'http://i8.mifile.cn/v1/a1/18234d8c-0026-9b84-d9df-fe483de6079e.jpg',
    info: '硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身',
    price: '1499元 起'
}, {
    name: '小米5 尊享版',
    image: 'http://i8.mifile.cn/v1/a1/dc39e456-a433-4b59-c329-36f3ce00c1f1.jpg',
    info: '骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身',
    price: '2499元 起'
}, {
    name: '红米Note3',
    image: 'http://i1.mifile.cn/v1/a1/T1VNJjBsdT1RXrhCrK.jpg',
    info: '【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏',
    price: '799元 起'
}];

function initCtrl(data) {
    var strHtml = '';
    data.forEach(function(item) {
        strHtml +="<div class='big'>"+"<img src="+item.image+'alt="">'+"<div>"+'<h2>'+item.name+'</h2>'
         +'<p  id="info">'+item.info+'</p>'+'<p>'+item.price+'</p>'+"</div>"+"</div>" + '<br>'
    });
    list.innerHTML = strHtml;


}
initCtrl(data);

txt.onkeyup = function(e){
  var str = txt.value
  var result = data.filter(function(item){
    if(item.name.toLowerCase().indexOf(str.toLowerCase())>-1){
      return item;
    }
  })
  initCtrl(result);
}
