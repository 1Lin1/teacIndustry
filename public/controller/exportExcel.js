window.ajax = function (event) {


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
                            icon: 'info' // 定义消息图标
                        }).show();
                    }
                }
            } else {
                promise.resolve(data);//解析data为promise，可为.then使用
            }
        },
        error: function (res, error) {
            new $.zui.Messager(error.toString(), {
                icon: 'info' // 定义消息图标
            }).show();
            promise.reject(error);//被拒绝
        }
    })
    return promise;
}