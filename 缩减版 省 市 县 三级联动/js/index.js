var provinceCtrl = document.querySelector('#province');
var cityCtrl     = document.querySelector('#city');
var countyCtrl   = document.querySelector('#county');

var provinceArr = [{id:'0',name:'请选择'},
                   {id:'1',name:'安徽省'},
                   {id:'2',name:'福建省'},
                   {id:'3',name:'甘肃省'}];

var cityArr     = [{id:"1-1",name:"安庆",fid:"1"},
                   {id:"1-2",name:"淮南",fid:"1"},
                   {id:"1-3",name:"巢湖",fid:"1"},

                   {id:"2-1",name:"龙岩",fid:"2"},
                   {id:"2-2",name:"南平",fid:"2"},
                   {id:"2-3",name:"宁德",fid:"2"},

                   {id:"3-1",name:"白银",fid:"3"},
                   {id:"3-2",name:"定西",fid:"3"},
                   {id:"3-3",name:"兰州",fid:"3"}];

var countyArr    =[{id:"1-1-1",name:"迎江区",fid:"1-1"},
                   {id:"1-1-2",name:"望江县",fid:"1-1"},
                   {id:"1-2-1",name:"凤台县",fid:"1-2"},
                   {id:"1-2-2",name:"潘集区",fid:"1-2"},
                   {id:"1-3-1",name:"居巢区",fid:"1-3"},
                   {id:"1-3-2",name:"庐江县",fid:"1-3"},

                   {id:"2-1-1",name:"新罗区",fid:"2-1"},
                   {id:"2-1-2",name:"永定县",fid:"2-1"},
                   {id:"2-2-1",name:"延平区",fid:"2-2"},
                   {id:"2-2-2",name:"顺沧县",fid:"2-2"},
                   {id:"2-3-1",name:"寿宁县",fid:"2-3"},
                   {id:"2-3-2",name:"周宁县",fid:"2-3"},

                   {id:"3-1-1",name:"白银区",fid:"3-1"},
                   {id:"3-1-2",name:"平川区",fid:"3-1"},
                   {id:"3-2-1",name:"安定区",fid:"3-2"},
                   {id:"3-2-2",name:"陇西县",fid:"3-2"},
                   {id:"3-3-1",name:"安宁区",fid:"3-3"},
                   {id:"3-3-2",name:"红古区",fid:"3-3"}];



initCtrlProvince();
function initCtrlProvince(){
 var strHtml = '';
 provinceArr.forEach(function(item){
   strHtml+='<option value="' + item.id +'">' + item.name +'</option>';
 })
  provinceCtrl.innerHTML = strHtml;
}

function initCtrlCity(data){

    var strHtml = '';
    data.forEach(function(item){
      strHtml += '<option value="'+item.id+'">'
      +item.name
      +'</option>';
    })

cityCtrl.innerHTML = strHtml;
}

function initCtrlCounty(data){
    var strHtml = '';
    data.forEach(function(item){
      strHtml += '<option value="'+item.id+'">'
      +item.name
      +'</option>';
    })

countyCtrl.innerHTML = strHtml;
}

function provinceChange(){
   var result = cityArr.filter(function(item){
     if(item.fid == provinceCtrl.value){
       return item;
     }
   })
initCtrlCity(result);
cityChange()
}

function cityChange(){
  var result =  countyArr.filter(function(item){
    if(item.fid == cityCtrl.value){
      return item;
    }
  })
  initCtrlCounty(result);
}
