

var data = [{
    title: "红米Note 4",
    description: 'Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量',
    proce: '899元 起',

},
{
    title: "红米Note 5",
    description: 'Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量',
    proce: '899元 起',

},
{
    title: "红米Note 6",
    description: 'Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量',
    proce: '899元 起',

},
{
    title: "红米Note 7",
    description: 'Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量',
    proce: '899元 起',

}];


var list = document.querySelector('.list');
var txt = document.querySelector('.search');
txt.onkeyup = function(){
    var result = data.filter(function(item) {
        if (item.title.toLowerCase().indexOf(txt.value.toLowerCase())>-1 ||
            item.description.toLowerCase().indexOf(txt.value.toLowerCase())>-1
        ){
          return item;
        }
    });
    initCtrl(result);
}



function initCtrl(data) {

  var strHtml = '';
  data.forEach(function(item) {
      strHtml += `<div class="plist">
      <div class="p-item">
                  <div class="p-item-img">
                      <img src="images/p.jpg" alt="">
                  </div>
                  <div class="p-item-info">
                      <div class="p-info-title">
                        ${item.title}
                      </div>
                      <div class="p-info-desc">
                          ${item.description}
                      </div>
                      <div class="p-info-price">
                        ${item.price}
                      </div>
                  </div>
              </div>
          </div>`;
  });
  list.innerHTML = strHtml;

}
initCtrl(data);
