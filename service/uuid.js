var widget = {
    getUuid: function (query, dateParams) {
        var d = new Date().getTime();

        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        var addNum = function (s) {
            if (parseInt(s) < 10) {
                return '0' + s;
            } else {
                return s
            }
        }
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var date = new Date().getDate();
        var dateString = year.toString() + addNum(month).toString() + addNum(date).toString();
        // return dateString + '-' + uuid.replace('-', '');
        return uuid.replace('-', '');
    }

}
module.exports = widget