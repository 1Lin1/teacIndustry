var service = require('../service/service');
var model = require('../repository/mysql/model');

model.Production_Process.findAll()
    .then(function (items) {
        for (var i = 0; i < items.length; i++) {
            var exe = function (i) {
                var item = items[i];
                var factoryUniqueId = item.factoryId + '-' + item.product_batch;
                console.log(factoryUniqueId);
                var data = {factoryUniqueId: factoryUniqueId}
                model.Production_Process.update(data, {
                    where: {id: item.id}
                })
            }
            exe(i);
        }
    })

model.Work_Order_OutSource_Info.findAll()
    .then(function (items) {
        for (var i = 0; i < items.length; i++) {
            var exe = function (i) {
                var item = items[i];
                var factoryUniqueId = item.factoryId + '-' + item.sn;
                console.log(factoryUniqueId);
                var data = {factoryUniqueId: factoryUniqueId}
                model.Work_Order_OutSource_Info.update(data, {
                    where: {id: item.id}
                })
            }
            exe(i);
        }
    })

model.Material_In_Order.findAll()
    .then(function (items) {
        for (var i = 0; i < items.length; i++) {
            var exe = function (i) {
                var item = items[i];
                var factoryUniqueId = item.factoryId + '-' + item.sn;
                console.log(factoryUniqueId);
                var data = {factoryUniqueId: factoryUniqueId}
                model.Material_In_Order.update(data, {
                    where: {id: item.id}
                })
            }
            exe(i);
        }
    })