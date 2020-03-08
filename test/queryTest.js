var service = require('../service/service');
var model = require('../repository/mysql/model');

// var data = {
//     all: {factoryId: 2}
// };
// service.rq317(data) // 查询订单
//     .then(function (data) {
//         console.log(JSON.stringify(data))
//     })


// var data = {
//     all: {factoryId: 3}
// };
// service.rq412(data) // 获取未交付产品
//     .then(function (data) {
//         console.log(JSON.stringify(data))
//     })

// var data = {
//     all: {factoryId: 3, type: "Model-0.26953116894451434"}
// };
// service.rq414(data) // 根据产品获取未交付订单列表
//     .then(function (data) {
//         console.log(JSON.stringify(data))
//     })

// var data = {
//     all: {factoryId: 14, productId: 27}
// };
// service.rq251(data) // 根据产品获取工序
//     .then(function (data) {
//         console.log(JSON.stringify(data))
//     })

// var data = {
//     all: {
//         factoryId: 2
//     }
// }
// service.rq412(data) // 获取未交付产品
//
//     .then(function (result) {
//         console.log("获取未交付产品", JSON.stringify(result));
//         return JSON.parse(JSON.stringify(result))
//     })
//     .then(function (result) {
//         var productId = result.rows[0].id
//         var product = result.rows[0]
//         console.log("product", JSON.stringify(product));
//         var data = {
//             all: {factoryId: 2, productId: productId}
//         };
//         return service.rq251(data) // 根据产品获取工序
//     })
//     .then(function (data) {
//
//         console.log("根据产品获取工序", data);
//         for (var i = 0; i < data.length; i++) {
//             var exe = function (i) {
//                 var item = data[i];
//                 item.id = "" //去除id以便产品流程进行复制式的使用
//             }
//             exe(i)
//         }
//         console.log(JSON.stringify(data))
//         return JSON.parse(JSON.stringify(data))
//     })

// var data = {
//     all: {
//         factoryId: 10,
//         type: 'out',
//     }
// }
// service.rq624(data) // 获取出库单记录
//     .then(function (result) {
//         console.log("获取出库单记录", JSON.stringify(result));
//     })

// var data = {
//     all: {
//         // factoryId: 10,
//         // type: 'out',
//     }
// }
// service.rq611(data) // 获取产品物料记录
//     .then(function (result) {
//         console.log("获取产品物料记录", JSON.stringify(result));
//     })

// var data = {
//     all: {
//         // factoryId: factoryId,
//     }
// }
// service.rq623(data) // 获取成品库存表
//     .then(function (result) {
//         console.log("获取成品库存表", JSON.stringify(result));
//     })

// var data = {
//     all: {
//         factoryId: 3,
//     }
// }
// service.rq515(data) // 获取应付核算
//     .then(function (result) {
//         console.log("获取应付核算", JSON.stringify(result));
//     })

// var data = {
//     all: {
//         factoryId: 1,
//     }
// }
// service.rq417(data) // 进度搜索
//     .then(function (result) {
//         console.log("获取应付核算", JSON.stringify(result));
//     })

// var model = require('../repository/mysql/model');
// model.Customer.findOne(
//     {
//         where: {
//             name: 'jack'
//         }
//     }
// )
//     .then(function (result) {
//         console.log(JSON.stringify(result));
//     })

// var model = require('../repository/mysql/model');
// model.Client.findOne(
//     {
//         where: {
//             name: '客户'
//         }
//     }
// )
//     .then(function (result) {
//         console.log(JSON.stringify(result));
//     })

// var process = {product_model: "hello", product_batch: "批次1"}
// var data = {
//
//     all: {
//         factoryId: 1,
//         productId: 1,
//         data: process
//     }
// }
// service.rq416(data) // 进度搜索
//     .then(function (result) {
//         console.log(JSON.stringify(result));
//     })

// var data = {
//
//     all: {
//         factoryId: 1,
//     }
// }
// service.rq322(data) // 进度搜索
//     .then(function (result) {
//         console.log(JSON.stringify(result));
//     })

var data = {

    all: {
        factoryId: 1,
        productId: 1
    }
}

// model.Product.findAll()
//     .then(function (result) {
//         console.log(JSON.stringify(result));
//         for (var i = 0; i < result.length; i++) {
//             var element = result[i];
//             element.factoryUniqueId = element.factoryId + '-' + element.model //工厂范围的唯一限制
//             model.Product.update({factoryUniqueId: element.factoryUniqueId}, {
//                 where: {id: element.id}
//             })
//         }
//     })

// model.Production_Process.findAll()
//     .then(function (result) {
//         for (var i = 0; i < result.length; i++) {
//             var element = result[i];
//             element.closed =0
//             model.Production_Process.update({closed: element.closed}, {
//                 where: {id: element.id}
//             })
//         }
//     })

// var employees
//
// model.Employee.findAll()
//     .then(function (result) {
//         employees = JSON.parse(JSON.stringify(result))
//
//         return model.Work_Order.findAll()
//     })
//     .then(function (result) {
//         result = JSON.parse(JSON.stringify(result))
//         for (let i = 0; i < result.length; i++) {
//             const wk = result[i];
//             for (let j = 0; j < employees.length; j++) {
//                 const employee = employees[j];
//                 if ( wk.factoryId == employee.factoryId && wk.name == employee.name) {
//                     if (  wk.employeeId != employee.id) {
//                         console.log(wk.factoryId + "-" + wk.id + '-' + wk.employeeId + ':' + wk.name + ";" + employee.id + ':' + employee.name)
//                         model.Work_Order.update({employeeId:employee.id},{
//                             where: {id: wk.id}
//                         })
//                             .then(function () {
//                                 console.log('更新了'+wk.id)
//                             })
//                     }
//                 }
//             }
//
//         }
//     })

Number.prototype.toFixed = function (n) {

    if (n > 20 || n < 0) {

        throw new RangeError('toFixed() digits argument must be between 0 and 20');

    }

    const number = this;

    if (isNaN(number) || number >= Math.pow(10, 21)) {

        return number.toString();

    }

    if (typeof (n) == 'undefined' || n == 0) {

        return (Math.round(number)).toString();

    }


    let result = number.toString();

    const arr = result.split('.');


    // 整数的情况

    if (arr.length < 2) {

        result += '.';

        for (let i = 0; i < n; i += 1) {

            result += '0';

        }

        return result;

    }


    const integer = arr[0];

    const decimal = arr[1];

    if (decimal.length == n) {

        return result;

    }

    if (decimal.length < n) {

        for (let i = 0; i < n - decimal.length; i += 1) {

            result += '0';

        }

        return result;

    }

    result = integer + '.' + decimal.substr(0, n);

    const last = decimal.substr(n, 1);


    // // 四舍五入，转换为整数再处理，避免浮点数精度的损失
    //
    // if (parseInt(last, 10) >= 5) {
    //
    //     const x = Math.pow(10, n);
    //
    //     result = (Math.round((parseFloat(result) * x)) + 1) / x;
    //
    //     result = result.toFixed(n);
    //
    // }

    return result;

}
model.Work_Order.findAll()
    .then(function (result) {
        for (let i = 0; i < result.length; i++) {
            const item = result[i];
            var wages = item.wages.toFixed(1)
            console.log(wages);
            var id = item.id
            model.Work_Order.update({wages: wages}, {
                where: {id: id}
            })
        }
    })