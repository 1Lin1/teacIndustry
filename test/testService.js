var service = require('../service/service');

// var params = {all: {clientId: 1}}
// service.rq317(params)
//     .then(function (result) {
//         console.log(result);
//     })


// var params = {
//     all: {
//         list: [{model:'A101',procedures: []}]
//     }
// }
//
// service.rq214(params)
//     .then(function (result) {
//         console.log(result);
//     })


var params = {
    all: {
        order: {orderNo: '234234abc', accepted: 3.24},
        orderProducts: [
            {orderNo: '234234abc', type: "A101", productId: 1},
            {orderNo: '234234abc', type: "A101", productId: 2},
            ]
    }
};
service.rq324(params)
