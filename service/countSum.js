var count = {

    accMul: function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    },

    countOrderSum: function (orders) {
        var result = {
            pieceSum: 0,
            priceSum: 0,
            numberSum: 0,
        }
        for (var i = 0; i < orders.length; i++) {
            var order = orders[i];
            result.pieceSum += order.piece
            result.priceSum += order.price
            result.numberSum += order.number
        }

        return result;
    },
    countWorkOrderOutSourceInfoSum: function (orders) {
        var that = this;
        var result = {
            sum: 0,
        }
        for (var i = 0; i < orders.length; i++) {
            try {
                var order = orders[i];
                var number = parseFloat(order.number)
                var price = parseFloat(order.price)
                // order.wages = number * price
                order.wages = that.accMul(number, price)
                result.sum += order.wages
            } catch (e) {
                console.log(e);
            }
        }
        return result;
    }
}
module.exports = count