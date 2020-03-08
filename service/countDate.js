var Sequelize = require('sequelize');
var Op = Sequelize.Op;

if(!Date.prototype.format) {
    Date.prototype.format = function(format) {
        var date = {
            'M+': this.getMonth() + 1,
            'd+': this.getDate(),
            'h+': this.getHours(),
            'm+': this.getMinutes(),
            's+': this.getSeconds(),
            'q+': Math.floor((this.getMonth() + 3) / 3),
            'S+': this.getMilliseconds()
        };
        if(/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for(var k in date) {
            if(new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
            }
        }
        return format;
    };
}

var count = {
    countDate: function (query, dateParams) {

        if (dateParams) {
            for (var x in dateParams) {
                if (dateParams[x].start || dateParams[x].end) {
                    query[x] = {}
                }
                if (dateParams[x].start) {
                    var coreectDate = new Date(dateParams[x].start).getTime() - (3600000 * 8) // 由于sequelize配置时时区+8 ， 解决东8区的时差问题
                    query[x][Op.gte] = new Date(coreectDate)
                }
                if (dateParams[x].end) {
                    var coreectDateEnd = new Date(dateParams[x].end).getTime() - (3600000 * 8) // 由于sequelize配置时时区+8 ， 解决东8区的时差问题
                    query[x][Op.lte] = new Date(coreectDateEnd)
                }
            }
        }
        return query;
    },
    countDateSql: function (query, dateParams) {

        if (dateParams) {
            for (var x in dateParams) {
                query[x] = {gt:'',lt:''}
                // if (dateParams[x].start || dateParams[x].end) {
                //     query[x] = {}
                // }
                //console.log(query[x]);
                if (dateParams[x].start) {
                    var coreectDate = (new Date(new Date(dateParams[x].start).getTime() - (3600000 * 8))).format("yyyy-MM-dd ") // 由于sequelize配置时时区+8 ， 解决东8区的时差问题
                    query[x]['gt'] = " and " + x + " >= '" + coreectDate + "'"
                } else {
                    query[x]['gt'] = ''
                }
                if (dateParams[x].end) {
                    var coreectDate = (new Date(new Date(dateParams[x].end).getTime() - (3600000 * 8))).format("yyyy-MM-dd ") // 由于sequelize配置时时区+8 ， 解决东8区的时差问题
                    query[x]['lt'] = " and " + x + " <= '" + coreectDate + "'"
                } else {
                    query[x]['lt'] = ''
                }
            }
        }
        //console.log('query:++++++',JSON.stringify(query));
        return query;
    }


}
module.exports = count