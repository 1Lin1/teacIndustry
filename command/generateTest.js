var fs = require('fs')
var Excel = require("exceljs");


// read from a file
var filePath = './events.xlsx'
var workbook = new Excel.Workbook();
workbook.xlsx.readFile(filePath)
    .then(function () {
        // use workbook
        var worksheet = workbook.worksheets[0];

        var service = {}
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
                };


                var id = row.values[3];
                configs[id] = item;

                if (id && (item.type != 'ejs')) {
                    service[id] = function (params) {
                        var deferred = Q.defer();
                        var that = this;
                        var params = {}
                        service['$rqid$'](params);
                        deferred.resolve(params);
                        return deferred.promise;
                    }
                }


            }
        });

        // var resultString = JSON.stringify(transformObjectToString(service), undefined, 2);
        var resultString = transformObjectToString(service, configs);
        resultString = resultString;
        resultString = 'var test = ' + resultString + '\n' + 'module.exports = test;';
        resultString = 'var service = require(\'../service/service\');' + '\n' + resultString


        fs.writeFile(
            "./service" + new Date().getTime() + '.js', resultString,
            {
                encoding: 'utf8'
            },
            function (err) {
                // //console.log(err);
            });

    });

//将 对象 转换成字符串
var transformObjectToString = function (object, configs) {

    var result = '{\n'
    for (x in object) {


        var desHead = " /**\n";

        var desBody = "     * " + configs[x].name + " \n"
        desBody = desBody + "     * Author：" + " \n"
        desBody = desBody + "     * 必传参数：" + configs[x].requiredParams.toString() + " \n"
        desBody = desBody + "     * 可选参数：" + configs[x].optionalParams.toString() + " \n"
        var desFooter = "     */\n"

        var des = desHead + desBody + desFooter

        result = result + des
        result = result + '"' + x + '"' + ':' + object[x] + ',\n'
    }
    result = result + '}';

    result = result.replace(",}", "}")


    console.log(result);

    return result;
}