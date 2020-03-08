//使用rxjs来同步多模型保存数据
var Rx = require('./rx')
var model = require('../repository/mysql/model');

var service = {

    handleProducts: function (factoryId, products) {
        var observable = Rx.Observable.create(function (observer) {

            for (var i = 0; i < products.length; i++) { //录入产品

                var exe = function (i) {
                    var product = products[i];
                    product.factoryId = factoryId;
                    if (product.id) {
                        model.Product.upsert(product)
                            .then(function (result) {
                                observer.next(result)
                            })
                    } else {
                        model.Product.create(product)
                            .then(function (result) {
                                product.id = result.id;
                                //console.log("product.id", product.id);
                                observer.next(result)
                            })
                    }
                }
                exe(i)

            }

        });
        return observable;
    },

    handleWorkProcedures: function (factoryId, working_Procedures) {
        var observable = Rx.Observable.create(function (observer) {
            for (var i = 0; i < working_Procedures.length; i++) { //录入工序

                var exe = function (i) {
                    var procedure = working_Procedures[i];
                    procedure.factoryId = factoryId;
                    if (procedure.id) {
                        model.Working_Procedure.upsert(procedure)
                            .then(function (result) {
                                observer.next(result)
                            })
                    } else {
                        model.Working_Procedure.create(procedure)
                            .then(function (result) {
                                procedure.id = result.id
                                //console.log("procedure.id", procedure.id);
                                observer.next(result)
                            })
                    }
                }
                exe(i)
            }
        })
        return observable;
    },

    handleProductHsWorkProcedures: function (factoryId, products, working_Procedures, productHasWorkingProcedures) {
        var observable = Rx.Observable.create(function (observer) {

            for (var i = 0; i < productHasWorkingProcedures.length; i++) { //录入多对多关系

                var exe = function (i) { //声明闭包
                    var productHasWorkingProcedure = productHasWorkingProcedures[i];
                    productHasWorkingProcedure.factoryId = factoryId;
                    var rowId = productHasWorkingProcedure.rowId
                    var colId = productHasWorkingProcedure.colId
                    //console.log(rowId);
                    //console.log(colId);

                    for (var j = 0; j < products.length; j++) {
                        var product = products[j];
                        if (product.rowId == rowId) {
                            productHasWorkingProcedure.productId = product.id
                        }
                    }
                    for (var j = 0; j < working_Procedures.length; j++) {
                        var workingProcedure = working_Procedures[j];
                        if (workingProcedure.colId == colId) {
                            productHasWorkingProcedure.workingProcedureId = workingProcedure.id
                        }
                    }
                    setTimeout(function () {
                        //console.log(productHasWorkingProcedure);
                        model.ProductHasWorkingProcedure.upsert(productHasWorkingProcedure)
                            .then(function (result) {
                                observer.next(result);
                            })
                    }, 2000)
                }
                exe(i) //执行闭包
            }
        });
        return observable;
    }

}
module.exports = service