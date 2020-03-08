//使用rxjs来同步多模型保存数据
var sequelize = require('../repository/mysql/mysql');
var Rx = require('./rx')
var Q = require("q");
var model = require('../repository/mysql/model');

var service = {
    getDeliveredInfo: function (factoryId, orders) {
        var deferred = Q.defer();
        var that = this;
        Rx.Observable.create(function (observer) {
            for (var i = 0; i < orders.length; i++) { //录入产品
                var exe = function (i) {

                    var order = orders[i]

                    model.EndProductOrder.findAll(
                        {
                            where: {sn: order.orderNo},
                            include: [{
                                model: model.EndProductInOut,
                                where: {
                                    type: 'out' //只查找出库记录
                                }
                            }],
                        }
                    )
                        .then(function (result) {
                            var productObject = {}
                            var products = order.order_products
                            for (var j = 0; j < products.length; j++) { //迭代，得到每个需要计算的productId
                                var product = products[j];
                                productObject[product.productId] = {id: product.productId, total: 0, deliveredArray: []}
                            }
                            var records = []
                            var orderSum = 0
                            for (var j = 0; j < result.length; j++) { //将出库单里的产品都归集成为数组
                                var resultElement = result[j];
                                var inOuts = resultElement.end_product_in_outs
                                if (inOuts) {
                                    records = records.concat(inOuts)
                                }
                            }
                            for (var j = 0; j < records.length; j++) {
                                var record1 = records[j];
                                orderSum += record1.sum;
                            }

                            for (var x in productObject) {
                                for (var j = 0; j < records.length; j++) { //将出库单里的产品都根据productId归集
                                    var record = records[j];
                                    if (record.productId == x) {
                                        productObject[x].total += record.number
                                        productObject[x].deliveredArray.push(record);
                                    }
                                }
                            }
                            for (var j = 0; j < products.length; j++) { //得到每个产品的交付情况
                                var p = products[j];
                                p.deliveredInfo = productObject[p.productId]
                                p.deliveried = productObject[p.productId].total
                            }

                            order.delivered = Math.abs(orderSum); //已交付金额
                            if(order.delivered){
                                order.account_receivale = Math.abs(order.delivered) - Math.abs(order.accepted) - Math.abs(order.discount); //应收 = 已交付 - 已收 - 优惠

                            }else{
                                order.account_receivale = 0
                            }
                            console.log('order.account_receivale',order.account_receivale);

                            observer.next()
                            console.log(JSON.stringify(order));
                        })
                }
                exe(i)
            }
        })
            .bufferCount(orders.length)
            .subscribe(function (result) {
                console.log(result);
                deferred.resolve(orders);
            });

        if (!orders || orders.length == 0) { //防止没有orders导致中断
            deferred.resolve(orders);
        }
        return deferred.promise;
    },


}
module.exports = service