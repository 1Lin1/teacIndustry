var config = require('../repository/mysql/model').getConfig()
var fs = require('fs')
var exec = require('child_process').exec;

var Rx = require('./rx')

var htmls = []

for (var key in config) {
    var model = config[key]
    var string = ''
    for (var x in model) {
        var id = x + parseInt(Math.random() * 10000)
        string += '<div class="input-group col-md-5" style="margin:10px 20px 10px 10px; float:left"> \n'
        string += '<span class="input-group-addon">' + model[x].string + '</span> \n'

        if (model[x].widget == "select") {
            string += '<select id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""></select> \n'
        } else {
            string += '<input id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""> \n'
        }
        string += '<span class="input-group-addon cursor" onclick="$(\'#' + id + '\').val(\'\')">x</span> \n'
        string += '</div> \n'
    }
    var html = {name: key, html: string}
    htmls.push(html);
}
console.log(htmls);


var dateString = new Date().getTime();
exec('mkdir -p  ./html/' + dateString, function () {
    for (var i = 0; i < htmls.length; i++) {
        var html = htmls[i];
        fs.writeFile(
            "./html/" + dateString + '/' + html.name + '.html', html.html,
            {
                encoding: 'utf8'
            },
            function (err) {
                // //console.log(err);
            });
    }
});






