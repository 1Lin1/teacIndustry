var Sequelize = require('sequelize');
var sequelize = require('../repository/mysql/mysql');
var model = require('../repository/mysql/model');
var Q = require("q");
var Rx = require('./rx')
var countPage = require('./countPage')
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
//导出功能
var fs = require('fs')
var Excel = require("exceljs");

var countSum = require('./countSum')
var service = {
    /**
     * 获取系统信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq111": function (params) {
        var deferred = Q.defer();
        var that = this;


        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 登录
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq1011": function (params) {
        var deferred = Q.defer();
        var that = this;

        var type = params.all.type  //区别超管还是普通用户
        var user = params.all.data;
        var name = user.name;
        var password = user.password;
        //console.log("查找的用户名：", name);
        var modelToFind;
        if (type == 'supervisor') {
            modelToFind = model.Customer //超管
        } else {
            modelToFind = model.Customer //普通用户
        }
        modelToFind.findOne({
            where: {name: name},
            include: [{
                model: model.Factory,
            }
            ]
        })
            .then(function (result) {
                //console.log(JSON.stringify(result));
                if (password == result.password) {
                    deferred.resolve(result);
                } else {
                    deferred.resolve(false);
                }
            })
            .catch(function (err) {
                //console.log(err);
                deferred.resolve(false);
            })

        return deferred.promise;
    },
    /**
     * 退出登录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq1012": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 充值
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq1013": function (params) {
        var deferred = Q.defer();
        var that = this;

        var name = params.all.name
        var outtradeno = require('./uuid').getUuid()
        var chargePeriodId = params.all.chargePeriodId

        var retData = {
            price: 0,
            chargePeriodId: '',
            outtradeno: outtradeno,
        }

        var record = {
            factoryId: '',
            out_trade_no: outtradeno,
        }

        model.Customer.findOne({
            where: {name: name},
            include: [{
                model: model.Factory,
            }],
        })
            .then(function (result) {
                if (result) {
                    var factoryId = result.factory.id
                    record.factoryId = factoryId;
                } else {
                    deferred.reject('')
                }
            })
            .then(function () {
                return model.ChargePeriod.findOne(
                    {where: {id: chargePeriodId}}
                )
            })
            .then(function (result) {
                //console.log(JSON.stringify(result))
                if (result) {
                    retData.price = result.price;
                    record.chargePeriodId = result.id
                    record.price = result.price
                    record.time = result.time
                    record.userName = name
                    return model.ChargeRecord.create(record)
                } else {
                    deferred.reject('')
                }
            })
            .then(function (result) {
                deferred.resolve(retData);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 忘记密码
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq1014": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 微信充值回调
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq1015": function (params) {
        var deferred = Q.defer();
        var that = this;

        var out_trade_no = params.out_trade_no

        model.ChargeRecord.findOne({
            where: {
                out_trade_no: out_trade_no
            }
        })
            .then(function (result) {
                result = JSON.parse(JSON.stringify(result))
                result.isPay = true;
                return model.ChargeRecord.update(result, {
                    where: {id: result.id}
                })
            })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 微信登录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq1016": function (params) {
        var deferred = Q.defer();
        var that = this;

        var retData = {
            isNewUser: false,
            user: ''
        }
        var openid = params.openid;
        var unionid = params.unionid;
        var nickname = params.nickname;
        var imgUrl = params.imgUrl;
        var factoryId = params.factoryId;

        model.Customer.findOne({
            where: {openId: openid}
        })
            .then(function (user) {
                if (user) {
                    retData.isNewUser = false;
                    return user;
                } else {
                    retData.isNewUser = true;
                    return model.Customer.create({
                        nickName: nickname, //昵称
                        unionId: unionid,//微信unionid
                        openId: openid,//微信openid
                        imgUrl: imgUrl,//
                        factoryId: factoryId,//
                        type: 'customer',
                    })
                }
            })
            .then(function (user) {
                retData.user = user;
                deferred.resolve(retData);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 删除客户信息
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq211": function (params) {
        var deferred = Q.defer();
        var that = this;


        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出客户信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq212": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取产品列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq213": function (params) {
        var deferred = Q.defer();
        var that = this;


        var retResult = {}
        model.ProductHasWorkingProcedure.findAll({
            where: {factoryId: params.all.factoryId},
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Working_Procedure,
            },
                {
                    model: model.Product,
                }
            ],
        })
            .then(function (result) {
                retResult.rows = JSON.parse(JSON.stringify(result))
                return model.Product.findAll({where: {factoryId: params.all.factoryId}})
            })
            .then(function (products) {
                retResult.products = JSON.parse(JSON.stringify(products))
                return model.Working_Procedure.findAll({where: {factoryId: params.all.factoryId}})
            })
            .then(function (procedures) {
                retResult.procedures = JSON.parse(JSON.stringify(procedures))
                deferred.resolve(retResult);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 点击新增产品
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq214": function (params) {
        var deferred = Q.defer();
        var that = this;

        var list = params.all.list
        for (var i = 0; i < list.length; i++) {
            var product = list[i];
            model.Product.upsert(product)
                .then(function (result) {
                    var productId = result.id;
                    var procedures = product.procedures;
                    // for (var j = 0; j < procedures.length; j++) {
                    //     var item = procedures[j];
                    // }
                })
        }
        deferred.resolve(params);


        return deferred.promise;
    },
    /**
     * 保存产品录入信息
     * Author：brave
     * 必传参数：products,working_Procedures,productHasWorkingProcedures
     * 可选参数：
     */
    "rq215": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var products = params.all.products
        var working_Procedures = params.all.working_Procedures
        var productHasWorkingProcedures = params.all.productHasWorkingProcedures

        var rq215 = require('./rq215');

        var retResult = {} //整合的保存结果
        rq215.handleProducts(factoryId, products)
            .bufferCount(products.length)
            .concatMap(function (result) {
                retResult.products = result
                return rq215.handleWorkProcedures(factoryId, working_Procedures)
            })
            .bufferCount(working_Procedures.length)
            .concatMap(function (result) {
                retResult.workProcedures = result
                return rq215.handleProductHsWorkProcedures(factoryId, products, working_Procedures, productHasWorkingProcedures)
            })
            .bufferCount(productHasWorkingProcedures.length)
            .subscribe(function (result) {
                retResult.productHasWorkingProcedures = result;
                deferred.resolve(retResult)
            });
        return deferred.promise;
    },
    /**
     * 删除产品信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq216": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取员工列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq217": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all
        model.Employee.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 点击新增员工信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq218": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击编辑员工信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq219": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 批量编辑员工信息
     * Author：
     * 必传参数：factoryId,list
     * 可选参数：
     */
    "rq220": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var list = params.all.list;
        for (var i = 0; i < list.length; i++) {
            var exe = function (i) {
                var employee = list[i];
                employee.factoryId = factoryId;
                model.Employee.update(employee,
                    {
                        where: {id: employee.id}
                    })
                    .then(function () {

                    });
            }
            exe(i)
        }
        setTimeout(function () {
            deferred.resolve(params);
        }, 2000);
        return deferred.promise;
    },
    /**
     * 删除员工信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq221": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 创建员工信息
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq245": function (params) {
        var deferred = Q.defer();
        var that = this;

        var departmentId = params.all.departmentId;
        var factoryId = params.all.factoryId;
        var employee = params.all.data;
        employee.factoryId = factoryId;
        employee.departmentId = departmentId;
        model.Employee.create(employee)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 获取生产进度
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq222": function (params) {
        var deferred = Q.defer();
        var that = this;

        that.rq417(params) //复用
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 删除生产进度
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq223": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出生产进度
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq224": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取外包工单
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq225": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all;
        query.is_outsourcing = 1 //外包工单

        model.Work_Order.findAll({
            where: query,


            include: [{
                model: model.Work_Order_OutSource_Info,
                include: [{
                    model: model.Supplier,
                }],
            }],


            include: [
                {
                    model: model.Work_Order_OutSource_Info,
                    include: [
                        {
                            model: model.Supplier,
                        },
                    ],
                },
            ],

        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 点击外包工单弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq226": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出外包工单
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq227": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除外包工单
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq228": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取供应商列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq229": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all

        model.Supplier.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 点击新增供应商弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq230": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出供应商
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq231": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除供应商
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq232": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取出库单信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq233": function (params) {
        var deferred = Q.defer();
        var that = this;

        that.rq624(params)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 导出出库单信息
     * Author：
     * 必传参数：
     * 可选参数：isIn,isOut
     */
    "rq234": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取物料入库单信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq235": function (params) {
        var deferred = Q.defer();
        var that = this;
        that.rq611(params)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 导出物料入库单信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq236": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 物料信息列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq237": function (params) {
        var deferred = Q.defer();
        var that = this;


        var retResult = {}
        model.ProductHasMaterial.findAll({
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Product,
            },
                {
                    model: model.Material,
                }
            ],
        })
            .then(function (result) {
                retResult.rows = JSON.parse(JSON.stringify(result))
                return model.Product.findAll({where: {factoryId: params.all.factoryId}})
            })
            .then(function (products) {
                retResult.products = JSON.parse(JSON.stringify(products))
                return model.Material.findAll({where: {factoryId: params.all.factoryId}})
            })
            .then(function (materials) {
                retResult.materials = JSON.parse(JSON.stringify(materials))
                deferred.resolve(retResult);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 点击物料信息录入
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq238": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 保存物料信息录入
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq239": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var products = params.all.products

        var materials = params.all.materials
        var productHasMaterials = params.all.productHasMaterials

        var rq239 = require('./rq239');

        var retResult = {} //整合的保存结果
        rq239.handleProducts(factoryId, products)
            .bufferCount(products.length)
            .concatMap(function (result) {
                retResult.products = result
                return rq239.handleMaterials(factoryId, materials)
            })
            .bufferCount(materials.length)
            .concatMap(function (result) {
                retResult.materials = result
                return rq239.handleProductHasMaterials(factoryId, products, materials, productHasMaterials)
            })
            .bufferCount(productHasMaterials.length)
            .subscribe(function (result) {
                retResult.productHasMaterials = result;
                deferred.resolve(retResult)
            });
        return deferred.promise;
    },
    /**
     * 删除物料信息
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq240": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 黑匣子
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq241": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 添加用户
     * Author：brave
     * 必传参数：data
     * 可选参数：
     */
    "rq242": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var data = params.all.data;
        data.factoryId = factoryId;
        model.Customer.create(data)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 查找用户列表
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq243": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId

        model.Customer.findAll({
            where: {factoryId: factoryId}
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 删除用户
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq244": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 创建部门
     * Author：
     * 必传参数：data,factoryId
     * 可选参数：
     */
    "rq246": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var department = params.all.data;
        department.factoryId = factoryId;

        model.Department.create(department)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 获取部门列表
     * Author：
     * 必传参数：factoryId
     * 可选参数：
     */
    "rq247": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;

        model.Department.findAndCountAll({
            where: {
                factoryId: factoryId
            }
        })
            .then(function (result) {
                result = countPage.count(result);
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 编辑部门
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq248": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除部门
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq249": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 新增供应商
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq250": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var supplier = params.all.data;
        supplier.factoryId = factoryId

        model.Supplier.create(supplier)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 根据产品获取工序
     * Author：brave
     * 必传参数：id
     * 可选参数：
     */
    "rq251": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var productId = params.all.productId

        model.ProductHasWorkingProcedure.findAll({
            where: {
                factoryId: factoryId,
                productId: productId,
            },
            include: [{
                model: model.Working_Procedure,
            }],
        })
            .then(function (result) {
                result = JSON.parse(JSON.stringify(result));
                //console.log(result);
                var list = []
                if (result.length > 0) {
                    Rx.Observable.create(function (observer) {
                        //console.log("hello")
                        for (var i = 0; i < result.length; i++) {
                            var exe = function (i) {
                                //console.log(i)
                                try {
                                    var item = result[i];
                                    item.working_procedure['price'] = item.price
                                    list.push(item.working_procedure)
                                    observer.next()
                                } catch (e) {
                                    //console.log;
                                }
                            }
                            exe(i)
                        }
                    })
                        .bufferCount(result.length) //所有异步循环都处理完毕，才执行下一步
                        .subscribe(function () {
                            deferred.resolve(list);
                        })
                } else {
                    deferred.resolve([]);
                }
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 更新产品工序的关联
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq252": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var productId = params.all.productId
        var workingProcedureId = params.all.workingProcedureId
        var price = params.all.price

        model.ProductHasWorkingProcedure.findOne({
            where: {
                productId: productId,
                workingProcedureId: workingProcedureId,
            }
        })
            .then(function (relation) {
                if (relation) {
                    if (price == '0' || price == '') {
                        model.ProductHasWorkingProcedure.destroy({
                            where: {id: relation.id}
                        })
                    } else {
                        model.ProductHasWorkingProcedure.update({price: price}, {
                            where: {id: relation.id}
                        })
                    }

                } else {
                    if (price != '0' && price != '') {
                        model.ProductHasWorkingProcedure.create(
                            {
                                productId: productId,
                                workingProcedureId: workingProcedureId,
                                price: price,
                                factoryId: factoryId,
                            }
                        )
                    }
                }
            })


        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取产品客户关联列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq253": function (params) {
        var deferred = Q.defer();
        var that = this;


        var retResult = {}
        model.ProductClientPrice.findAll({
            where: {factoryId: params.all.factoryId},
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Client,
            },
                {
                    model: model.Product,
                }
            ],
        })
            .then(function (result) {
                retResult.rows = JSON.parse(JSON.stringify(result))
                return model.Product.findAll({where: {factoryId: params.all.factoryId}})
            })
            .then(function (products) {
                retResult.products = JSON.parse(JSON.stringify(products))
                return model.Client.findAll({where: {factoryId: params.all.factoryId}})
            })
            .then(function (clients) {
                retResult.clients = JSON.parse(JSON.stringify(clients))
            })
            .then(function () {
                deferred.resolve(retResult);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 更新产品客户的关联
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq254": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var productId = params.all.productId
        var clientId = params.all.clientId
        var price = params.all.price

        model.ProductClientPrice.findOne({
            where: {
                productId: productId,
                clientId: clientId,
            }
        })
            .then(function (relation) {
                if (relation) {
                    if (price == '0' || price == '') {
                        model.ProductClientPrice.destroy({
                            where: {id: relation.id}
                        })
                    } else {
                        model.ProductClientPrice.update({price: price}, {
                            where: {id: relation.id}
                        })
                    }

                } else {
                    if (price != '0' && price != '') {
                        model.ProductClientPrice.create(
                            {
                                productId: productId,
                                clientId: clientId,
                                price: price,
                                factoryId: factoryId,
                            }
                        )
                    }
                }
            })


        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 查找单个产品客户的关联
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq255": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var productId = params.all.productId
        var clientId = params.all.clientId

        model.ProductClientPrice.findOne({
            where: {
                productId: productId,
                clientId: clientId,
            }
        })
            .then(function (result) {
                console.log(JSON.stringify(result));
                deferred.resolve(result);
            })
        return deferred.promise;
    },
    /**
     * 获取客户信息
     * Author：factoryId
     * 必传参数：factoryId
     * 可选参数：clientName
     */
    "rq311": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var query = params.requiredParams
        query.factoryId = factoryId
        var loadOrders = params.optionalParams.loadOrders; //是否加载订单
        var include = []
        if (loadOrders) {
            include.push(
                {
                    model: model.Order,
                    where: {close: 0},
                    include: [
                        {
                            model: model.Order_Product,
                        }
                    ]
                }
            )
        }

        model.Client.findAndCountAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: include
        })
            .then(function (result) {
                result = countPage.count(result);
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 新增客户弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq312": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 新增客户
     * Author：Brave
     * 必传参数：data
     * 可选参数：
     */
    "rq313": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var client = params.all.client;
        client.factoryId = factoryId;

        model.Client.create(client)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 客户信息修改弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq314": function (params) {
        var deferred = Q.defer();
        var that = this;


        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 修改客户信息
     * Author：Brave
     * 必传参数：
     * 可选参数：
     */
    "rq315": function (params) {
        var deferred = Q.defer();
        var that = this;

        var client = params.all.client;
        model.Client.update(client, {where: {id: client.id}})
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 客户总览弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq316": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = {
            factoryId: params.all.factoryId
        }
        model.Client.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [ //关联查询
                {

                    model: model.Order,
                    order: [
                        ['createdAt', 'DESC'],
                    ],
                },
            ]
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 查询订单
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq317": function (params) {
        var deferred = Q.defer();
        var that = this;

        var clientId = params.all.clientId;
        var clientName = params.all.clientName;
        var dateStart = params.all.dateStart;
        var dateEnd = params.all.dateEnd;
        delete params.all['clientId']
        delete params.all['clientName']
        delete params.all['dateStart']
        delete params.all['dateEnd']

        var query = params.all

        if (dateStart) {
            query.createdAt = {
                [Op.gt]: new Date(dateStart).getTime()
            }
        }

        // TODO 添加日期多条件限制
        // if (dateEnd) {
        //     query.createdAt[Op.lt] = new Date(dateStart).getTime(dateEnd)
        // }

        var clientQuery = {}
        if (clientId) {
            clientQuery.id = clientId;
        }
        if (clientName) {
            clientQuery.name = clientName;
        }

        var count
        var retData
        //console.log(query);
        model.Order.findAndCountAll({
            where: query,
            include: [ //关联查询
                {model: model.Order_Product},
                {
                    model: model.Client,
                    where: clientQuery
                },
            ],
        })
            .then(function (result) {
                retData = result
                return model.Order.findAndCountAll({
                    where: query,
                })
            })
            .then(function (result) {
                retData.count = result.count;
                retData = countPage.count(retData);
            })
            .then(function () { //计算已收金额（已出库的成品订单金额）
                var data = retData.rows;
                Rx.Observable.create(function (observer) {
                    for (var i = 0; i < data.length; i++) {
                        var exe = function (i) {
                            var item = data[i];
                            var orderNo = item.orderNo
                            var query = {
                                factoryId: params.all.factoryId,
                                type: 'out'
                            }
                            model.EndProductOrder.findAll({
                                where: query
                            })
                                .then(function (result) {
                                    var records = result;
                                    var totalPayed = 0;
                                    for (var j = 0; j < records.length; j++) {
                                        var record = records[j];
                                        totalPayed = totalPayed + record.sum;
                                    }
                                    item.payed_amount = totalPayed
                                    observer.next(item)
                                })
                        }
                        exe(i);
                    }
                })
                    .bufferCount(data.length) //所有异步循环都处理完毕，才执行下一步
                    .subscribe(function (result) {
                        deferred.resolve(retData);
                    })
                if (data.length == 0) {
                    deferred.resolve(retData);
                }
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 显示订单详情弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq318": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 显示订单详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq319": function (params) {
        var deferred = Q.defer();
        var that = this;

        return deferred.promise;
    },
    /**
     * 入账弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq320": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 入账信息显示
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq321": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 显示订单列表
     * Author：brave
     * 必传参数：
     * 可选参数：page,clientName,id,createdAt,deleveryDate,isClosed
     */
    "rq322": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var query = params.all;

        var orderNo = params.all.orderNo;
        var create_user_id = params.all.create_user_id;

        query = require('./countDate.js').countDate(query, params.dateParams)
        //console.log('query+++++++++', query);

        if (orderNo) {
            query.orderNo = orderNo;
        }
        if (create_user_id) {
            query.create_user_id = create_user_id;
        }

        var productQuery = {}
        var productId = params.all.productId;
        if (productId) {
            productQuery.id = productId;
        }

        var clientQuery = {}
        var clientId = params.all.clientId;
        if (clientId) {
            clientQuery.id = clientId;
        }

        delete query['productId']
        delete query['clientId']

        model.Order.findAndCountAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [ //关联查询
                {
                    model: model.Order_Product,
                    where: productQuery,
                },
                {
                    model: model.Client,
                    where: clientQuery
                }
            ],
        })
            .then(function (result) {
                result = countPage.count(result);
                result = JSON.parse(JSON.stringify(result))
                var rows = result.rows;
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    try {
                        row.clientName = row.client.name;
                    } catch (e) {
                    }
                    var order_products = row.order_products;
                    var pieceSum = 0
                    var priceSum = 0
                    var numberSum = 0
                    var delivered = 0
                    for (var j = 0; j < order_products.length; j++) {
                        var product = order_products[j];
                        pieceSum += product.piece
                        priceSum += product.price
                        numberSum += product.number
                        delivered += product.deliveried
                    }
                    row.pieceSum = pieceSum
                    row.priceSum = priceSum
                    row.numberSum = numberSum;
                    row.delivered = delivered;
                }

                var rq322 = require('./rq322')

                rq322.getDeliveredInfo(factoryId, result.rows) //获取交付情况
                    .then(function (rows) {
                        deferred.resolve(result);
                    })
                    .catch(function (e) {
                        deferred.reject(e)
                    })


            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 订单新增弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq323": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 订单新增
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq324": function (params) {
        var deferred = Q.defer();
        var that = this;

        var clientId = params.all.clientId;
        var factoryId = params.all.factoryId;
        var order = params.all.order;
        order.delivered = 0; //默认交付状态
        order.close = 0; //默认封存状态
        order.factoryId = factoryId;
        order.clientId = clientId;
        var orderProducts = params.all.orderProducts;

        var newOrder
        try {
            var counted = require('./countSum.js').countOrderSum(orderProducts);
            for (var x in counted) {
                order[x] = counted[x]
            }
        } catch (e) {
            //console.log;
        }
        model.Order.create(order)
            .then(function (result) {
                newOrder = result;
                var orderId = result.id;
                Rx.Observable.create(function (observer) {
                    for (var i = 0; i < orderProducts.length; i++) {
                        var exe = function (i) {
                            var product = orderProducts[i];
                            product.orderId = orderId;
                            product.factoryId = factoryId;
                            model.Order_Product.upsert(product)
                                .then(function (result) {
                                    observer.next(result)
                                })
                        };
                        exe(i)
                    }
                })
                    .bufferCount(orderProducts.length) //所有异步循环都处理完毕，才执行下一步
                    .subscribe(function (result) {
                        newOrder.orderProducts = result
                        deferred.resolve(newOrder);
                    })
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 显示订单详情弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq325": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取订单详情
     * Author：
     * 必传参数：
     * 可选参数：showProduct,showReceivable
     */
    "rq326": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取出库单记录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq327": function (params) {
        var deferred = Q.defer();
        var that = this;

        that.rq624(params) //复用 获取成品出入库记录
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 修改订单信息
     * Author：brave
     * 必传参数：data
     * 可选参数：
     */
    "rq328": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var order = params.all.order;
        order.factoryId = factoryId;
        var order_products = params.all.orderProducts;

        try {
            var counted = require('./countSum.js').countOrderSum(order_products);
            for (var x in counted) {
                order[x] = counted[x]
            }
        } catch (e) {
            //console.log;
        }
        model.Order.update(order, {
            where: {id: order.id}
        })
            .then(function (result) {
                for (var i = 0; i < order_products.length; i++) {
                    var orderProduct = order_products[i];
                    orderProduct.orderId = order.id
                    model.Order_Product.upsert(orderProduct)
                }
                setTimeout(function () {
                    deferred.resolve(result);
                }, 1000)
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 封存订单
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq329": function (params) {
        var deferred = Q.defer();
        var that = this;

        var id = params.all.id;

        model.Order.update({close: 1},
            {where: {id: id}}
        ).then(function (result) {
            deferred.resolve(result);
        })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 获取未交付订单列表
     * Author：brave
     * 必传参数：
     * 可选参数：createAt,deliveredDate,create_user,clientName,orderId,productName
     */
    "rq411": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var orderNo = params.all.orderNo;
        var create_user_id = params.all.create_user_id;


        // TODO 上生产修改查询条件 delivered 0
        var orderQuery = {
            factoryId: factoryId,
            // delivered: 0, //测试期间，先放开所有订单数据。
            close: 0,
        }
        if (orderNo) {
            orderQuery.orderNo = orderNo;
        }
        if (create_user_id) {
            orderQuery.create_user_id = create_user_id;
        }

        var productQuery = {}
        var productId = params.all.productId;
        if (productId) {
            productQuery.id = productId;
        }

        var clientQuery = {}
        var clientId = params.all.clientId;
        if (clientId) {
            clientQuery.id = clientId;
        }

        orderQuery = require('./countDate.js').countDate(orderQuery, params.dateParams)
        //console.log(orderQuery);
        var retData
        model.Order.findAndCountAll({
            where: orderQuery,
            order: [
                ['id', 'ASC'],
            ],
            include: [ //关联查询
                {
                    model: model.Order_Product,
                    where: productQuery
                },
                {
                    model: model.Client,
                    where: clientQuery
                }
            ],
        })
            .then(function (result) {
                retData = result
            })
            .then(function (result) {
                retData = countPage.count(retData);
                retData = JSON.parse(JSON.stringify(retData))
                var rows = retData.rows;
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    row.clientName = row.client.name;
                    var order_products = row.order_products;
                    var pieceSum = 0
                    var priceSum = 0
                    var numberSum = 0
                    var delivered = 0
                    for (var j = 0; j < order_products.length; j++) {
                        var product = order_products[j];
                        pieceSum += product.piece
                        priceSum += product.price
                        numberSum += product.number
                        delivered += product.deliveried
                    }
                    row.pieceSum = pieceSum
                    row.priceSum = priceSum
                    row.numberSum = numberSum;
                    row.delivered = delivered;
                }

                deferred.resolve(retData);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 获取未交付产品
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq412": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;
        var retData
        model.Order_Product.findAndCountAll({
            where: {
                factoryId: factoryId,
                // attributes: [[sequelize.fn('DISTINCT', sequelize.col('type')), 'type']]
            },
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Order,
                where: {
                    // TODO 查找 获取未交付产品 测试用
                    // delivered: 0,
                    close: 0,
                }, include: [{
                    model: model.Order_Product,
                }]
            }],
        })
            .then(function (result) {
                retData = result
                retData = countPage.count(retData);

            })
            .then(function () {
                var sql = "select  op.type,sum(op.number),count(o.id)   from   orders o   inner   join   order_products op on o.id=op.orderId " +
                    " where o.close = 0 and o.delivered = 0 and op.factoryId =  " + factoryId
                    + " group by op.type"
                return sequelize.query(sql)
            })
            .then(([results, metadata]) => {
                var unDeliveredProducts = results;
                retData['unDeliveredProducts'] = unDeliveredProducts
                deferred.resolve(retData);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 根据产品获取未交付订单列表弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq413": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 根据产品获取未交付订单列表
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq414": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var type = params.all.type

        var sql = "select  o.*   from   orders o inner join order_products op on o.id=op.orderId " +
            " where o.close = 0 and o.delivered = 0 and op.factoryId =  " + factoryId
        sequelize.query(sql)
            .then(([results, metadata]) => {
                deferred.resolve(results);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 新增进度弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq415": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 新增进度
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq416": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var productId = params.all.productId
        var process = params.all.data
        var procedures;
        process.factoryId = factoryId
        process.productId = productId
        process.factoryUniqueId = factoryId + '-' + process.product_batch //工厂范围的唯一id限制
        process.closed = 0

        //console.log('productId++++++++++++++++++', productId);

        model.ProductHasWorkingProcedure.findAll(
            {
                where: {
                    productId: productId
                },
                include: [{
                    model: model.Working_Procedure,
                }]
            }
        )
            .then(function (result) {
                //console.log('result++++++++++++++++++', JSON.stringify(result, null, 2));
                var working_procedures = result;
                procedures = []
                for (var i = 0; i < working_procedures.length; i++) {
                    var relation = working_procedures[i];
                    if (relation.working_procedure) {
                        var procedure = {
                            price: relation.price,
                            name: relation.working_procedure.name,
                            orderNum: relation.orderNum,
                        }
                        procedures.push(procedure)
                    }
                }
                return model.Production_Process.create(process)
            })

            .then(function (result) {
                var processId = result.id
                Rx.Observable.create(function (observer) {
                    procedures.push({name: "特殊", factoryId: factoryId, price: 0, orderNum: 1000})
                    for (var i = 0; i < procedures.length; i++) {
                        var exe = function (i) {
                            var procedure = procedures[i];
                            procedure.factoryId = factoryId
                            procedure.productionProcessId = processId
                            //console.log(procedure);
                            // observer.next(result)
                            model.Production_Process_Procedure.create(procedure)
                                .then(function (result) {
                                    observer.next(result)
                                })
                        }
                        exe(i) //执行闭包
                    }
                })
                    .bufferCount(procedures.length) //所有异步循环都处理完毕，才执行下一步
                    .subscribe(function (result) {

                        var params = {all: {factoryId: factoryId}}
                        that.rq417(params)
                            .then(function (result) {
                                var lastResult = result[0]
                                deferred.resolve(lastResult);
                            })
                    })
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 工单进度搜索
     * Author：
     * 必传参数：
     * 可选参数：productName,batchNo,productProcedure
     */
    "rq417": function (params) {
        var deferred = Q.defer();
        var that = this;
        var showAll = params.all.showAll;
        var query = params.all;
        var productName = params.all.productName

        delete query['productName']
        delete query['showAll']

        var retResult;

        var processQuery = {}
        var procedureQuery = {}

        query = require('./countDate.js').countDate(query, params.dateParams)

        if (productName) {
            query['product_model'] = {[Op.like]: '%' + productName + '%'}
        }
        //console.log(query);
        var queryOptions = {
            where: query,
            include: [{
                model: model.Production_Process_Procedure,
            }],
            order: [
                ['createdAt', 'DESC'],
            ],
        }
        if (showAll) {
            queryOptions.limit = 1000;
        } else {
            queryOptions.limit = 50;
        }

        model.Production_Process.findAll(queryOptions)
            .then(function (processes) {
                processes = JSON.parse(JSON.stringify(processes)); // 查出所有的进度记录
                retResult = processes
                Rx.Observable.create(function (processObserver) { //处理每个进度
                    for (var i = 0; i < processes.length; i++) {
                        var exe = function (i) {
                            var process = processes[i]
                            var productionProcessId = process.id
                            var procedures = process.production_process_procedures;
                            Rx.Observable.create(function (procedureObserver) { //处理每个流程的数量合计
                                for (var i = 0; i < procedures.length; i++) {
                                    var exe = function (i) {
                                        var procedure = procedures[i]
                                        var procedureId = procedure.id;
                                        model.Work_Order.findAll({
                                            where: {
                                                productionProcessId: productionProcessId,
                                                productionProcessProcedureId: procedureId,
                                            }
                                        })
                                            .then(function (workOrders) {
                                                var totalNumber = 0
                                                for (var j = 0; j < workOrders.length; j++) {
                                                    var workOrder = workOrders[j];
                                                    totalNumber = totalNumber + workOrder.number
                                                }
                                                procedure.workOrders = workOrders; //此工序下的所有工单
                                                procedure.totalNumber = totalNumber;//此工序下所有工单的数量合计
                                                //console.log("procedure.totalNumber:", procedure.totalNumber);
                                                procedureObserver.next(procedure)
                                            })
                                    };
                                    exe(i)
                                }
                            })
                                .bufferCount(procedures.length) //所有异步循环都处理完毕，才执行下一步
                                .subscribe(function () {
                                    processObserver.next()
                                })
                            if (procedures.length == 0) {
                                //console.log("procedures.length:", 0);
                                processObserver.next()
                            }
                        };
                        exe(i)
                    }
                })
                    .bufferCount(processes.length) //所有异步循环都处理完毕，才执行下一步
                    .subscribe(function (result) {
                        deferred.resolve(retResult);
                    })
                if (processes.length == 0) {
                    deferred.resolve(retResult);
                }
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 显示进度弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq418": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 显示单个工序工人贡献的数量弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq419": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取单个工序工人贡献的数量
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq420": function (params) {
        var deferred = Q.defer();
        var that = this;

        var productionProcessProcedureId = params.all.productionProcessProcedureId

        model.Work_Order.findAll({
            where: params.all
        })
            .then(function (workOrders) {
                var total = 0
                for (var i = 0; i < workOrders.length; i++) {
                    var workOrder = workOrders[i];
                    total = total + workOrder.number;
                }
                var retData = {total: total, workOrders: workOrders}
                deferred.resolve(retData);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 封存进度
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq421": function (params) {
        var deferred = Q.defer();
        var that = this;

        var processId = params.all.processId
        var factoryId = params.all.factoryId

        model.Production_Process.update(
            {closed: 1},
            {
                where: {id: processId}
            }
        )
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 检查进度工序数量
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq422": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取工单列表
     * Author：
     * 必传参数：
     * 可选参数：createAt,batchNo,descrition,employeeName,productName,workPrice,id,productProcedure,department
     */
    "rq423": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all;


        query = require('./countDate.js').countDate(query, params.dateParams)

        model.Work_Order.findAndCountAll({
            where: query,
            include: [
                {
                    model: model.Work_Order_OutSource_Info,
                    include: [{
                        model: model.Work_Order,
                    }],
                },
                {
                    model: model.Employee,
                    include: [{
                        model: model.Department,
                    }],
                }],
        })
            .then(function (result) {
                var orders = result.rows;
                for (var i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    order.wages = order.price * order.number
                    order.wages = order.wages.toFixed(3)
                }
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 新增工单弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq424": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 新增工单
     * Author：
     * 必传参数：brave
     * 可选参数：isOutSource
     */
    "rq425": function (params) {
        var deferred = Q.defer();
        var that = this;

        var isOutSource = params.all.isOutSource
        var factoryId = params.all.factoryId
        var employeeId = params.all.employeeId
        var productionProcessId = params.all.productionProcessId
        var productionProcessProcedureId = params.all.productionProcessProcedureId
        var workOrder = params.all.data;


        if (isOutSource == 0) { // 非外包
            workOrder.productionProcessId = productionProcessId;
            workOrder.factoryId = factoryId;
            workOrder.employeeId = employeeId;
            workOrder.is_outsourcing = 0;
            workOrder.productionProcessProcedureId = productionProcessProcedureId
            if (workOrder.id) {
                model.Work_Order.upsert(workOrder, {returning: true})
                    .then(function (result) {
                        deferred.resolve(result);
                    })
                    .catch(function (e) {
                        deferred.reject(e)
                    })
            } else {
                model.Work_Order.create(workOrder)
                    .then(function (result) {
                        deferred.resolve(result);
                    })
                    .catch(function (e) {
                        deferred.reject(e)
                    })
            }

        } else { // 外包
            var retResult = {}
            var supplierId

            var outSourceInfo = params.all.outSourceInfo
            var workOrders = params.all.data

            try {
                var result = require('./countSum.js').countWorkOrderOutSourceInfoSum(workOrders)
                outSourceInfo.sum = result.sum;
            } catch (e) {
                //console.log;
            }

            var supplierId = params.all.supplierId
            outSourceInfo.supplierId = params.all.supplierId
            outSourceInfo.factoryId = factoryId
            outSourceInfo.factoryUniqueId = factoryId + '-' + outSourceInfo.sn //工厂范围的唯一性限制


            var promiseFunction;
            var id = outSourceInfo.id;
            if (id) {
                promiseFunction = model.Work_Order_OutSource_Info.upsert(outSourceInfo)
            } else {
                promiseFunction = model.Work_Order_OutSource_Info.create(outSourceInfo)
            }
            promiseFunction.then(function (result) {
                retResult['outSourceInfo'] = result;
                var workOrderOutSourceInfoId;
                if (id) {
                    workOrderOutSourceInfoId = id
                } else {
                    workOrderOutSourceInfoId = result.id
                }

                Rx.Observable.create(function (observer) {
                    for (var i = 0; i < workOrders.length; i++) {
                        var exe = function (i) {
                            var workOrder = workOrders[i]
                            workOrder.is_outsourcing = 1;
                            workOrder.factoryId = factoryId;
                            workOrder.supplierId = supplierId;
                            workOrder.workOrderOutSourceInfoId = workOrderOutSourceInfoId;
                            model.Work_Order.upsert(workOrder)
                                .then(function (result) {
                                    observer.next(result)
                                })
                        };
                        exe(i)
                    }
                })
                    .bufferCount(workOrders.length) //所有异步循环都处理完毕，才执行下一步
                    .subscribe(function (result) {
                        retResult['workOrders'] = result
                        deferred.resolve(retResult);
                    })
            })
                .catch(function (e) {
                    deferred.reject(e)
                })
        }
        return deferred.promise;
    },
    /**
     * 显示工单详情弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq426": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 显示修改工单弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq427": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 保存工单修改
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq428": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 物料消耗弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq429": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 保存物料消耗
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq430": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var productId = params.all.productId
        var materialId = params.all.materialId
        var data = params.all.data
        data.factoryId = factoryId
        data.productId = productId
        data.materialId = materialId

        model.Material_In_Out_Record.create(data)
            .then(function (result) {
                deferred.resolve(params);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 成品入库弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq431": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 工单模块成品入库
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq432": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var processId = params.all.processId
        var employeeId = params.all.employeeId
        var data = params.all.data
        data.factoryId = factoryId;
        data.employeeId = employeeId;

        model.EndProductInOut.create(data)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 根据产品型号获取可消耗的物料
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq433": function (params) {
        var deferred = Q.defer();
        var that = this;

        var productId = params.all.productId

        model.Material.findAll({
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Product,
                where: {
                    id: productId,
                },
            }],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 获取外包工单列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq434": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var query = {factoryId: factoryId}

        model.Work_Order_OutSource_Info.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Work_Order
            }]
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 保存进度
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq435": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var data = params.all.data
        model.Production_Process.update(data, {
            where: {id: data.id, factoryId: factoryId}
        })
            .then(function (result) {
                deferred.resolve(result);

            })
        return deferred.promise;
    },
    /**
     * 获取应收核算
     * Author：
     * 必传参数：
     * 可选参数：createAt,createdName,deliveredDate,clientName,orderId,productName
     */
    "rq511": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击货款入账
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq512": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取货款入账列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq513": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出工资条
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq514": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取应付核算
     * Author：
     * 必传参数：
     * 可选参数：createAt,supplierName
     */
    "rq515": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var supplierId = params.all.supplierId
        var orderTypeId = params.all.orderTypeId
        if (!orderTypeId) {
            orderTypeId = '0'
        }
        var query = {factoryId: factoryId}
        var retData = {orders: []}

        query = require('./countDate.js').countDate(query, params.dateParams)
        if (supplierId) {
            query.supplierId = supplierId;
        }
        var endProductQuery = {factoryId: factoryId, type: 'in'};
        endProductQuery = require('./countDate.js').countDate(endProductQuery, params.dateParams)
        if (supplierId) {
            endProductQuery.supplierId = supplierId;
        }
        model.EndProductOrder.findAll({
            where: endProductQuery,
            order: [
                ['id', 'ASC'],
            ],
            include: [
                {
                    model: model.EndProductInOut,
                },
                {
                    model: model.Supplier,
                }
            ]
        })
            .then(function (result) {
                result = JSON.parse(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    var element = result[i];
                    element.orderType = '成品入库'
                    element.orderTypeId = '1'
                    element.supplierName = element.supplier.name
                }

                retData.endProductInOuts = result
                if (orderTypeId == '0' || orderTypeId == '1') {
                    retData.orders = retData.orders.concat(result)
                }

            })
            .then(function () {

                return model.Material_In_Order.findAll(
                    {
                        where: query,
                        order: [
                            ['id', 'ASC'],
                        ],
                        include: [
                            {
                                model: model.Material_In_Out_Record,
                            },
                            {
                                model: model.Supplier,
                            }
                        ]
                    }
                )
            })
            .then(function (result) {
                result = JSON.parse(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    var element = result[i];
                    element.orderType = '物料入库'
                    element.orderTypeId = '2'
                    element.supplierName = element.supplier.name
                }
                retData.material_In_Orders = result;
                if (orderTypeId == '0' || orderTypeId == '2') {
                    retData.orders = retData.orders.concat(result)
                }

            })
            .then(function () {
                return model.Work_Order_OutSource_Info.findAll(
                    {
                        order: [
                            ['id', 'ASC'],
                        ],
                        where: query,
                        include: [
                            {
                                model: model.Work_Order,
                            },
                        ]


                    }
                )
            })
            .then(function (result) {
                result = JSON.parse(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    var element = result[i];
                    element.orderType = '工单外包'
                    element.orderTypeId = '3'
                    element.supplierName = element.name
                }
                retData.Work_Order_OutSource_Infos = result;
                if (orderTypeId == '0' || orderTypeId == '3') {
                    retData.orders = retData.orders.concat(result)
                }
            })
            .then(function () { //计算应付
                var orders = retData.orders
                for (var i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    var sum = order.sum ? order.sum : 0
                    var payed = order.payed ? order.payed : 0
                    var reduce = order.reduce ? order.reduce : 0
                    var accountsPayable = 0;
                    accountsPayable = sum - payed - reduce
                    order.accountsPayable = accountsPayable;
                }
            })
            .then(function () {
                deferred.resolve(retData);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 点击应付核算详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq516": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取应付核算详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq517": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击添加应付核算
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq518": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 添加应付核算
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq519": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除应付核算
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq520": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出应付核算
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq521": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 出账
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq522": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取工资条列表
     * Author：
     * 必传参数：
     * 可选参数：startDate,endDate,employeeNo,employeeName,department
     */
    "rq523": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all;
        var factoryId = query.factoryId;

        query = require('./countDate.js').countDate(query, params.dateParams)

        var employeeId = params.includeParams.employeeId
        var employeeName = params.includeParams.employeeName
        var departmentId = params.includeParams.departmentId

        var employeeQuery = {}
        if (employeeId) {
            employeeQuery.id = employeeId
        }
        if (employeeName) {
            employeeQuery.name = employeeName
        }
        var departmentQuery = {}
        if (departmentId) {
            departmentQuery.id = departmentId;
        }


        model.Work_Order.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [
                {
                    model: model.Work_Order_OutSource_Info,
                    include: [{
                        model: model.Work_Order,
                    }],
                },
                {
                    model: model.Employee,
                    where: employeeQuery,
                    include: [{
                        model: model.Department,
                        where: departmentQuery,
                    }],
                }],
        })
            .then(function (result) {
                //console.log(JSON.stringify(result));
                result = JSON.parse(JSON.stringify(result));
                var uniqueEmployeeId = {}
                for (var i = 0; i < result.length; i++) {
                    var item = result[i];
                    if (item.employeeId) {
                        var employeeId = item.employeeId
                        uniqueEmployeeId[employeeId] = {
                            id: employeeId,
                            department: item.employee.department.name,
                            name: item.employee.name,
                            work_number: item.employee.work_number,
                            orders: [],
                            total: 0,
                            wages: 0,
                        }
                    }
                }
                for (var id in uniqueEmployeeId) {
                    for (var i = 0; i < result.length; i++) {
                        var workOrder = result[i];
                        if (workOrder.employeeId == id) {
                            uniqueEmployeeId[id].employeeId = id
                            uniqueEmployeeId[id].orders.push(workOrder)
                            uniqueEmployeeId[id].total += workOrder.price * workOrder.number;
                            uniqueEmployeeId[id].wages += workOrder.price * workOrder.number;
                        }
                    }
                }

                var retData = []
                for (var id in uniqueEmployeeId) {
                    retData.push(uniqueEmployeeId[id])
                }
                return retData
            })
            .then(function (retData) {
                if (retData.length > 0) {
                    Rx.Observable.create(function (observer2) {
                        for (var j = 0; j < retData.length; j++) {
                            var exe = function (j) {
                                var emp = retData[j]
                                var fixQuery = {
                                    employeeId: emp.employeeId
                                }
                                var fixDateParams = {date: params.dateParams.createdAt ? params.dateParams.createdAt : {}}
                                fixQuery = require('./countDate.js').countDate(fixQuery, fixDateParams)
                                model.Work_Order_Fix.findAll({
                                    where: fixQuery,
                                })
                                    .then(function (fixResult) {
                                        for (var i = 0; i < fixResult.length; i++) {
                                            var fixResultElement = fixResult[i];
                                            emp.wages += fixResultElement.total;
                                        }
                                        observer2.next()
                                    })
                            }
                            exe(j)
                        }
                    })
                        .bufferCount(retData.length) //所有异步循环都处理完毕，才执行下一步
                        .subscribe(function (result) {
                            deferred.resolve(retData);
                        })
                } else {
                    deferred.resolve(retData);
                }
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 导出工资条
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq524": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取工资条修正记录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq525": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all;

        query = require('./countDate.js').countDate(query, params.dateParams)

        var employeeId = params.includeParams.employeeId
        var departmentId = params.includeParams.departmentId
        var employeeName = params.includeParams.employeeName
        var total = params.includeParams.total


        var employeeQuery = {}
        if (employeeId) {
            employeeQuery.id = employeeId
        }
        if (employeeName) {
            employeeQuery.name = employeeName
        }
        var departmentQuery = {}
        if (departmentId) {
            departmentQuery.id = departmentId;
        }
        if (total) { //范围
            query.total = {}
            query.total[Op.gte] = total;
        }

        model.Work_Order_Fix.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Employee,
                where: employeeQuery,
                include: [{
                    model: model.Department,
                    where: departmentQuery
                }]
            }]
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 导出工资条修正记录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq526": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击应扣新增
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq527": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 保存应扣新增
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq528": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var employeeId = params.all.employeeId
        var workOrderFix = params.all.workOrderFix
        workOrderFix.employeeId = employeeId;
        workOrderFix.factoryId = factoryId;

        model.Work_Order_Fix.create(workOrderFix)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 获取产品物料记录
     * Author：page
     * 必传参数：page
     * 可选参数：modelId
     */
    "rq611": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all
        var materialSubQuery = JSON.parse(JSON.stringify(query))
        var recordSubQuery = JSON.parse(JSON.stringify(query))
        if (params.dateParams) {
            query = require('./countDate.js').countDate(query, params.dateParams)
            materialSubQuery = require('./countDate.js').countDate(materialSubQuery, params.dateParams)
            recordSubQuery = require('./countDate.js').countDate(recordSubQuery, params.dateParams)
        }
        //console.log(query);
        model.Material_In_Out_Record.findAll({
                where: query,
                order: [
                    ['id', 'ASC'],
                ],
                // attributes: [[Sequelize.literal('DISTINCT `product_model`'), 'product_model']]
                attributes: [[sequelize.fn('DISTINCT', sequelize.col('product_model')), 'product_model']]
            }
        ).then(function (products) {
            products = JSON.parse(JSON.stringify(products))
            Rx.Observable.create(function (observer) {
                for (var i = 0; i < products.length; i++) {
                    var exe = function (i) {
                        var product = products[i];
                        materialSubQuery['product_model'] = product.product_model
                        model.Material_In_Out_Record.findAll(
                            {
                                where: materialSubQuery,
                                attributes: [[sequelize.fn('DISTINCT', sequelize.col('name')), 'name']]
                            },
                        )
                            .then(function (materials) {
                                materials = JSON.parse(JSON.stringify(materials))

                                Rx.Observable.create(function (observer2) {
                                    for (var j = 0; j < materials.length; j++) {
                                        var exe = function (i) {
                                            var material = materials[j];
                                            recordSubQuery['product_model'] = product.product_model.trim()
                                            recordSubQuery['name'] = material.name.trim()
                                            model.Material_In_Out_Record.findAll(
                                                {
                                                    where: recordSubQuery,
                                                    attributes: ['name', 'number', 'price', 'createdAt', 'type']
                                                },
                                            )
                                                .then(function (result) {
                                                    ////console.log(JSON.stringify(result));
                                                    material['in_out_record'] = JSON.parse(JSON.stringify(result))
                                                    observer2.next(material)
                                                })
                                        }
                                        exe(i)
                                    }
                                })
                                    .bufferCount(materials.length) //所有异步循环都处理完毕，才执行下一步
                                    .subscribe(function (result) {
                                        product['materials'] = JSON.parse(JSON.stringify(result))
                                        observer.next(product)
                                    })
                                if (materials.length == 0) {
                                    observer.next(product)
                                }
                            })
                    }
                    exe(i);
                }
            })
                .bufferCount(products.length) //所有异步循环都处理完毕，才执行下一步
                .subscribe(function (result) {
                    deferred.resolve(result);
                })
            if (products.length == 0) {
                deferred.resolve([]);
            }

        })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 获取物料入库记录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq612": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 物料修正弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq613": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 物料修正
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq614": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var record = params.all.data
        record.factoryId = factoryId

        model.Material_In_Out_Record.create(record)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 物料进仓弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq615": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 物料进仓
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq616": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var supplierId = params.all.supplierId

        var materialInOrder = params.all.materialInOrder
        materialInOrder.factoryId = factoryId
        materialInOrder.supplierId = supplierId
        materialInOrder.factoryUniqueId = factoryId + '-' + materialInOrder.sn; //工厂范围的唯一id限制

        var data = params.all.data

        var sum = 0

        for (var i = 0; i < data.length; i++) { //计算总金额
            var record = data[i];
            // record.sum = record.price * record.number
            record.sum = countSum.accMul(record.price, record.number)
            sum = sum + record.sum
        }
        materialInOrder.sum = sum


        var promiseFunction;
        var id = materialInOrder.id
        if (id) {
            promiseFunction = model.Material_In_Order.upsert(materialInOrder)
        } else {
            promiseFunction = model.Material_In_Order.create(materialInOrder)
        }

        promiseFunction.then(function (result) {
            var materialInOrderId
            if (id) {
                materialInOrderId = id
            } else {
                materialInOrderId = result.id
            }
            Rx.Observable.create(function (observer) {
                for (var i = 0; i < data.length; i++) {
                    var exe = function (i) {
                        var item = data[i];
                        // console.log(JSON.stringify(item));
                        item.receiverDate = materialInOrder.receiverDate
                        item.factoryId = factoryId
                        item.materialInOrderId = materialInOrderId
                        model.Material_In_Out_Record.upsert(item)
                            .then(function (result) {
                                observer.next(result)
                            })
                        observer.next('result')
                    }
                    exe(i);
                }
            })
                .bufferCount(data.length) //所有异步循环都处理完毕，才执行下一步
                .subscribe(function (result) {
                    deferred.resolve(result);
                })
        })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 产品物料进出仓详情弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq617": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取产品物料进出仓详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq618": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all

        query = require('./countDate.js').countDate(query, params.dateParams)

        model.Material_In_Out_Record.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Material_In_Order,
                include: [{
                    model: model.Material_In_Out_Record,
                }]
            }]
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 入库单详情弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq619": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取入库单详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq620": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 编辑入库单详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq621": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除入库单详情
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq622": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取成品库存表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq623": function (params) {
        var deferred = Q.defer();
        var that = this;

        var query = params.all
        var factoryId = query.factoryId;

        var createdAtStart = ''
        var createdAtEnd = ''
        if (params.dateParams) {
            query = require('./countDate.js').countDateSql(query, params.dateParams)
            createdAtStart = query.createdAt.gt;
            createdAtEnd = query.createdAt.lt
        }


        var sql = "select  io.product_model,sum(io.packing_amount),sum(io.number)   from   end_product_in_outs io " +
            " where  io.factoryId =  " + factoryId
            + createdAtStart
            + createdAtEnd
            + " group by io.product_model"

        //console.log('sql+++', sql);
        sequelize.query(sql)
        // model.EndProductInOut.findAll(
        //     {where: query}
        // )
            .then(function (result) {
                var resultToProcess = result[0]
                Rx.Observable.create(function (observer2) {
                    for (var j = 0; j < resultToProcess.length; j++) {
                        var exe = function (j) {
                            var p = resultToProcess[j]
                            model.Product.findOne({
                                where: {model: p.product_model, factoryId: factoryId}
                            })
                                .then(function (product) {
                                    var pResult = 0
                                    // console.log(product);
                                    try {
                                        console.log('product.packingnumber++++:', product.packingnumber);
                                        pResult = parseInt(p['sum(io.number)'] / product.packingnumber)
                                    } catch (e) {
                                        console.log(e);
                                        pResult = '/'
                                    }
                                    p['sum(io.packing_amount)'] = pResult
                                    observer2.next()
                                })


                        }
                        exe(j)
                    }
                })
                    .bufferCount(resultToProcess.length) //所有异步循环都处理完毕，才执行下一步
                    .subscribe(function (data) {
                        deferred.resolve(result);
                    })
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 获取成品出入库记录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq624": function (params) {
        var deferred = Q.defer();
        var that = this;


        var query = params.all
        if (params.dateParams) {
            query = require('./countDate.js').countDate(query, params.dateParams)
        }

        model.EndProductInOut.findAll({
            where: query,
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.EndProductOrder,
                include: [{
                    model: model.EndProductInOut,
                }],
            }],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 成品入库弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq625": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 仓库模块成品入库
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq626": function (params) {


        var deferred = Q.defer();
        var that = this;

        var type = params.all.type
        var factoryId = params.all.factoryId
        var clientId = params.all.clientId
        var supplierId = params.all.supplierId

        var endProductOrder = params.all.endProductOrder
        endProductOrder.type = type
        endProductOrder.factoryId = factoryId

        var data = params.all.data


        var sum = 0
        var retData;

        for (var i = 0; i < data.length; i++) { //计算总金额
            try {
                var record = data[i];
                record.sum = record.price * record.number
                sum = sum + record.sum
                if (type == 'out') { //出库使用负数
                    record.number = -1 * Math.abs(record.number)
                }
            } catch (e) {
            }
        }
        try {
            endProductOrder.sum = sum
        } catch (e) {
        }

        var id = endProductOrder.id
        var promiseFunction;
        if (id) {
            promiseFunction = model.EndProductOrder.upsert(endProductOrder)
        } else {
            promiseFunction = model.EndProductOrder.create(endProductOrder)
        }
        promiseFunction.then(function (result) {
            retData = result
            var endProductOrderId

            if (!id) {
                endProductOrderId = result.id
            } else {
                endProductOrderId = id;
            }

            Rx.Observable.create(function (observer) {
                for (var i = 0; i < data.length; i++) {
                    var exe = function (i) {
                        var item = data[i];
                        item.factoryId = factoryId
                        item.endProductOrderId = endProductOrderId
                        item.clientId = clientId
                        item.type = type
                        model.EndProductInOut.upsert(item)
                            .then(function (result) {
                                observer.next(result)
                            })

                        //TODO 自动创建批次
                        try {
                            var product_batch = item.product_batch;
                            model.Production_Process.findOne({
                                where: {
                                    product_batch: product_batch
                                }
                            })
                                .then(function (result) {
                                    if (!result) {
                                        //创建一个新批次
                                        var data = {
                                            product_model: item.product_model,
                                            product_batch: item.product_batch
                                        }
                                        var productId = item.productId;

                                        var params = {
                                            all: {
                                                factoryId: factoryId,
                                                productId: productId,
                                                data: data
                                            }
                                        }
                                        that.rq416(params)
                                    }
                                })
                        } catch (e) {
                        }
                    }
                    exe(i);
                }
            })
                .bufferCount(data.length) //所有异步循环都处理完毕，才执行下一步
                .subscribe(function (result) {
                    deferred.resolve(retData);
                })
        })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 成品出库弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq627": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 仓库模块成品出库
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq628": function (params) {
        var deferred = Q.defer();
        var that = this;

        var endProductOrder = params.all.endProductOrder
        that.rq626(params) //复用通用的出入库模块
            .then(function (result) {
                var sum = result.sum
                //出库，需要将相应订单的已收款、订单状态记录上去
                var orderNumber = endProductOrder.sn
                model.Order.update({accepted: sum, delivered: 1}, {
                    where: {
                        orderNo: orderNumber
                    }
                })
                    .then(function (result) {
                        deferred.resolve(result)
                    })


            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 成品修正弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq629": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 成品修正
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq630": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var record = params.all.data
        record.factoryId = factoryId
        model.EndProductInOut.create(record)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 出库单详情弹窗
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq631": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除出库单
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq632": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取工厂列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq811": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击添加工厂
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq802": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 添加工厂
     * Author：brave
     * 必传参数：
     * 可选参数：
     */
    "rq803": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factory = params.all.data;

        model.Factory.create(factory)
            .then(function (result) {
                var id = result.id;
                deferred.resolve(result);
            });

        return deferred.promise;
    },
    /**
     * 删除工厂
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq804": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 费用管理
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq805": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 添加工厂超级管理员
     * Author：brave
     * 必传参数：data
     * 可选参数：
     */
    "rq806": function (params) {
        var deferred = Q.defer();
        var that = this;

        var supervisor = params.all.data;

        model.FactorySupervisor.create(supervisor)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 删除工厂超级管理员
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq807": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 记录用户操作
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq808": function (params) {
        var deferred = Q.defer();
        var that = this;

        var record = params.all.data;
        record.factoryId = params.all.factoryId;

        model.OperationRecord.create(params.all.data)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 获取所有事件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq901": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击编辑单个事件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq902": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 编辑单个事件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq903": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取所有组件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq904": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击编辑单个组件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq905": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 编辑组件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq906": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取所有字段
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq907": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击编辑字段
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq908": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 编辑字段
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq909": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出事件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq910": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出组件
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq911": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 导出字段
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq912": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 检查订单编号是否唯一
     * Author：id
     * 必传参数：id
     * 可选参数：
     */
    "rq2011": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 简单查询生产进度里的产品
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2012": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId

        var query = {factoryId: factoryId}

        model.Product.findAll(
            {
                where: query,
                order: [
                    ['id', 'ASC'],
                ],
                include: [{
                    model: model.Working_Procedure,
                }
                ]
            }
        )
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 简单查询生产批次
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2013": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId;

        model.Production_Process.findAll(
            {
                where: {
                    factoryId: factoryId
                },
                order: [
                    ['id', 'ASC'],
                ],
            }
        )
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 简单查询所有工序
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2014": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId

        model.Production_Process_Procedure.findAll(
            {
                where: {factoryId: factoryId},
                attributes: [[sequelize.fn('DISTINCT', sequelize.col('name')), 'name']]
            }
        )
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 简单查询所有制单员
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2015": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId

        model.Customer.findAll(
            {
                where: {factoryId: factoryId},
                order: [
                    ['id', 'ASC'],
                ],
            }
        )
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 员工简单查询
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2016": function (params) {
        var deferred = Q.defer();
        var that = this;

        model.Employee.findAll({
            where: params.all,
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Department,
            }],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 部门简单查询
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2017": function (params) {
        var deferred = Q.defer();
        var that = this;

        model.Department.findAll({
            where: params.all,
            order: [
                ['id', 'ASC'],
            ],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 根据订单号查询交付情况
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2018": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 根据物料id查找现有物料数量
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq2019": function (params) {
        var deferred = Q.defer();
        var that = this;

        var materialId = params.all.id
        var productId = params.all.productId
        var factoryId = params.all.factoryId

        var sql = "select  r.name,sum(r.number)  from   material_in_out_records r "
            + " where r.factoryId =  " + factoryId
            + " and r.materialId= " + materialId
            + " and r.productId= " + productId
            + " group by r.name"
        sequelize.query(sql)
            .then(function (result) {
                deferred.resolve(result[0][0]);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 查找产品并带出批次与生产工序
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2020": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        model.Product.findAll({
            where: {factoryId: factoryId},
            order: [
                ['id', 'ASC'],
            ],
            include: [{
                model: model.Production_Process,
                where: {closed: 0},
                include: [{
                    model: model.Production_Process_Procedure,
                }]
            }],
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },

    /**
     * 根据用户名查找工厂id
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2021": function (params) {
        var deferred = Q.defer();
        var that = this;

        var name = params.all.name

        model.Customer.findOne({
            where: {name: name},
            include: [{
                model: model.Factory,
            }],
        })
            .then(function (result) {
                if (result) {
                    deferred.resolve(result.name);
                } else {
                    deferred.resolve('');
                }

            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 获取所有充值产品
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2022": function (params) {
        var deferred = Q.defer();
        var that = this;

        model.ChargePeriod.findAll()
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 通用创建接口
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq2111": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var modelName = params.all.model
        var data = params.all.data
        data.factoryId = factoryId;
        if (modelName == 'Product') {
            data.factoryUniqueId = factoryId + '-' + data.model //工厂范围的唯一限制
        }
        model[modelName].create(data)
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 通用更新接口
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq2112": function (params) {
        var deferred = Q.defer();
        var that = this;


        var modelName = params.all.model
        var data = params.all.data
        model[modelName].update(data, {
            where: {id: data.id}
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })


        return deferred.promise;
    },
    /**
     * 通用删除接口
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq2113": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var modelName = params.all.model
        var data = params.all.data
        model[modelName].findOne({
            where: {
                id: data.id,
                factoryId: factoryId,
            }
        })
            .then(function (result) {
                if (result) {
                    model[modelName].destroy({
                        where: {id: data.id}
                    })
                        .then(function () {
                            deferred.resolve(result);
                        })
                } else {
                    deferred.resolve(params);
                }
            })
            .catch(function (e) {
                deferred.reject(e)
            })

        return deferred.promise;
    },
    /**
     * 通用查询接口
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq2114": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var needAll = params.all.needAll
        var query = params.optionalParams;
        query.factoryId = factoryId;
        if (params.isRoot && needAll) {
            delete query['factoryId']
        }
        var modelName = params.all.model


        var order;
        if (modelName == 'Product') {
            order = ['model', 'ASC']
            if (params.optionalParams.modelKey) {
                query.model = params.optionalParams.modelKey
                delete query['modelKey']
            }
        } else {
            order = ['id', 'ASC']

        }
        var include = params.all.include
        var includeModels = []
        if (include) {
            for (var i = 0; i < include.length; i++) {
                var item = include[i];
                var object = {
                    model: model[item.model],
                }
                if (item.where) {
                    object.where = item.where
                }
                includeModels.push(object)
            }
        }
        console.log(includeModels);
        try {
            delete query['include']
        } catch (e) {
        }
        model[modelName].findAll({
            where: query,
            order: [
                order,
            ],
            include: includeModels
        })
            .then(function (result) {
                deferred.resolve(result);
            })
            .catch(function (e) {
                deferred.reject(e)
            })
        return deferred.promise;
    },
    /**
     * 通用批量删除接口
     * Author：
     * 必传参数：ids
     * 可选参数：
     */
    "rq2115": function (params) {
        var deferred = Q.defer();
        var that = this;

        var factoryId = params.all.factoryId
        var modelName = params.all.model
        var items = params.all.items

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            model[modelName].destroy({
                where: {id: item.id}
            })
        }


        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 通用导出接口
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2116": function (params) {
        var deferred = Q.defer();
        var that = this;

        var name = params.all.name;
        var data = params.all.data;
        var cols = data.cols;
        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];
            col.header = col.label;
            col.key = col.name;
            col.width = '10';
        }
        var items = data.array;
        var workbook = new Excel.Workbook();

        workbook.creator = 'system';
        workbook.created = new Date();
        var worksheet = workbook.addWorksheet(name);
        worksheet.columns = cols;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            worksheet.addRow(item)
        }
        var fileName = 'temp/' + name + '-' + parseInt(Math.random() * 100000000) + '.xls'
        var path = './public/' + fileName;
        workbook.xlsx.writeFile(path)
            .then(function () {
                deferred.resolve(fileName);
                setTimeout(function () { //3分钟后删除文件
                    fs.unlink(path, function (error) {
                        if (error) {
                            //console.log(error);
                            return false;
                        }
                        //console.log('删除文件成功');
                    })
                }, 180000)
            })
            .catch(function (e) {
                deferred.reject(e);
            })
        return deferred.promise;
    },
    /**
     * 批量导出接口
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2117": function (params) {
        var deferred = Q.defer();
        var that = this;

        var workbook = new Excel.Workbook();
        workbook.creator = 'system';
        workbook.created = new Date();

        var worksheet = workbook.addWorksheet('data');

        var data = params.all.data;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var name = item.name;
            var cols = item.dataSource.cols;
            var array = item.dataSource.array;

            var titleRow = {}
            var headRow = {}
            var footerRow = {}
            for (var j = 0; j < cols.length; j++) {
                var col = cols[j];
                // col.header = col.label;
                col.key = col.name;
                col.width = '10';
                titleRow[col.name] = ''
                headRow[col.name] = col.label
                footerRow[col.name] = ''
            }
            worksheet.columns = cols;
            titleRow[cols[0].name] = name;
            worksheet.addRow(titleRow)
            worksheet.addRow(headRow)
            for (var j = 0; j < array.length; j++) {
                var item = array[j];
                worksheet.addRow(item)
            }
            worksheet.addRow(footerRow)
        }

        var fileName = 'temp/' + 'batchExport' + '-' + parseInt(Math.random() * 100000000) + '.xls'
        var path = './public/' + fileName;
        workbook.xlsx.writeFile(path)
            .then(function () {
                deferred.resolve(fileName);
                setTimeout(function () { //3分钟后删除文件
                    fs.unlink(path, function (error) {
                        if (error) {
                            //console.log(error);
                            return false;
                        }
                        //console.log('删除文件成功');
                    })
                }, 180000)
            })
            .catch(function (e) {
                deferred.reject(e);
            })
        return deferred.promise;
    },
}
module.exports = service;