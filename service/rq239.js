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

    handleMaterials: function (factoryId, materials) {
        var observable = Rx.Observable.create(function (observer) {
            for (var i = 0; i < materials.length; i++) { //录入工序

                var exe = function (i) {
                    var material = materials[i];
                    material.factoryId = factoryId;
                    if (material.id) {
                        model.Material.upsert(material)
                            .then(function (result) {
                                observer.next(result)
                            })
                    } else {
                        model.Material.create(material)
                            .then(function (result) {
                                material.id = result.id
                                observer.next(result)
                            })
                    }
                }
                exe(i)
            }
        })
        return observable;
    },

    handleProductHasMaterials: function (factoryId, products, materials, productHasMaterials) {
        var observable = Rx.Observable.create(function (observer) {

            for (var i = 0; i < productHasMaterials.length; i++) { //录入多对多关系

                var exe = function (i) { //声明闭包
                    var productHasMaterial = productHasMaterials[i];
                    productHasMaterial.factoryId = factoryId;
                    var rowId = productHasMaterial.rowId
                    var colId = productHasMaterial.colId
                    //console.log(rowId);
                    //console.log(colId);

                    for (var j = 0; j < products.length; j++) {
                        var product = products[j];
                        if (product.rowId == rowId) {
                            productHasMaterial.productId = product.id
                        }
                    }
                    for (var j = 0; j < materials.length; j++) {
                        var material = materials[j];
                        if (material.colId == colId) {
                            productHasMaterial.materialId = material.id
                        }
                    }
                    setTimeout(function () {
                        //console.log(productHasWorkingProcedure);
                        model.ProductHasMaterial.upsert(productHasMaterial)
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