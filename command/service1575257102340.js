var model = require('../repository/mysql/model');
var countPage = require('./countPage');
var Q = require("q");
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
     * Author：
     * 必传参数：data
     * 可选参数：type
     */
    "rq1011": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * 充值
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq1013": function (params) {
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

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 删除客户信息
     * Author：
     * 必传参数：list
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 点击新增产品
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq214": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 保存产品录入信息
     * Author：
     * 必传参数：products,working_Procedures,productHasWorkingProcedures
     * 可选参数：
     */
    "rq215": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * 获取生产进度
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq222": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq239": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：data,factoryId
     * 可选参数：
     */
    "rq242": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 查找用户列表
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq243": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * 创建员工信息
     * Author：
     * 必传参数：data,factoryId
     * 可选参数：
     */
    "rq245": function (params) {
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 根据产品获取工序
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq251": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取客户信息
     * Author：
     * 必传参数：
     * 可选参数：name,mobile,address,contact,contact_phone,remarks
     */
    "rq311": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：factoryId,list
     * 可选参数：
     */
    "rq313": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：list
     * 可选参数：
     */
    "rq315": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 查询订单
     * Author：
     * 必传参数：
     * 可选参数：clientId,delivered,close
     */
    "rq317": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * Author：
     * 必传参数：
     * 可选参数：page,clientName,id,createdAt,deleveryDate,isClosed
     */
    "rq322": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：clientId,factoryId,order,orderProducts
     * 可选参数：
     */
    "rq324": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 修改订单信息
     * Author：
     * 必传参数：data
     * 可选参数：
     */
    "rq328": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 封存订单
     * Author：
     * 必传参数：id
     * 可选参数：
     */
    "rq329": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取未交付订单列表
     * Author：
     * 必传参数：
     * 可选参数：createAt,deliveredDate,create_user,clientName,orderId,productName
     */
    "rq411": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq414": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：productId,factoryId,data,procedures
     * 可选参数：
     */
    "rq416": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * 必传参数：
     * 可选参数：isOutSource
     */
    "rq425": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq430": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取产品物料记录
     * Author：
     * 必传参数：page
     * 可选参数：modelId
     */
    "rq611": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq616": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 获取成品入库记录
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq624": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * 成品入库
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq626": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * 成品出库
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq628": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq803": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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
     * Author：
     * 必传参数：factoryId,data
     * 可选参数：
     */
    "rq806": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 检查订单编号是否唯一
     * Author：
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
     * 简单查询产品
     * Author：
     * 必传参数：
     * 可选参数：
     */
    "rq2012": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 通用创建接口
     * Author：
     * 必传参数：model
     * 可选参数：data
     */
    "rq2111": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 通用更新接口
     * Author：
     * 必传参数：model
     * 可选参数：data
     */
    "rq2112": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 通用删除接口
     * Author：
     * 必传参数：model
     * 可选参数：data
     */
    "rq2113": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
        return deferred.promise;
    },
    /**
     * 通用查询接口
     * Author：
     * 必传参数：model
     * 可选参数：data
     */
    "rq2114": function (params) {
        var deferred = Q.defer();
        var that = this;

        deferred.resolve(params);
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

        deferred.resolve(params);
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

        deferred.resolve(params);
        return deferred.promise;
    },
}
module.exports = service;