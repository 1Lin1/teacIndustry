// 文档 https://github.com/demopark/sequelize-docs-Zh-CN
var Sequelize = require('sequelize');
var sequelize = require('./mysql');
var moment = require('moment');

var config = {
    "OperationRecord": {
        "idNum": {type: Sequelize.STRING, string: '操作id号',},
        "name": {type: Sequelize.STRING, string: '操作名',},
        "path": {type: Sequelize.STRING, string: '操作路径',},
        "type": {type: Sequelize.STRING, string: '操作类型',},
        "requiredParams": {type: Sequelize.STRING, string: '必选参数',},
        "optionalParams": {type: Sequelize.STRING, string: '可选参数',},
        "events": {type: Sequelize.STRING, string: '事件',},
        "init_event": {type: Sequelize.STRING, string: '初始化事件',}
    },
    "FactorySupervisor": {
        name: {type: Sequelize.STRING, string: '登录名',}, //登录名
        nickName: {type: Sequelize.STRING, string: "昵称"}, //昵称
        mobile: {type: Sequelize.STRING, string: '手机号'},//手机号
        unionId: {type: Sequelize.STRING, string: "微信unionid"},//微信unionid
        openId: {type: Sequelize.STRING, string: "微信openid"},//微信openid
        password: {type: Sequelize.STRING, string: "密码"}, //密码
        email: {type: Sequelize.STRING, string: '邮箱'}, //邮箱
    },
    "Factory": {
        name: {type: Sequelize.STRING, string: '工厂名'}, //工厂名
        info: {type: Sequelize.STRING, string: '工厂信息'} //工厂信息
    },
    "ChargePeriod": {
        name: {type: Sequelize.STRING, string: '产品名'}, //时长显示
        time: {type: Sequelize.INTEGER, string: '时长'}, //时长
        price: { //价格
            type: Sequelize.DOUBLE,
            string: '价格'
        },
    },
    "ChargeRecord": {
        out_trade_no: {type: Sequelize.STRING, string: '支付out_trade_no'}, //out_trade_no
        time: {type: Sequelize.INTEGER, string: '时长',}, //时长
        price: { //金额
            type: Sequelize.DOUBLE,
            string: '金额',
        },
        isPay: {
            type: Sequelize.BOOLEAN,
            string: '是否已支付',
        },
        userName: {type: Sequelize.STRING, string: '充值用户名'}, //登录名
    },
    "Customer": {
        name: {type: Sequelize.STRING(64), string: '登录名', 'unique': 'name'}, //登录名
        nickName: {type: Sequelize.STRING, string: '昵称'}, //昵称
        mobile: {type: Sequelize.STRING, string: '手机号'},//手机号
        unionId: {type: Sequelize.STRING, string: '微信unionid'},//微信unionid
        openId: {type: Sequelize.STRING, string: '微信openid'},//微信openid
        imgUrl: {type: Sequelize.STRING, string: '头像'},//
        password: {type: Sequelize.STRING, string: '密码'},//密码
        email: {type: Sequelize.STRING, string: '邮箱'}, //邮箱
        type: {
            type: Sequelize.STRING,
            string: '类型',
            widget: 'select',
            options: [{label: '超级管理员', value: '1'}, {label: '普通', value: '2'}]
        }, //类型 （普通还是超管）
        isRoot: { //最高权限管理员
            type: Sequelize.BOOLEAN,
            string: '是否最高权限管理员',
        },
    },
    "Employee": {
        work_number: {type: Sequelize.STRING, string: '工号'},  //工号
        name: {type: Sequelize.STRING, string: '姓名'}, //姓名
        gender: {
            type: Sequelize.STRING,
            string: '性别',
            widget: 'select',
            options: [{label: '男', value: '1'}, {label: '女', value: '2'}]
        }, //性别
        departmentName: {type: Sequelize.STRING, string: '部门', widget: 'autocomplete', options: 'remote'}, //部门
        position: {type: Sequelize.STRING, string: '职务'}, //职务
        mobile: {type: Sequelize.STRING, string: '手机号'}, //手机号
        id_num: {type: Sequelize.STRING, string: '证件号'}, //证件号
        inDate: {
            type: Sequelize.DATE, string: '入职时间', get() {
                if((this.getDataValue('inDate'))){
                    return moment(this.getDataValue('inDate')).format('YYYY-MM-DD');
                }else{
                    return ''
                }
            }
        } //入职时间
    },
    "Department": {
        name: {type: Sequelize.STRING, string: '名称'}, //名称
        info: {type: Sequelize.STRING, string: '相关信息'}, //相关信息
    },
    Product: {
        model: {type: Sequelize.STRING, string: '型号'},  //型号
        name: {type: Sequelize.STRING, string: '名称'},   //名称
        specifications: {type: Sequelize.STRING, string: '规格'},   //规格
        packingnumber: {type: Sequelize.INTEGER, string: '装箱数'},  //装箱数 pcs
        packing_amount: {type: Sequelize.INTEGER, string: '箱数'},  //箱数
        unitprice: {type: Sequelize.DOUBLE, string: '单价'},  //单价
        rowId: {type: Sequelize.INTEGER, string: '行id'}, //行idm
    },
    "Working_Procedure": {
        name: {type: Sequelize.STRING, string: '工序名'}, //工序名
        colId: Sequelize.INTEGER,//列id
    },
    "ProductHasWorkingProcedure": {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            string: 'id',
        },
        productId: { //产品外键
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: 'ProductHasWorkingProcedure',
            string: '产品外键',
            widget: 'fk',
        },
        workingProcedureId: { //工序外键
            type: Sequelize.INTEGER,
            unique: 'ProductHasWorkingProcedure',
            allowNull: false,
            references: null,
            string: '工序外键',
            widget: 'fk',
        },
        price: { //单价
            type: Sequelize.DOUBLE,
            string: '单价',
        },
        orderNum: Sequelize.INTEGER, //排序号
        rowId: Sequelize.INTEGER, //行id
        colId: Sequelize.INTEGER, //列id
    },
    "ProductClientPrice": {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            string: 'id',
        },
        productId: { //产品外键
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: 'ProductClientPrice',
            string: '产品外键',
            widget: 'fk',
        },
        clientId: { //客户外键
            type: Sequelize.INTEGER,
            unique: 'ProductClientPrice',
            allowNull: false,
            references: null,
            string: '工序外键',
            widget: 'fk',
        },
        price: { //单价
            type: Sequelize.DOUBLE,
            string: '单价',
        },
    },
    "ProductHasMaterial": {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: { //产品外键
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: 'ProductHasMaterial',
            string: '产品外键',
            widget: 'fk',
        },
        materialId: { //物料外键
            type: Sequelize.INTEGER,
            unique: 'ProductHasMaterial',
            allowNull: false,
            references: null,
            string: '物料外键',
            widget: 'fk',
        },
        check: { //是否勾选关联
            type: Sequelize.INTEGER,
            string: '是否勾选关联',
            widget: 'check',
        },
        rowId: Sequelize.INTEGER, //行id
        colId: Sequelize.INTEGER, //列id
    },
    "Material": {
        name: {type: Sequelize.STRING, string: '名称'},

    },
    "Material_Supplier": {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        materialId: { //物料外键
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: 'Material_Supplier',
            string: '物料外键',
            widget: 'fk',
        },
        supplierId: { //供应商外键
            type: Sequelize.INTEGER,
            unique: 'Material_Supplier',
            allowNull: false,
            references: null,
            string: '供应商外键',
            widget: 'fk',
        },
    },
    "Supplier": {
        name: {type: Sequelize.STRING, string: '供应商名称'}, // 供应商名称
        mobile: {type: Sequelize.STRING, string: '联系电话'}, //联系电话
        contact: {type: Sequelize.STRING, string: '联系人'},  //联系人
        address: {type: Sequelize.STRING, string: '地址'}, //地址
        note: {type: Sequelize.STRING, string: '备注'},   //备注
    },
    "Client": {    //客户表
        name: {type: Sequelize.STRING, string: '客户名称'}, // 客户名称
        mobile: {type: Sequelize.STRING, string: '联系电话'}, //联系电话
        address: {type: Sequelize.STRING, string: '收货地址'}, //收货地址
        contact: {type: Sequelize.STRING, string: '联系人'},      //联系人
        contact_phone: {type: Sequelize.STRING, string: '联系人电话'},   //联系电话
        remarks: {type: Sequelize.STRING, string: '备注'},   //备注
    },
    "Order": {      //订单表
        department: {type: Sequelize.STRING, string: '收货单位', widget: 'autocomplete', options: 'remote'}, //收货单位
        deleveredDate: {
            type: Sequelize.DATE, string: '交付日期', get() {
                if((this.getDataValue('deleveredDate'))){
                    return moment(this.getDataValue('deleveredDate')).format('YYYY-MM-DD');
                }else{
                    return ''
                }
            }
        }, //交付日期
        orderNo: {type: Sequelize.STRING, string: '订单编号'}, //订单编号
        adress: {type: Sequelize.STRING, string: '收货地址'}, //收货地址
        create_user_id: {type: Sequelize.STRING, string: '制单员'}, //制单员

        pieceSum: {type: Sequelize.STRING, string: '件数合计'}, //件数合计
        priceSum: {type: Sequelize.STRING, string: '金额合计'}, //金额合计
        numberSum: {type: Sequelize.STRING, string: '数量合计'}, //数量合计
        close: {type: Sequelize.INTEGER, defaultValue: 0, string: '封存'},     //封存


        //region 财务模块
        delivered: {type: Sequelize.INTEGER, defaultValue: 0, string: "交付情况"}, //交付情况
        payed_amount: {type: Sequelize.DOUBLE, string: '已收'}, //已收 =（成品出库的时候的金额）
        accepted: {type: Sequelize.DOUBLE, string: '已收'}, //已收
        discount: {type: Sequelize.DOUBLE, string: '优惠'}, //优惠
        account_receivale: {type: Sequelize.DOUBLE, string: '应收账款'}, //应收账款
        //endregion 财务模块


    },
    "Client_Product": {
        price: {type: Sequelize.DOUBLE, string: '单价'} //单价
    },
    "Order_Product": {   //订单仓库
        type: {type: Sequelize.STRING, string: '型号', widget: 'autocomplete', options: 'remote'},        //型号
        model: {type: Sequelize.STRING, string: '名称'},         //名称
        specifications: {type: Sequelize.STRING, string: '规格'}, //规格
        packingnumber: {type: Sequelize.INTEGER, string: '装箱数'},  //装箱数 pcs
        packing_amount: {type: Sequelize.INTEGER, string: '箱数'},  //箱数
        piece: {type: Sequelize.INTEGER, string: '件数'},     //件数
        number: {type: Sequelize.INTEGER, string: '数量'},    //数量
        unitprice: {type: Sequelize.DOUBLE, string: '单价'},  //单价
        price: {type: Sequelize.DOUBLE, string: '金额'},      //金额
        remarks: {type: Sequelize.STRING, string: '备注'},   //备注
        deliveried: {type: Sequelize.DOUBLE, string: '交付情况'},  //交付情况

    },
    "Production_Process": {
        closed: {type: Sequelize.INTEGER, string: '封存'},
        price: {type: Sequelize.DOUBLE, string: '价格'},
        product_model: {type: Sequelize.STRING, string: '产品型号'}, //产品型号
        product_batch: {type: Sequelize.STRING(64), string: '产品批次'}, //产品批次
    }
    ,
    "Production_Process_Procedure": {
        name: {type: Sequelize.STRING, string: '工序名称'}, //工序名称
        price: { //工序单价
            type: Sequelize.DOUBLE,
            string: '工序单价'
        },
        orderNum: {type: Sequelize.INTEGER, string: '排序号'},
    }
    ,
    "Work_Order": {
        recorder: {type: Sequelize.STRING, string: '经手人'}, //经手人
        recorderId: {type: Sequelize.STRING, string: '经手人id'}, //经手人
        type: {type: Sequelize.STRING, string: '类型'}, //类型
        name: {type: Sequelize.STRING, string: '姓名', widget: 'autocomplete', options: 'remote'}, //姓名
        Serial_number: {type: Sequelize.STRING, string: '编号','unique': 'Serial_number'}, //编号
        department: {type: Sequelize.STRING, string: '部门', widget: 'autocomplete', options: 'remote'}, //部门
        model: {type: Sequelize.STRING, string: '型号', widget: 'autocomplete', options: 'remote'}, //型号
        batch: {type: Sequelize.STRING, string: '批次', widget: 'select', options: 'remote'}, //批次
        procedure: {type: Sequelize.STRING, string: '工序', widget: 'select', options: 'remote'}, //工序
        number: {type: Sequelize.INTEGER, string: '数量'}, //数量
        price: {type: Sequelize.DOUBLE, string: '工价'}, //工价
        wages: {type: Sequelize.DOUBLE, string: '薪酬'}, //薪酬
        note: {type: Sequelize.STRING, string: '备注'}, //备注
        material_consumption: {type: Sequelize.INTEGER, string: '物料消耗'}, //物料消耗
        finishing_warehousing: {type: Sequelize.STRING, string: '成品入库'}, //成品入库
        is_outsourcing: {type: Sequelize.INTEGER, string: '是否外包', widget: 'radio'} //是否外包
    },
    "Work_Order_Fix": {
        name: {type: Sequelize.STRING, string: '姓名', widget: 'autocomplete', options: 'remote'}, //姓名
        work_number: {type: Sequelize.STRING, string: '工号'}, //工号
        department: {type: Sequelize.STRING, string: '部门', widget: 'autocomplete', options: 'remote'}, //部门
        total: {type: Sequelize.DOUBLE, string: '应扣/应加'}, //应扣/应加
        date: {
            type: Sequelize.DATE, string: '日期', get() {
                if((this.getDataValue('date'))){
                    return moment(this.getDataValue('date')).format('YYYY-MM-DD');
                }else{
                    return ''
                }
            }
        }, //日期
        note: {type: Sequelize.STRING, string: '备注'}, //备注
        recorder: {type: Sequelize.STRING, string: '备注'}, //经办人
        recorderId: {type: Sequelize.STRING, string: '经手人id'}, //经手人
    },
    "Work_Order_OutSource_Info": {
        recorder: {type: Sequelize.STRING, string: '经手人'}, //经手人
        recorderId: {type: Sequelize.STRING, string: '经手人id'}, //经手人
        name: {type: Sequelize.STRING, string: '名称', widget: 'autocomplete', options: 'remote'}, //名称
        address: {type: Sequelize.STRING, string: '地址'}, //地址
        contactPeople: {type: Sequelize.STRING, string: '联系人'}, //联系人
        contactPhone: {type: Sequelize.STRING, string: '电话'}, //电话

        note: {type: Sequelize.STRING, string: '备注'}, //备注
        delegateName: {type: Sequelize.STRING, string: '委派单位名称'}, //委派单位名称
        delegateAddressAndPhone: {type: Sequelize.STRING, string: '委派单位地址电话'}, //委派单位地址电话

        //region 财务模块
        sn: {type: Sequelize.STRING(64), string: '单据编号', 'unique': 'sn'}, // 单据编号
        sum: {type: Sequelize.DOUBLE, string: '金额'}, //金额
        payed: {type: Sequelize.DOUBLE, string: '已付金额'}, //已付金额
        reduce: {type: Sequelize.DOUBLE, string: '扣减金额'}, //扣减金额
        accountsPayable: {type: Sequelize.DOUBLE, string: '应付账款'}, //应付账款
        //endregion 财务模块
    },
    "Material_In_Order": {

        supplierName: {type: Sequelize.STRING, string: '送货单位', widget: 'autocomplete', options: 'remote'}, //送货单位
        supplierContact: {type: Sequelize.STRING, string: '送货联系人'}, //送货联系人
        supplierAddress: {type: Sequelize.STRING, string: '送货单位地址'}, //送货单位地址
        supplierPhone: {type: Sequelize.STRING, string: '送货单位电话'}, //送货单位电话


        receiverDep: {type: Sequelize.STRING, string: '收货单位'}, //收货单位
        receiver: {type: Sequelize.STRING, string: '收货人'}, //收货人
        receiverAddressPhone: {type: Sequelize.STRING, string: '收货单位地址电话'}, //收货单位地址电话
        note: {type: Sequelize.STRING, string: '备注'}, //备注
        receiverDate: {
            type: Sequelize.DATE, string: '收货日期', get() {
                if((this.getDataValue('receiverDate'))){
                    return moment(this.getDataValue('receiverDate')).format('YYYY-MM-DD');
                }else{
                    return ''
                }
            }
        }, //收货日期
        recorder: {type: Sequelize.STRING, string: '录入人'}, //录入人
        recorderId: {type: Sequelize.STRING, string: '经手人id'}, //经手人

        //region 财务模块
        sn: {type: Sequelize.STRING(64), string: '单据编号'}, //单据编号
        sum: {type: Sequelize.DOUBLE, string: '金额'}, //金额
        payed: {type: Sequelize.DOUBLE, string: '已付金额'}, //已付金额
        reduce: {type: Sequelize.DOUBLE, string: '扣减金额'}, //扣减金额
        accountsPayable: {type: Sequelize.DOUBLE, string: '应付账款'}, //应付账款
        //endregion 财务模块


    },
    "Material_In_Out_Record": {
        product_model: {type: Sequelize.STRING, string: '产品型号', widget: 'autocomplete', options: 'remote'}, //产品型号
        procedure: {type: Sequelize.STRING, string: '工序'}, //工序
        name: {type: Sequelize.STRING, string: '物料名称', widget: 'select', options: 'remote'}, //物料名称
        unit: {type: Sequelize.STRING, string: '单位'}, //单位
        number: {type: Sequelize.DOUBLE, string: '数量'}, //数量
        price: {type: Sequelize.DOUBLE, string: '单价'}, //单价
        sum: {type: Sequelize.DOUBLE, string: '金额'}, //金额
        uuid: {type: Sequelize.STRING, string: '识别id'}, //识别id
        receiver: {type: Sequelize.STRING, string: '收货人'}, //收货人
        receiverDep: {type: Sequelize.STRING, string: '收货单位'}, //收货单位
        receiverAddressPhone: {type: Sequelize.STRING, string: '收货单位地址电话'}, //收货单位地址电话
        note: {type: Sequelize.STRING, string: '备注'}, //备注
        receiverDate: {
            type: Sequelize.DATE, string: '收货日期', get() {
                if((this.getDataValue('receiverDate'))){
                    return moment(this.getDataValue('receiverDate')).format('YYYY-MM-DD');
                }else{
                    return ''
                }
            }
        }, //收货日期
        recorder: {type: Sequelize.STRING, string: '录入人'}, //录入人,
        recorderId: {type: Sequelize.STRING, string: '经手人id'}, //经手人
        type: {
            type: Sequelize.STRING,
            string: '出库或者入库类型',
            widget: 'select',
            options: [{label: '入库', value: 'in'}, {label: '出库', value: 'out'}]
        }, //出库或者入库类型
    },
    "EndProductOrder": {

        receiver: {type: Sequelize.STRING, string: '收货人'}, //收货人
        receiverDep: {type: Sequelize.STRING, string: '收货单位'}, //收货单位
        receiverAddressPhone: {type: Sequelize.STRING, string: '收货单位地址电话'}, //收货单位地址电话
        mobile: {type: Sequelize.STRING, string: '收货单位地址电话'}, //收货单位地址电话
        note: {type: Sequelize.STRING, string: '备注'}, //备注
        receiverDate: {
            type: Sequelize.DATE, string: '收货日期', get() {
                if((this.getDataValue('receiverDate'))){
                    return moment(this.getDataValue('receiverDate')).format('YYYY-MM-DD');
                }else{
                    return ''
                }
            }
        }, //收货日期
        type: {type: Sequelize.STRING, string: '出库或者入库类型'}, //出库或者入库类型
        recorder: {type: Sequelize.STRING, string: '录入人'}, //录入人
        recorderId: {type: Sequelize.STRING, string: '经手人id'}, //经手人

        supplierName: {type: Sequelize.STRING, string: '发货单位', widget: 'autocomplete', options: 'remote'}, //发货单位
        supplierContact: {type: Sequelize.STRING, string: '发货联系人'}, //发货联系人
        supplierAddress: {type: Sequelize.STRING, string: '发货单位地址'}, //发货单位地址
        supplierPhone: {type: Sequelize.STRING, string: '发货单位电话'}, //发货单位电话

        //region 财务模块
        sn: {type: Sequelize.STRING, string: '订单编号'}, //订单编号
        sum: {type: Sequelize.DOUBLE, string: '金额'}, //金额
        payed: {type: Sequelize.DOUBLE, string: '已付金额'}, //已付金额
        reduce: {type: Sequelize.DOUBLE, string: '扣减金额'}, //扣减金额
        accountsPayable: {type: Sequelize.DOUBLE, string: '应付账款'}, //应付账款
        //endregion 财务模块

    },
    "EndProductInOut": {
        sn: {type: Sequelize.STRING, string: '订单编号'}, //订单编号
        name: {type: Sequelize.STRING, string: '客户名称'}, //客户名称
        employeeId: {type: Sequelize.INTEGER, string: '员工id'}, //员工id
        document_handler: {type: Sequelize.STRING, string: '单据经手人'}, //单据经手人
        product_model: {type: Sequelize.STRING, string: '产品型号', widget: 'autocomplete', options: 'remote'}, //产品型号
        product_batch: {type: Sequelize.STRING, string: '产品批次', widget: 'autocomplete', options: 'remote'}, //产品批次
        packing_quantity: {type: Sequelize.INTEGER, string: '装箱数'}, //装箱数
        packing_amount: {type: Sequelize.INTEGER, string: '箱数'}, //箱数
        number: {type: Sequelize.INTEGER, string: '数量'}, //数量
        price: {type: Sequelize.DOUBLE, string: '单价'}, //单价
        sum: {type: Sequelize.DOUBLE, string: '金额'}, //金额
        type: {
            type: Sequelize.STRING,
            string: '出库或者入库类型',
            widget: 'select',
            options: [{label: '入库', value: 'in'}, {label: '出库', value: 'out'}]
        }, //出库或者入库类型
        note: {type: Sequelize.STRING, string: '备注'}, //备注


    },
}

for (var x in config) {
    config[x].createdAt = {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm');
        }
    }
    config[x]['factoryUniqueId'] = {type: Sequelize.STRING(64), string: '工厂唯一名称','unique': 'factoryUniqueId'}
}


var model = {
    //info:
    //工厂超级管理员
    OperationRecord: sequelize.define('operation_record', config.OperationRecord),
    FactorySupervisor: sequelize.define('factory_supervisor', config.FactorySupervisor),
    //工厂
    Factory: sequelize.define('factory', config.Factory),
    //充值周期
    ChargePeriod: sequelize.define('charge_period', config.ChargePeriod),
    //充值记录
    ChargeRecord: sequelize.define('charge_record', config.ChargeRecord),
    //系统使用的用户
    Customer: sequelize.define('customer', config.Customer),
    //工厂员工
    Employee: sequelize.define("employee", config.Employee),
    //工厂部门
    Department: sequelize.define("department", config.Department),
    //产品
    Product: sequelize.define("product", config.Product),
    //工序
    Working_Procedure: sequelize.define("working_procedure", config.Working_Procedure),
    //产品工序中间表
    ProductHasWorkingProcedure: sequelize.define('product_has_working_procedure', config.ProductHasWorkingProcedure),
    ProductClientPrice: sequelize.define('product_client_price', config.ProductClientPrice),
    //产品物料中间表
    ProductHasMaterial: sequelize.define('product_has_material', config.ProductHasMaterial),
    //物料
    Material: sequelize.define("material", config.Material),
    //物料供应商中间表
    Material_Supplier: sequelize.define("material_supplier", config.Material_Supplier),
    //供应商
    Supplier: sequelize.define("supplier", config.Supplier),
    //sale:
    //客户
    Client: sequelize.define('client', config.Client),
    //订单
    Order: sequelize.define('order', config.Order),
    //客户产品
    Client_Product: sequelize.define('client_product', config.Client_Product),
    //订单产品
    Order_Product: sequelize.define('order_product', config.Order_Product),
    //production:
    //生产进度
    Production_Process: sequelize.define('production_process', config.Production_Process),
    //专属于产品进度的工序表
    Production_Process_Procedure: sequelize.define('production_process_procedure', config.Production_Process_Procedure),
    //工单
    Work_Order: sequelize.define('work_order', config.Work_Order),
    //工单修正
    Work_Order_Fix: sequelize.define('work_order_fix', config.Work_Order_Fix),
    //外包工单信息
    Work_Order_OutSource_Info: sequelize.define('work_order_outSource_info', config.Work_Order_OutSource_Info),

    //repository:

    //物料进库单
    Material_In_Order: sequelize.define('material_in_order', config.Material_In_Order),
    //物料进出记录
    Material_In_Out_Record: sequelize.define('material_in_out_record', config.Material_In_Out_Record),
    //（产品）成品进出库单据
    EndProductOrder: sequelize.define('end_product_order', config.EndProductOrder),
    //（产品）成品进出库单记录
    EndProductInOut: sequelize.define('end_product_in_out', config.EndProductInOut),
    handleRelationShip: function () {
        //info:
        var that = this;
        this.Factory.hasMany(this.OperationRecord, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Product, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.FactorySupervisor, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Customer, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Employee, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Material_Supplier, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Supplier, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Client, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Order, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Order_Product, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Client_Product, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Production_Process, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Production_Process_Procedure, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Work_Order, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Work_Order_OutSource_Info, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Material_In_Out_Record, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.EndProductOrder, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.EndProductInOut, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Working_Procedure, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.ProductHasWorkingProcedure, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.ProductClientPrice, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.ProductHasMaterial, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Department, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Material, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Material_In_Order, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.Work_Order_Fix, {onDelete: 'CASCADE'});
        this.Factory.hasMany(this.ChargeRecord, {onDelete: 'CASCADE'});

        this.Customer.belongsTo(this.Factory, {foreignKey: 'factoryId'});
        this.Department.hasMany(this.Employee, {onDelete: 'SET NULL'});


        this.Production_Process.belongsTo(this.Product, {foreignKey: 'productId'});
        this.Product.hasMany(this.Material, {onDelete: 'SET NULL'});

        this.Product.hasMany(this.Material_In_Out_Record, {onDelete: 'SET NULL'});
        this.Material.hasMany(this.Material_In_Out_Record, {onDelete: 'SET NULL'});
        this.Material_In_Order.hasMany(this.Material_In_Out_Record, {onDelete: 'CASCADE'});
        this.Material_In_Out_Record.belongsTo(this.Product, {foreignKey: 'productId'});
        this.Material_In_Out_Record.belongsTo(this.Material, {foreignKey: 'materialId'});
        this.Material_In_Out_Record.belongsTo(this.Material_In_Order, {foreignKey: 'materialInOrderId'});

        this.Supplier.hasMany(this.EndProductOrder, {onDelete: 'SET NULL'});
        this.EndProductOrder.belongsTo(this.Supplier, {foreignKey: 'supplierId'});
        this.Client.hasMany(this.EndProductOrder, {onDelete: 'SET NULL'});
        this.Client.hasMany(this.EndProductInOut, {onDelete: 'SET NULL'});
        this.EndProductOrder.hasMany(this.EndProductInOut, {onDelete: 'CASCADE'});
        this.EndProductInOut.belongsTo(this.EndProductOrder, {foreignKey: 'endProductOrderId'});
        this.Employee.hasMany(this.EndProductInOut, {onDelete: 'SET NULL'});
        this.Employee.hasMany(this.Work_Order_Fix, {onDelete: 'SET NULL'});
        this.Work_Order_Fix.belongsTo(this.Employee, {foreignKey: 'employeeId'});

        this.ProductHasWorkingProcedure.belongsTo(this.Working_Procedure, {foreignKey: 'workingProcedureId'});
        this.ProductHasWorkingProcedure.belongsTo(this.Product, {foreignKey: 'productId'});

        this.ProductHasMaterial.belongsTo(this.Product, {foreignKey: 'productId'});
        this.ProductHasMaterial.belongsTo(this.Material, {foreignKey: 'materialId'});

        this.Supplier.hasMany(this.Work_Order, {onDelete: 'SET NULL'});

        this.Supplier.hasMany(this.Material_In_Order, {onDelete: 'SET NULL'});
        this.Material_In_Order.belongsTo(this.Supplier, {foreignKey: 'supplierId'});
        this.Supplier.hasMany(this.Work_Order_OutSource_Info, {onDelete: 'SET NULL'});
        this.Work_Order_OutSource_Info.belongsTo(this.Supplier, {foreignKey: 'supplierId'});
        this.Work_Order_OutSource_Info.hasMany(this.Work_Order, {onDelete: 'CASCADE'});
        this.Work_Order.belongsTo(this.Work_Order_OutSource_Info, {foreignKey: 'workOrderOutSourceInfoId'});
        this.Work_Order_OutSource_Info.belongsTo(this.Supplier, {foreignKey: 'supplierId'});
        this.Production_Process.hasMany(this.Work_Order, {onDelete: 'CASCADE'});

        this.Material.belongsToMany(this.Supplier, {
            through: {
                model: that.Material_Supplier,
                unique: false,
            },
            foreignKey: 'materialId', //通过外键materialId
            constraints: false
        });
        this.Supplier.belongsToMany(this.Material, {
            through: {
                model: that.Material_Supplier,
                unique: false,
            },
            foreignKey: 'supllerId', //通过外键supllerId
            constraints: false
        });

        this.Product.belongsToMany(this.Working_Procedure, {
            through: {
                model: that.ProductHasWorkingProcedure,
                unique: false,
            },
            onDelete: 'SET NULL',
            foreignKey: 'productId', //通过外键materialId
            constraints: false
        });

        this.Material.belongsToMany(this.Product, {
            through: {
                model: that.ProductHasMaterial,
                unique: false,
            },
            foreignKey: 'materialId', //通过外键materialId
            constraints: false
        });
        this.Product.belongsToMany(this.Material, {
            through: {
                model: that.ProductHasMaterial,
                unique: false,
            },
            foreignKey: 'productId', //通过外键productId
            constraints: false
        });
        this.Product.belongsToMany(this.Client, {
            through: {
                model: that.ProductClientPrice,
                unique: false,
            },
            foreignKey: 'productId', //通过外键productId
            constraints: false
        });
        this.Client.belongsToMany(this.Product, {
            through: {
                model: that.ProductClientPrice,
                unique: false,
            },
            foreignKey: 'clientId', //
            constraints: false
        });
        this.ProductClientPrice.belongsTo(this.Product, {foreignKey: 'productId'});
        this.ProductClientPrice.belongsTo(this.Client, {foreignKey: 'clientId'});

        //sale:
        this.Client.hasMany(this.Order, {onDelete: 'SET NULL'});
        this.Order.belongsTo(this.Client, {foreignKey: 'clientId'});
        this.Order.hasMany(this.Order_Product, {onDelete: 'CASCADE'});
        this.Order_Product.hasMany(this.EndProductInOut, {onDelete: 'CASCADE'});
        this.Order_Product.belongsTo(this.Order, {foreignKey: 'orderId'});

        this.Employee.hasMany(this.Work_Order, {onDelete: 'SET NULL'});
        this.Employee.belongsTo(this.Department, {foreignKey: 'departmentId'});
        this.Work_Order.belongsTo(this.Employee, {foreignKey: 'employeeId'});

        this.Production_Process.hasMany(this.Work_Order, {onDelete: 'CASCADE'});
        this.Production_Process.hasMany(this.Production_Process_Procedure, {onDelete: 'CASCADE'});
        this.Production_Process_Procedure.hasMany(this.Work_Order, {onDelete: 'CASCADE'});

        //追踪productId
        this.Product.hasMany(this.Order_Product, {onDelete: 'SET NULL'});
        this.Product.hasMany(this.Production_Process, {onDelete: 'SET NULL'});
        this.Production_Process.belongsTo(this.Product, {foreignKey: 'productId'});
        this.Product.hasMany(this.EndProductInOut, {onDelete: 'SET NULL'});
        this.Product.hasMany(this.Work_Order, {onDelete: 'SET NULL'});
        this.Product.hasMany(this.ProductHasWorkingProcedure, {onDelete: 'CASCADE'});
        this.Product.hasMany(this.ProductHasMaterial, {onDelete: 'CASCADE'});
    },
    syncDatabase: function () {

        try {
            sequelize.sync({alter: true});// 使用 alter:true 模型会自动检查字段，进行添加、修改、删除
        } catch (e) {
            console.log(e);
        }

    },
    getConfig: function () {
        return config
    }
};
model.handleRelationShip();
module.exports = model;

