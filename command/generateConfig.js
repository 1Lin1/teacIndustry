var fs = require('fs')
var Excel = require("exceljs");


// read from a file
var filePath = './events.xlsx'
var workbook = new Excel.Workbook();
workbook.xlsx.readFile(filePath)
    .then(function () {
        // use workbook
        var worksheet = workbook.worksheets[0];

        var configs = {}
        worksheet.eachRow(function (row, rowNumber) {
            if (rowNumber > 1) {
                console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
                var item = {
                    id: row.values[3],
                    name: row.values[2],
                    path: row.values[4],
                    type: row.values[5],
                    requiredParams: row.values[6] ? row.values[6] : "",
                    optionalParams: row.values[7] ? row.values[7] : "",
                    use_log: row.values[8] ? row.values[8] : false,
                    events: row.values[11] ? row.values[11].split(',') : [],
                    init_event: row.values[12] ? row.values[12].split(',') : [],
                }

                item.requiredParams = changeToObject(item.requiredParams)
                item.optionalParams = changeToObject(item.optionalParams)

                configs[row.values[3]] = item;
            }
        });

        var resultString = JSON.stringify(configs, undefined, 2);
        resultString = 'var configs = ' + resultString + '\n' + 'module.exports = configs;';

        fs.writeFile(
            "./config" + '-' + new Date().getTime() + '.js', resultString,
            {
                encoding: 'utf8'
            },
            function (err) {
                // //console.log(err);
            });

    });

var changeToObject = function (list) {

    if (list) {
        var result = {}
        list = list.split(',');
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            result[item] = '';
        }
        return result
    } else {
        return '';
    }

}

