var eventQueue = {}
// setInterval(function () {
//     console.log(eventQueue);
// }, 1000)

window.ajax = function (event) {
    //console.log('ajax event', event)

    //需要防止重复提交的订单
    var eventToPrevent = ['rq324', 'rq416', 'rq425', 'rq618', 'rq614', 'rq626', 'rq2111', 'rq315', 'rq2112']
    var inE = false;
    for (var i = 0; i < eventToPrevent.length; i++) {
        var eventToPreventElement = eventToPrevent[i];
        if (event.id == eventToPreventElement) {
            inE = true;
        }
    }
    if (inE) {
        //2秒内防止重复发送请求
        if (eventQueue[event.id]) {
            console.log('接口提交重复!')
            return
        } else {
            eventQueue[event.id] = event
            setTimeout(function () {
                delete eventQueue[event.id]
            }, 2000)
        }
    }


    var promise = $.Deferred();
    //处理无数据的情况
    try {
        event.requiredParams = event.requiredParams ? event.requiredParams : ""
    } catch (e) {
        event['requiredParams'] = ""
    }
    try {
        event.optionalParams = event.optionalParams ? event.optionalParams : ""
    } catch (e) {
        event['optionalParams'] = ""
    }
    try {
        event.dateParams = event.dateParams ? event.dateParams : ""
    } catch (e) {
        event['dateParams'] = ""
    }
    try {
        event.includeParams = event.includeParams ? event.includeParams : ""
    } catch (e) {
        event['dateParams'] = ""
    }

    //测试用
    // event.requiredParams = {hi: '1'}
    // event.optionalParams = {hello: '2'}
    var deleteRqs = [
        'rq211',
        'rq240',
        "rq216",
        "rq221",
        "rq223",
        "rq228",
        "rq232",
        "rq240",
        "rq244",
        "rq249",
        "rq520",
        "rq622",
        "rq632",
        "rq2113",
        "rq2115",
    ]
    var needConfirm = false;
    for (var i = 0; i < deleteRqs.length; i++) {
        var deleteRq = deleteRqs[i];
        if (event.id == deleteRq) {
            needConfirm = true;

        }
    }
    if (needConfirm) {
        if (!confirm("确定要删除数据吗？")) {
            return
        }
    }

    $.ajax({
        url: '/' + event.id,
        type: 'post',
        timeout: 180000,//超时则返回error
        contentType: "application/json",
        data: JSON.stringify({
            requiredParams: event.requiredParams,
            optionalParams: event.optionalParams,
            dateParams: event.dateParams,
            includeParams: event.includeParams,
        }),
        dataType: 'json',
        processData: false,//使提交时不会被序列化
        success: function (data) {
            if (data.statusCode == -1) {
                new $.zui.Messager(data.msg, {
                    icon: 'info' // 定义消息图标
                }).show();
                if (data.data) {
                    if (data.data.name == 'SequelizeUniqueConstraintError') {
                        new $.zui.Messager('唯一性限制导致操作失败，请检查用户名或者订单号等有唯一性限制的填写信息！', {
                            icon: 'info', // 定义消息图标
                            time: 10000 // 不进行自动隐藏
                        }).show();
                    }
                }
            } else {
                promise.resolve(data);//解析data为promise，可为.then使用
            }
        },
        error: function (res, error) {
            new $.zui.Messager(error.toString(), {
                icon: 'info', // 定义消息图标.
                time: 10000 // 不进行自动隐藏
            }).show();
            promise.reject(error);//被拒绝
        }
    })
    return promise;
}