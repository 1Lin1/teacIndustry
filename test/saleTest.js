var service = require('../service/service');

var params = {all: {list: [{name: 'testClient1'}]}}
service.rq313(params)
    .then(function (result) {
        console.log(result);
    })

