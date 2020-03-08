var config = require('../repository/mysql/model').getConfig()
var fs = require('fs')
var exec = require('child_process').exec;

var Rx = require('./rx')
var htmls = []
var formFunctions = {}
// var randomNumber = parseInt(Math.random() * 10)
var randomNumber = ''
for (var key in config) {
    var formId = key + 'Form' + randomNumber
    var model = config[key]
    var string = ''
    for (var x in model) {
        var id = x + 'formId'
        string += '<div class="input-group col-md-5" style="margin:10px 20px 10px 10px; float:left"> \n'
        string += '<span class="input-group-addon">' + model[x].string + '</span> \n'

        if (model[x].widget == "select") {
            var options = model[x].options;
            if (typeof options == 'string') {
                string += '<select id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""></select> \n'
                if (options == 'remote') {
                    //TODO 生成远程调用的方法
                }
            } else if (typeof options == 'object') {
                var optionsString = ''
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    optionsString += '<option value="' + option.value + '">' + option.label + '</option>\n'
                }
                string += '<select id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder="">' + optionsString + '</select> \n'
            } else if (typeof options == 'undefined') {
                string += '<select id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""></select> \n'
            }
        } else if (model[x].widget == "autocomplete") {
            string += '<input id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""> \n'
            string += '<input id="' + id + 'callback' + '" type="hidden" name="' + x + 'Id' + '" class="form-control ' + x + 'Id' + '" placeholder=""> \n'
            //TODO 生成远程调用的方法
        } else if (model[x].widget == "fk") {
            string += '<select id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""></select> \n'
        } else if (model[x].widget == "check") {
            string += '<input id="' + id + '" type="checkbox" name="' + x + '" class="form-control ' + x + '" placeholder=""> \n'
        } else {
            string += '<input id="' + id + '" type="text" name="' + x + '" class="form-control ' + x + '" placeholder=""> \n'
        }
        string += '<span class="input-group-addon cursor" onclick="$(\'#' + id + '\').val(\'\')">x</span> \n'
        string += '</div> \n'
    }
    string += '<input name="id" class="id" type="hidden">\n'
    string += '<input name="flag" class="flag" type="hidden">\n'
    string += '<input name="index" class="index" type="hidden">\n'

    var functionsId = key + 'functions' + randomNumber
    var functionsString = '<div id="THE_FUNCTIONS_ID" class="functions"><button class="btn  btn-warning "type="button"onclick="THE_CLICK_CREATE_FUNNAME">新增</button><button class="btn  btn-danger"type="button"onclick="THE_BATCH_DELETE_FUNNAME">删除</button><button class="btn  btn-primary"type="button"onclick="THE_SEARCH_FUNNAME">搜索</button></div>'
    functionsString = functionsString
        .replace("THE_FUNCTIONS_ID", functionsId)
        .replace("THE_CLICK_CREATE_FUNNAME", 'window.create' + key + 'Form()')
        .replace("THE_BATCH_DELETE_FUNNAME", 'window.batchDelete' + key + '()')
        .replace("THE_SEARCH_FUNNAME", 'window.search' + key + '()')


    var searchFormId = key + 'searchForm' + randomNumber
    var searchFormString = '<div class="searchForm" id="' + searchFormId + '">' + string.replace(/formId/g, 'searchFormId') + '</div>'

    var tableString = ''
    var tableId = 'table_' + key + randomNumber
    tableString += '<div id="' + tableId + '"></div>\n'

    var modalId = key + 'Modal' + randomNumber
    var modalString = '<div class="modal fade modal-moveable"id="THE_MODEL_ID"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button"class="close"data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button><h4 class="modal-title">THE_MODEL_NAME</h4></div><div class="modal-body"></div><div style="clear: both"></div> <div class="modal-footer"><button type="button"class="btn btn-default"data-dismiss="modal">关闭</button><button onclick="THE_DELETE_FUNNAME"type="button"class="btn btn-danger"data-dismiss="modal">删除</button><button onclick="THE_SAVE_FUNNAME"type="button"class="btn btn-primary"data-dismiss="modal">保存</button></div></div></div></div>\n'
    modalString = modalString
        .replace("THE_MODEL_ID", modalId)
        .replace('THE_MODEL_NAME', key)
        .replace("THE_DELETE_FUNNAME", 'window.delete' + key + 'Form()')
        .replace("THE_SAVE_FUNNAME", 'window.save' + key + 'Form()')

    string = '<div>'
        + '\n<!--搜索表单-->\n' + searchFormString
        + '\n<!--功能按钮-->\n' + functionsString
        + '\n<!--表单-->\n' + '<div class="form" id="' + formId + '">' + string + '</div>'
        + '\n<!--弹窗-->\n' + modalString
        + '\n<!--列表-->\n' + tableString
        + '</div>'

    var dataSourceString = ''
    var formEmpty = {}
    var cols = []
    for (var x in model) {
        formEmpty[x] = ''
        cols.push({name: x, label: model[x].string, width: 100})
    }
    cols.push({name: 'createdAt', label: '创建日期', width: 150})
    var THE_DATA_SOURCE = {
        form: formEmpty,
        list: {
            cols: cols,
            array: []
        }
    };
    dataSourceString = '\n var ' + key + 'DataSource' + '=' + JSON.stringify(THE_DATA_SOURCE, null, 2) + '\n'


    var tableFunction = function (tableId, dataSource) {
        $(tableId).html('').append('<div class="table"></div>')

        $(tableId + ' .table').datagrid({
            dataSource: dataSource,
            checkable: true,
            checkByClickRow: false,
            partialRendering: false,
            // height: '300',
            onRender: function () {
                $(tableId + ' .datagrid-cell').off('click');
                $(tableId + ' .datagrid-cell').on('click', function () {
                    var row = $(this).attr('data-row')
                    var col = $(this).attr('data-col')
                    if (row == 0 || col == 0) return
                    var index = row - 1
                    var formId = 'THE_FORM_ID'
                    var modalId = 'THE_MODAL_ID'
                    $('#' + modalId).modal('show', 'fit');
                    var formData = THE_DATA_SOURCE.list.array[index];
                    window.renderForm('#' + formId, formData)
                    $('#' + formId + ' .flag').val('edit')
                    $('#' + formId + ' .index').val(index)
                })
            }
        })
    }



    var newModel = {}

    var newModel = {id: ''}

    for (var x in model) {
        newModel[x] = ''
    }


    var createFuntion = function () { //调起创建弹窗
        var formId = 'THE_FORM_ID'
        var modalId = 'THE_MODAL_ID'
        $('#' + modalId).modal('show')
        var data = '$NEW_MODEL$';
        window.renderForm('#' + formId, data);
        $('#' + formId + ' .flag').val('new')
        $('#' + formId + ' .id').val('')
    }

    
    var saveFunction = function () { //创建或保存
        var formId = 'THE_FORM_ID'
        var flag = $('#' + formId + ' .flag').val()
        var formData = window.getFormData('#' + formId)
        if (flag == 'new') { //创建状态
            THE_DATA_SOURCE.list.array.push(formData)
            var event = events['rq2111']
            event.requiredParams = {model: 'THE_MODEL_NAME'}
            event.optionalParams = {data: formData}
            window.ajax(event)
                .then(function () {
                    setTimeout(function () {
                        new $.zui.Messager("创建成功", {
                            icon: 'info' // 定义消息图标
                        }).show();
                        var searchEvent = events['rq2114'] //通用查询接口
                        searchEvent.requiredParams = {model: 'THE_MODEL_NAME'}
                        searchEvent.optionalParams = {}
                        window.ajax(searchEvent)
                            .then(function (result) {
                                THE_DATA_SOURCE.list.array = result.data;
                                window.RENDER_TABLE_NAME('#THE_TABLE_ID', THE_DATA_SOURCE.list)
                            })
                    }, 1000)
                })
        } else {
            var index = $('#' + formId + ' .index').val()
            var data = THE_DATA_SOURCE.list.array[index]
            for (var x in formData) {
                try {
                    data[x] = formData[x]
                } catch (e) {
                }
            }
            var event = events['rq2112']
            event.requiredParams = {model: 'THE_MODEL_NAME'}
            event.optionalParams = {data: data}
            window.ajax(event)
                .then(function () {
                    setTimeout(function () {
                        new $.zui.Messager("保存成功", {
                            icon: 'info' // 定义消息图标
                        }).show();
                        var searchEvent = events['rq2114'] //通用查询接口
                        searchEvent.requiredParams = {model: 'THE_MODEL_NAME'}
                        searchEvent.optionalParams = {}
                        window.ajax(searchEvent)
                            .then(function (result) {
                                THE_DATA_SOURCE.list.array = result.data;
                                window.RENDER_TABLE_NAME('#THE_TABLE_ID', THE_DATA_SOURCE.list)
                            })
                    }, 1000)
                })
        }
        var modalId = 'THE_MODAL_ID'
        $('#' + modalId).modal('hide')
    }

    var searchFunction = function (limit) { //搜索
        var formId = 'THE_SEARCH_FORM_ID'
        var formData = limit ? window.getFormData('#' + formId) : {}

        var searchEvent = events['rq2114'] //通用查询接口
        searchEvent.requiredParams = {model: 'THE_MODEL_NAME'}
        searchEvent.optionalParams = formData
        window.ajax(searchEvent)
            .then(function (result) {
                THE_DATA_SOURCE.list.array = result.data;
                window.RENDER_TABLE_NAME('#THE_TABLE_ID', THE_DATA_SOURCE.list)
            })
    }

    var deleteFunction = function () { //删除
        var formId = 'THE_FORM_ID'
        var index = $(formId + ' .index').val()
        var data = THE_DATA_SOURCE.list.array[index]

        if (index) { //调用接口从服务器删除
            var modelName = 'THE_MODEL_NAME';
            var id = data.id;
            if (!id) {
                return
            } else {
                var event = events['rq2115']
                event.requiredParams = {model: modelName}
                event.optionalParams = {items: [{id: id}]}
                window.ajax(event)
                    .then(function () {
                        setTimeout(function () {
                            new $.zui.Messager("删除成功", {
                                icon: 'info' // 定义消息图标
                            }).show();
                            $('.modal').modal('hide');

                        }, 1000)
                    })
            }
            THE_DATA_SOURCE.list.array.splice(index, 1);
            window.RENDER_TABLE_NAME('#THE_TABLE_ID', THE_DATA_SOURCE.list)
        }

        var modalId = 'THE_MODAL_ID'
        $('#' + modalId).modal('hide');
    }

    var batchDeleteFunction = function () { //批量删除
        var formId = 'THE_FORM_ID'
        var index = $(formId + ' .index').val()
        var data = THE_DATA_SOURCE.list.array[index]

        var tableId = 'THE_TABLE_ID'
        var items = window.getSelectedTableItems('#' + tableId + ' .table')
        if (items.length == 0) {
            new $.zui.Messager("请至少选择一个记录", {
                icon: 'info' // 定义消息图标
            }).show();
            return
        }
        var batchDeleteEvent = events['rq2115'] //通用删除接口
        batchDeleteEvent.requiredParams = {model: 'THE_MODEL_NAME'}
        batchDeleteEvent.optionalParams = {items: items}
        window.ajax(batchDeleteEvent)
            .then(function () {
                var getEvent = events['rq2114'] //通用查找接口
                getEvent.requiredParams = {model: 'THE_MODEL_NAME'}
                getEvent.optionalParams = {items: items}
                return window.ajax(getEvent)
            })
            .then(function (result) {
                THE_DATA_SOURCE.list.array = result.data;
                window.RENDER_TABLE_NAME('#THE_TABLE_ID', THE_DATA_SOURCE.list)
            })
    }

    var scriptString = ''
    scriptString += dataSourceString;
    scriptString += '\n //渲染列表\n window.render' + key + 'Table' + '=' + tableFunction.toString() + '\n'
    scriptString += '\n //创建\n window.create' + key + 'Form' + '=' + createFuntion.toString().replace(/\'\$NEW_MODEL\$\'/g, JSON.stringify(newModel)) + '\n'
    scriptString += '\n //保存\n window.save' + key + 'Form' + '=' + saveFunction.toString() + '\n'
    scriptString += '\n //删除\n window.delete' + key + 'Form' + '=' + deleteFunction.toString() + '\n'
    scriptString += '\n //批量删除\n window.batchDelete' + key + '=' + batchDeleteFunction.toString() + '\n'
    scriptString += '\n //搜索\n window.search' + key + '=' + searchFunction.toString() + '\n'
    scriptString = scriptString
        .replace(/THE_FORM_ID/g, formId)
        .replace(/THE_SEARCH_FORM_ID/g, searchFormId)
        .replace(/THE_MODAL_ID/g, modalId)
        .replace(/THE_TABLE_ID/g, tableId)
        .replace(/THE_MODEL_NAME/g, key)
        .replace(/THE_DATA_SOURCE/g, key + 'DataSource')
        .replace(/RENDER_TABLE_NAME/g, 'render' + key + 'Table')
    scriptString = '\n<script>\n' + scriptString + '\n</script>\n'
    string += scriptString;

    var html = {name: key, html: string}
    htmls.push(html);
}
console.log(htmls);



var dateString = new Date().getTime();

var dateString = 123;
exec('mkdir -p  ./html/' + dateString, function () {
    for (var i = 0; i < htmls.length; i++) {
        var html = htmls[i];
        fs.writeFile(
            "./html/" + dateString + '/' + html.name + '.html', html.html,
            {
                encoding: 'utf8'
            },
            function (err) {
                // //console.log(err);
            });
    }
});






