var container = document.getElementById('container');


function Stars(count) {

    this.count = count;
    this.showStars();

}


Stars.prototype.showStars = function() {
    this.images = [];
    var div = document.createElement('div');
    var that = this;
    for (var i = 0; i < this.count; i++) {
        var img = document.createElement('img')
        img.src = i == 0 ? 'images/star-red.png' : 'images/star-yellow.png';
        img.style.width = '60px';
        img.tag = i == 0 ? 'y' : 'n';
        img.index = i;

        img.onclick = function(e) {

            // this.src = this.tag == 'y' ? 'images/star-red.png' : 'images/star-yellow.png';
            // this.tag = this.tag == 'y' ? 'n' : 'y';
            var arrSelected = that.images.filter(function(item) {
                return item.tag == 'y';
            })
            if (this.index == 0) {
                if (this.tag == "y" && arrSelected.length == 1) {
                    for (k = 0; k < that.images.length; k++) {
                        that.images[k].src = 'images/star-yellow.png';
                        that.images[k].tag = 'n';
                    }
                    that.scoreTxt.innerText = '0分';
                    return;
                }
            }



            for (var k = 0; k < that.images.length; k++) {
                that.images[k].src = 'images/star-yellow.png';
                that.images[k].tag = 'n';
            }


            for (var k = 0; k <= this.index; k++) {

                that.images[k].src = 'images/star-red.png';
                that.images[k].tag = 'y';
            };
            that.scoreTxt.innerText = 2 * (Number(this.index) + 1) + '分';
        }



        this.images.push(img);
        div.appendChild(img);
        container.appendChild(div);
    }
    var spanScore = document.createElement('span');
    spanScore.innerText = '2分';
    spanScore.style.height = '60px';
    spanScore.style.fontSize = '40px';
    this.scoreTxt = spanScore;
    div.appendChild(spanScore);

}
new Stars(5);
