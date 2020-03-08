var perPage = 20 //每页的数量
var count = {
    count: function (result) {
        var total = result.count;

        var pages = parseInt(total / perPage) + 1
        result.pages = pages
        result.perPage = perPage

        return result;
    }
}
module.exports = count