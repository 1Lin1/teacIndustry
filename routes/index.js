var configs = require('../command/config');
var service = require('../service/service');
var express = require('express');
var router = express.Router();
var events = require('../command/config');
for (var x in events) {
    var event = events[x]
    if (event.optionalParams == '') {
        event.optionalParams = {}
    }
    if (event.requiredParams == '') {
        event.requiredParams = {}
    }
}

router.all("/", function (req, res, next) {
    res.redirect('/rq100');
})

//处理ejs矩阵
router.all("*", function (req, res, next) {
//do some operations
    //console.log('+++++++++++++++++ 渲染ejs');
    var url = req.url;
    //console.log(req.url);
    url = url.split('?')[0];
    var config = configs[url.replace('/', "")];
    //console.log(config);
    if (config.type == 'ejs') {

        //为前端准备好事件

        var user = null
        try {
            user = req.session.user;
            //console.log(user);
        } catch (e) {
            //console.log(e);
        }
        res.render(config.path.replace('/', ""), {
            title: config.name,
            config: config,
            events: events,
            user: user,
            data: [{}]
        });
    } else {
        next();
    }
});

//二维码充值重定向
router.all('/rq1013', function (req, res, next) {

    var userName = req.query.userName;
    var chargePeriodId = req.query.chargePeriodId;


    service.rq1013({
        all:
            {
                name: userName,
                chargePeriodId: chargePeriodId,
            }
    })
        .then(function (result) {
            if (result) {
                var url = 'http://cas.5ftech.com/server/wechatOrderXiaoxiaotech?outtradeno=' + result.outtradeno + '&price=' + result.price;
                res.redirect(url);
            } else {
                res.send('找不到用户');
            }
        })
        .catch(function () {
            res.send('找不到用户');
        })
});

//微信充值回调
var xmlparser = require('express-xml-bodyparser');
router.all('/rq1015', xmlparser({trim: false, explicitArray: false}), function (req, res, next) {

    var data = req.body.xml;

    //返回格式
    // { appid: 'wxf63280efef262079',
    //     bank_type: 'CFT',
    //     cash_fee: '1',
    //     fee_type: 'CNY',
    //     is_subscribe: 'Y',
    //     mch_id: '10062456',
    //     nonce_str: '824158748717661',
    //     openid: 'oaQO0t4iRdHOS0gB8hgodPHNm5_o',
    //     out_trade_no: 'xiaoxiaotech-494813',
    //     result_code: 'SUCCESS',
    //     return_code: 'SUCCESS',
    //     sign: '2D382A5D5BE4F82460941FE2A0916444',
    //     time_end: '20191022110806',
    //     total_fee: '1',
    //     trade_type: 'JSAPI',
    //     transaction_id: '4200000426201910225184460995' }
    //console.log(data);
    service.rq1015(data)
        .then(function () {
            var returnString = '<xml>\n' +
                '<return_code><![CDATA[SUCCESS]]></return_code>\n' +
                '<return_msg><![CDATA[OK]]></return_msg>\n' +
                '</xml>'
            res.end(returnString)
        })
});

//微信登录回调
router.all('/rq1016', function (req, res, next) {

    var data = {
        openid: req.query.openid,
        unionid: req.query.unionid,
        nickname: req.query.nickname,
        imgUrl: req.query.imgUrl,
        factoryId: req.query.factoryId
    }

    service.rq1016(data)
        .then(function (retData) {
            req.session.user = retData.user;
            res.redirect('/rq100')
        })


});
//合并请求参数矩阵
router.all("*", function (req, res, next) {
//do some operations
    //console.log('+++++++++++++++++ 合并请求参数');
    var url = req.url;
    var config = configs[url.replace('/', "")];
    var factoryId = null;
    if (config.type == 'ajax' || config.type == 'popup') {
        if (req.body) {
            //console.log("请求参数：", req.body);
            var params = {}

            try {
                var requiredParams = req.body.requiredParams
                for (var x in requiredParams) {
                    params[x] = requiredParams[x];
                }
            } catch (e) {
            }

            try {
                var optionalParams = req.body.optionalParams
                for (var x in optionalParams) {
                    params[x] = optionalParams[x];
                }
            } catch (e) {
            }
            req.body.all = params;

            //统一为查询加入工厂参数
            try {
                if (req.session.user) {
                    factoryId = req.session.user.factoryId
                    req.body.all.factoryId = factoryId
                    try {
                        req.body.isRoot = req.session.user.isRoot
                    } catch (e) {
                        //console.log('查询isRoot错误：', e);
                    }
                }
            } catch (e) {
                //console.log(e);
            }

            //log
            if (config.use_log) {
                var record = {
                    "idNum": config.id,
                    "name": config.name,
                    "type": config.type,
                    "path": config.path,
                    "requiredParams": JSON.stringify(req.body.requiredParams),
                    "optionalParams": JSON.stringify(req.body.optionalParams),
                }


                service.rq808({
                    all:
                        {
                            data: record,
                            factoryId: factoryId,
                        }
                })
            }

            //console.log("合并的参数", req.body.all);
        }
        next()
    } else {
        next();
    }
});

//登录接口
router.all('/rq1011', function (req, res, next) {
    service.rq1011(req.body)
        .then(function (data) {
            if (data) {
                try {
                    //console.log(req.session);
                    req.session.user = data;
                    req.session.factoryId = data.factoryId;
                } catch (e) {
                    //console.log(e);
                }
                res.send({msg: "登录成功", statusCode: 1});
            } else {
                res.send({msg: "登录失败", statusCode: -1});
            }
        });
});
//退出登录
router.all('/rq1012', function (req, res, next) {
    try {
        res.session['user'] = ''
        res.session['factoryId'] = ''
    } catch (e) {
        //console.log(e);
    }
    res.clearCookie('sessionid');
    res.redirect('rq1000'); //退出到登录页

});


//忘记密码
router.all('/rq1014', function (req, res, next) {
    res.send("忘记密码");
});
//获取用户信息
router.all('/rq111', function (req, res, next) {
    try {
        var user = req.session.user
        if (user) {
            res.send({msg: "操作成功", statusCode: 1, data: user});
        } else {
            res.send({msg: "用户未登录", statusCode: -1});
        }
    } catch (e) {
        res.send({msg: "请求错误", statusCode: -1});
    }

});
//忘记密码
router.all('/rq1014', function (req, res, next) {
    res.send("忘记密码");
});

//处理业务逻辑矩阵
router.all("*", function (req, res, next) {
//do some operations
    //console.log('+++++++++++++++++ 处理service');
    var url = req.url;
    //console.log(req.url);
    var config = configs[url.replace('/', "")];
    //console.log(config);
    if (config.type == 'ajax' || config.type == 'popup') {
        // var funNames = config.path.split('/');
        // var funName = funNames[funNames.length - 1]

        if (service[config.id]) {
            service[config.id](req.body)
                .then(function (data) {
                    res.send({msg: '操作成功', statusCode: 1, data: data})
                })
                .catch(function (err) {
                    res.send({msg: '操作失败', statusCode: -1, data: err})
                })
        } else {
            res.send({msg: '功能待实现', statusCode: -1, data: config})
        }
    } else {
        next();
    }
});


module.exports = router;
