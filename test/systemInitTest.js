//创建工厂
var service = require('../service/service');

var factoryUser;
var factoryId
var customer;
var customerId
var clientId
var order
var orderId
var departmentId
var departments
var work_number
var productId
var product
var product2
var employee
var employeeId
var process
var procedure
var supplier
var material

var params = {
    all: {
        data: {
            name: '阳江市日升刀剪厂',
            info: "广东省阳江市江城区城西街道城西镇东砵工业区日升刀剪厂 15089571922",
        }
    }
}

// service.rq2111(
//     {
//         all: {
//             model: 'ChargePeriod',
//             factoryId: 1,
//             data: {
//                 name: '月',
//                 time: 31,
//                 price: 500
//             }
//         }
//     }
// )


service.rq803(params) //添加工厂
    .then(function (result) {
        console.log("添加工厂");
        factoryId = result.id
        // factoryUser = {
        //     mobile: '13000000000',
        //     password: '123123',
        // }
        // var data = {
        //     all: {
        //         factoryId: factoryId,
        //         data: factoryUser
        //     }
        // }
        // return service.rq806(data) //添加工厂超级管理员
    })
    .then(function (result) {
        // console.log("添加工厂超级管理员");
        // var data = {
        //     all: {
        //         type: 'supervisor',
        //         data: factoryUser
        //     }
        // };
        // return service.rq1011(data) //超级管理员登录
    })
    .then(function () {
        // console.log("超级管理员登录");
        customer = {
            name: 'rsdj',
            nickName: '冯思曼',
            mobile: '15089571922',
            password: 'rsdj123456',
            type: 'supervisor',
        };
        var data = {
            all: {
                factoryId: factoryId,
                data: customer
            }
        }
        return service.rq242(data) // 添加普通用户
    })
    .then(function (result) {
        console.log("添加普通用户");
        customerId = result.id;
    })
    .then(function (result) {
        // var data = {
        //     all: {
        //         data: customer
        //     }
        // };
        // return service.rq1011(data) //普通用户登录
    })
// .then(function () {
//     console.log("普通用户登录");
//     var client = {
//         name: '客户',
//         mobile: '13333333333',
//         address: '某某地区',
//         contact: '李小明',
//         contact_phone: '020-88888888',
//     }
//     var data = {
//         all: {
//             factoryId: factoryId,
//             client: client
//         }
//     };
//     return service.rq313(data) // 新增客户
// })
// .then(function (result) {
//     console.log("新增客户");
//     clientId = result.id
//     var data = {
//         all: {
//             clientId: clientId,
//             factoryId: factoryId,
//             order: {orderNo: parseInt(Math.random() * 100000) + '-' + new Date().getTime(), accepted: 3.24},
//             orderProducts: [
//                 {
//                     type: "Model-" + Math.random(),        //型号
//                     model: "Model-" + Math.random(),         //名称
//                     specifications: "", //规格
//                     packingnumber: 0,  //装箱数 pcs
//                     piece: 1000,     //件数
//                     number: parseInt(Math.random() * 10000),    //数量
//                     unitprice: Math.random(),  //单价
//                     price: 0,      //金额
//                     remarks: "remarks",   //备注
//                     deliveried: 0,  //交付情况
//                 },
//                 {
//                     type: "Model-" + Math.random(),        //型号
//                     model: "Model-" + Math.random(),         //名称
//                     specifications: "", //规格
//                     packingnumber: 0,  //装箱数 pcs
//                     piece: 1000,     //件数
//                     number: parseInt(Math.random() * 10000),    //数量
//                     unitprice: Math.random(),  //单价
//                     price: 0,      //金额
//                     remarks: "remarks",   //备注
//                     deliveried: 0,  //交付情况
//                 },
//                 {
//                     type: "Model-" + Math.random(),        //型号
//                     model: "Model-" + Math.random(),         //名称
//                     specifications: "", //规格
//                     packingnumber: 0,  //装箱数 pcs
//                     piece: 1000,     //件数
//                     number: parseInt(Math.random() * 10000),    //数量
//                     unitprice: Math.random(),  //单价
//                     price: 0,      //金额
//                     remarks: "remarks",   //备注
//                     deliveried: 0,  //交付情况
//                 },
//             ]
//         }
//     };
//     return service.rq324(data) //新增订单
// })
// .then(function (result) {
//     order = result;
//     console.log("新增订单");
//     var data = {
//         all: {'factoryId': factoryId}
//     };
//     return service.rq317(data) // 查询订单
// })
// .then(function (data) {
//     console.log("查询订单");
//     var result = data.rows[0]
//     result = JSON.stringify(result)
//     result = JSON.parse(result)
//
//     var order = result;
//     orderId = order.id
//     order.accepted = 1000.00;
//     order.order_products[0].model = "Model-mod-" + Math.random()
//     order.order_products[1].model = "Model-mod-" + Math.random()
//     var data = {
//         all: {
//             factoryId: factoryId,
//             order: result
//         }
//     }
//     return service.rq328(data) // 修改订单信息
// })
// .then(function (result) {
//     // console.log("修改订单信息");
//     // var data = {
//     //     all: {
//     //         id: orderId
//     //     }
//     // }
//     // return service.rq329(data) // 封存订单
// })
//
// .then(function () {
//     console.log("保存物料信息录入");
//
//     var products = [{model: "产品1", rowId: 1}, {model: "产品2", rowId: 2}]
//     var working_Procedures = [{name: "工序1", colId: 1}, {name: "工序2", colId: 2}]
//     var productHasWorkingProcedures = [
//         {rowId: 1, colId: 1, price: 0.15},
//         {rowId: 1, colId: 2, price: 0.20},
//         {rowId: 2, colId: 1, price: 0.30},
//         {rowId: 2, colId: 2, price: 0.40},
//     ]
//     var data = {
//         all: {
//             factoryId: factoryId,
//             products: products,
//             working_Procedures: working_Procedures,
//             productHasWorkingProcedures: productHasWorkingProcedures
//         }
//     }
//     return service.rq215(data) // 保存产品录入信息
// })
// .then(function (result) {
//     console.log("保存产品录入信息");
//     var department = {
//         name: "车间1",
//     };
//     var data = {
//         all: {
//             factoryId: factoryId,
//             data: department
//         }
//     };
//     return service.rq246(data) // 创建部门
// })
// .then(function (result) {
//     console.log("创建部门");
//     departmentId = result.id;
//     department = result
//     work_number = "A001"
//     var employee = {
//         work_number: work_number,
//         name: "Jack",
//         gender: "男",
//         position: "1",
//         mobile: "13000000000",
//         id_num: "xxx",
//     };
//     var data = {
//         all: {
//             departmentId: departmentId,
//             factoryId: factoryId,
//             data: employee
//         }
//     };
//     return service.rq245(data) // 创建员工信息
// })
// .then(function (result) {
//     employee = result
//     employeeId = result.id
//     console.log("创建员工信息");
//     var list = [JSON.parse(JSON.stringify(result))];
//     var data = {
//         all: {
//             factoryId: factoryId,
//             list: list
//         }
//     };
//     return service.rq220(data) // 批量编辑员工信息
// })
// .then(function () {
//     console.log("批量编辑员工信息");
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     };
//     return service.rq247(data) // 获取部门列表
// })
// .then(function () {
//     console.log("获取部门列表");
//
//     var workOrderFix = {
//         work_number: work_number, //工号
//         name: employee.name, //姓名
//         department: department.name, //部门
//         total: 100, //应扣/应加
//         date: new Date(), //日期
//         note: "hello", //备注
//     }
//     var data = {
//         all: {
//             factoryId: factoryId,
//             employeeId: employeeId,
//             departmentId: departmentId,
//             workOrderFix: workOrderFix,
//         }
//     };
//     return service.rq528(data) // 保存应扣新增
// })
// .then(function () {
//     console.log("保存应扣新增");
//
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     };
//     return service.rq525(data) // 获取工资条修正记录
// })
// .then(function (result) {
//     console.log("获取工资条修正记录");
// })
// .then(function () {
//
//     var supplier = {
//         name: "Jack",
//         mobile: "13000000000",
//         contact: "小李",
//         address: "xxx路",
//         note: "备注",
//     };
//     var data = {
//         all: {
//             factoryId: factoryId,
//             data: supplier
//         }
//     };
//     return service.rq250(data) // 新增供应商
//
// })
// .then(function () {
//     console.log("新增供应商");
// })
// .then(function () {
//
// })
//
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId
//         }
//     }
//     return service.rq411(data) // 获取未交付订单列表
// })
// .then(function (result) {
//     console.log("获取未交付订单列表");
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId
//         }
//     }
//     return service.rq412(data) // 获取未交付产品
// })
// .then(function (result) {
//     console.log("获取未交付产品", JSON.stringify(result));
//     return JSON.parse(JSON.stringify(result))
// })
// .then(function (result) {
//     product = result.rows[0]
//     product2 = result.rows[1]
//     productId = result.rows[0].id
//     console.log("product", JSON.stringify(product));
//     var data = {
//         all: {factoryId: factoryId, productId: productId}
//     };
//     return service.rq251(data) // 根据产品获取工序
// })
// .then(function (data) {
//     console.log("根据产品获取工序");
//     for (var i = 0; i < data.length; i++) {
//         var exe = function (i) {
//             var item = data[i];
//             item.id = "" //去除id以便产品流程进行复制式的使用
//         }
//         exe(i)
//     }
//     console.log(JSON.stringify(data))
//     return JSON.parse(JSON.stringify(data))
// })
// .then(function (result) {
//
//     var process = {product_model: product.model, product_batch: "批次1"}
//     var data = {
//         all: {
//             productId: productId,
//             factoryId: factoryId,
//             data: process,
//         }
//     }
//     return service.rq416(data) // 新增进度
// })
// .then(function (ressult) {
//     console.log("新增进度");
// })
// .then(function () {
//     // 获取员工
//     var data = {all: {factoryId: factoryId}}  //获取员工列表
//     return service.rq217(data)
// })
// .then(function (list) {
//     console.log("获取员工列表", JSON.stringify(list));
//     employee = list[0]
//     var data = {
//         all: {
//             factoryId: factoryId
//         }
//     }
//     return service.rq417(data) //读取可选的产品进度（带出产品与批次，及工序、工序下的工价）
// })
// .then(function (list) {
//     console.log("读取可选的产品进度（带出产品与批次，及工序）");
//
//     process = list[0];
//     console.log("process:", JSON.stringify(process));
//     procedure = process.production_process_procedures[0]
//     console.log("procedure:", JSON.stringify(procedure));
//     var wordOrder = {
//         type: "",
//         name: "", //姓名
//         Serial_number: parseInt(Math.random() * 10000000), //编号
//         department: "", //部门
//         batch: process.product_batch, //批次
//         model: process.product_model, //型号
//         procedure: procedure.name, //工序
//         number: parseInt(Math.random() * 1000), //数量
//         price: procedure.price, //工价
//         wages: 0, //薪酬
//         note: "", //备注
//         is_outsourcing: 0 //是否外包
//     }
//     //根据工序的工价与录入的数量，自动计算薪酬
//     wordOrder.wages = wordOrder.number * wordOrder.price
//     console.log("wordOrder.wages", wordOrder.number, wordOrder.price, wordOrder.wages);
//     var data = {
//         all: {
//             isOutSource: 0, //是否外包
//             factoryId: factoryId, // 工厂关联
//             employeeId: employee.id, // 员工关联
//             productionProcessId: process.id, //批次关联
//             productionProcessProcedureId: procedure.id, //工序关联 (用于生产进度汇总各工序的总数)
//             data: wordOrder
//         }
//     }
//     return service.rq425(data) // 新增非外包工单
// })
// .then(function (result) {
//     console.log("新增非外包工单", JSON.stringify(result));
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     };
//     return service.rq229(data) // 获取供应商列表
// })
// .then(function (list) {
//     console.log("获取供应商列表");
//     supplier = list[0];
// })
// .then(function () {
//     //根据产品准备好工序
//     var outSourceTotal = 0;
//     var outSourceProcedures = []
//     var production_process_procedures = process.production_process_procedures
//
//     var outSourceInfo = {
//         recorder: customer.name, //经手人
//         name: "小李", //名称
//         address: "广州", //地址
//         contactPeople: "小黄", //联系人
//         contactPhone: "13788888888", //电话
//         sn: parseInt(Math.random() * 10000) + '-' + new Date().getTime(), // 单据编号
//         sum: 0, //金额
//         note: "备注", //备注
//         delegateName: "小明", //委派单位名称
//         delegateAddressAndPhone: "电话地址信息...", //委派单位地址电话
//     }
//
//     var workOrders = [
//         {
//             type: "",
//             name: "", //姓名
//             Serial_number: parseInt(Math.random() * 10000000), //编号
//             department: "", //部门
//             batch: process.product_batch, //批次
//             model: process.product_model, //型号
//             procedure: procedure.name, //工序
//             number: 1000, //数量
//             price: 3.55, //工价
//             wages: 0, //薪酬
//             note: "", //备注
//             is_outsourcing: 1 //是否外包
//         },
//         {
//             type: "",
//             name: "", //姓名
//             Serial_number: parseInt(Math.random() * 10000000), //编号
//             department: "", //部门
//             batch: process.product_batch, //批次
//             model: process.product_model, //型号
//             procedure: procedure.name, //工序
//             number: 1000, //数量
//             price: 3.55, //工价
//             wages: 0, //薪酬
//             note: "", //备注
//             is_outsourcing: 1 //是否外包
//         }
//     ];
//
//     for (var i = 0; i < workOrders.length; i++) {
//         var workOrder = workOrders[i];
//         workOrder.wages = workOrder.number * workOrder.price
//     }
//
//     var data = {
//         all: {
//             isOutSource: 1, //是否外包
//             factoryId: factoryId, // 工厂关联
//             employeeId: employee.id, // 员工关联
//             productionProcessId: process.id, //批次关联
//             productionProcessProcedureId: procedure.id, // 工序id
//             supplierId: supplier.id,//供应商关联
//             data: workOrders,
//             outSourceInfo: outSourceInfo,
//         }
//     }
//     return service.rq425(data) // 新增外包工单
// })
// .then(function (result) {
//     console.log("新增非外包工单", JSON.stringify(result));
// })
// .then(function () {
//     product.rowId = 1
//     product2.rowId = 2
//     var products = [product, product2]
//     var materials = [{name: "物料1", colId: 1}, {name: "物料2", colId: 2}]
//     var productHasMaterials = [
//         {rowId: 1, colId: 1, check: 1},
//         {rowId: 1, colId: 2, check: 1},
//         {rowId: 2, colId: 1, check: 1},
//         {rowId: 2, colId: 2, check: 1},
//     ]
//     var data = {
//         all: {
//             factoryId: factoryId,
//             products: products,
//             materials: materials,
//             productHasMaterials: productHasMaterials
//         }
//     };
//     return service.rq239(data) // 保存物料信息录入
// })
// .then(function () {
//     console.log("保存物料信息录入");
// })
// .then(function () {
//     var productId = product.id
//     var data = {
//         all: {
//             productId: productId,
//         }
//     };
//     return service.rq433(data) // 根据型号获取可消耗的物料
// })
// .then(function (result) {
//     material = result[0]
//     console.log("根据型号获取可消耗的物料", JSON.stringify(result));
// })
// .then(function () {
//     var materialInOutRecord = {
//         product_model: product.model, //产品型号
//         procedure: procedure.name, //工序
//         name: material.name, //物料名称
//         unit: "个", //单位
//         number: -100, //数量
//         note: "", //备注
//         recorder: "小明", //录入人
//     }
//     var data = {
//         all: {
//             factoryId: factoryId,
//             productId: product.id,
//             materialId: material.id,
//             data: materialInOutRecord
//         }
//     };
//     return service.rq430(data) // 保存物料消耗
// })
// .then(function () {
//     console.log("保存物料消耗");
// })
// .then(function () {
//
//     var materialInOrder = {
//         sum: 0, //金额
//         receiver: "小明", //收货人
//         receiverDep: "收购部", //收货单位
//         receiverAddressPhone: "新华路11号", //收货单位地址电话
//         note: "make sense", //备注
//         receiverDate: new Date(), //收货日期
//         recorder: "小明", //录入人
//     }
//     var materialInOutRecord = [{
//         product_model: product.model, //产品型号
//         procedure: procedure.name, //工序
//         name: material.name, //物料名称
//         unit: "个", //单位
//         number: 1000, //数量
//         price: 2.88, //单价
//         sum: 0, //金额
//         note: "", //备注
//         recorder: "小明", //录入人
//     }];
//     var data = {
//         all: {
//             factoryId: factoryId,
//             supplierId: supplier.id,
//             productId: product.id,
//             materialId: material.id,
//             materialInOrder: materialInOrder,
//             data: materialInOutRecord
//         }
//     };
//     return service.rq616(data) // 物料进仓
// })
// .then(function () {
//     console.log("物料进仓");
// })
// .then(function () {
//     var finishedProductInOutRecord = {
//         sn: parseInt(Math.random() * 100000000) + '-' + new Date().getTime(), //订单编号
//         name: employee.name, // 员工姓名
//         document_handler: "小李", //单据经手人
//         product_model: process.product_model, //产品型号
//         product_batch: process.product_batch, //产品批次
//         packing_quantity: 1, //装箱数
//         number: 1, //数量
//         price: 0, //单价
//         sum: 0, //金额
//         note: "", //备注
//         type: 'in', // 出库还是入库
//     };
//     var data = {
//         all: {
//             employeeId: employee.id,
//             factoryId: factoryId,
//             processId: process.id, //批次id
//             data: finishedProductInOutRecord
//         }
//     };
//     return service.rq432(data) // 工单模块成品入库
// })
// .then(function () {
//     console.log('工单模块成品入库');
// })
// .then(function () {
//     var endProductOrder = {
//         sn: order.orderNo,
//         sum: 0, //金额
//         receiver: "小李", //收货人
//         receiverDep: "大厦", //收货单位
//         receiverAddressPhone: "建设路", //收货单位地址电话
//         note: "备注", //备注
//         receiverDate: new Date(), //收货日期
//         recorder: "小李", //录入人
//     };
//     var endProductInOuts = [{
//         sn: parseInt(Math.random() * 100000000) + '-' + new Date().getTime(), //订单编号
//         name: employee.name, // 员工姓名
//         document_handler: "小李", //单据经手人
//         product_model: process.product_model, //产品型号
//         product_batch: process.product_batch, //产品批次
//         packing_quantity: 1, //装箱数
//         packing_amount: 1, //箱数
//         number: 1500, //数量
//         price: 3.88, //单价
//         sum: 0, //金额
//         note: "", //备注
//         type: 'in', // 出库还是入库
//     }];
//     var data = {
//         all: {
//             type: 'in', //入库
//             factoryId: factoryId,
//             supplierId: supplier.id,
//             processId: process.id, //批次id
//             endProductOrder: endProductOrder,
//             data: endProductInOuts
//         }
//     };
//     return service.rq626(data) // 仓库模块成品入库
//
// })
// .then(function () {
//     console.log("仓库模块成品入库");
// })
// .then(function () {
//
//     var endProductOrder = {
//         sn: order.orderNo,
//         sum: 0, //金额
//         receiver: "小李", //收货人
//         receiverDep: "大厦", //收货单位
//         receiverAddressPhone: "建设路", //收货单位地址电话
//         note: "备注", //备注
//         receiverDate: new Date(), //收货日期
//         recorder: "小李", //录入人
//     };
//     var endProductInOuts = [{
//         sn: order.orderNo, //订单编号
//         name: employee.name, // 员工姓名
//         document_handler: "小李", //单据经手人
//         product_model: process.product_model, //产品型号
//         product_batch: process.product_batch, //产品批次
//         packing_quantity: 1, //装箱数
//         packing_amount: 1, //箱数
//         number: 1500, //数量
//         price: 3.88, //单价
//         sum: 0, //金额
//         note: "", //备注
//         type: 'out', // 出库还是入库
//     }];
//     var data = {
//         all: {
//             type: 'out', //出库
//             factoryId: factoryId,
//             supplierId: supplier.id,
//             clientId: clientId,
//             processId: process.id, //批次id
//             endProductOrder: endProductOrder,
//             data: endProductInOuts
//         }
//     };
//     return service.rq628(data) // 仓库模块成品出库
// })
// .then(function () {
//     console.log("仓库模块成品出库");
// })
// .then(function () {
//
//     var data = {
//         all: {
//             factoryId: factoryId,
//             type: 'out',
//         }
//     }
//
//     return service.rq624(data) // 获取出库单记录
//
// })
// .then(function (result) {
//     console.log("获取出库单记录", JSON.stringify(result));
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     }
//     return service.rq423(data) // 获取工单列表
// })
// .then(function (result) {
//     console.log("获取工单列表", JSON.stringify(result));
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     }
//     return service.rq611(data) // 获取产品物料记录
// })
// .then(function (result) {
//     console.log("获取产品物料记录", JSON.stringify(result));
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     }
//     return service.rq618(data) // 获取产品物料进出仓详情
// })
// .then(function (result) {
//     console.log("获取产品物料进出仓详情", JSON.stringify(result));
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId,
//         }
//     }
//     return service.rq623(data) // 获取成品库存表
// })
// .then(function (result) {
//     console.log("获取成品库存表", JSON.stringify(result));
// })
// .then(function () {
//     var data = {
//         all: {
//             factoryId: factoryId,
//             // type: "",
//         }
//     }
//     return service.rq624(data) // 获取成品出入库记录
// })
// .then(function (result) {
//     console.log("获取成品出入库记录", JSON.stringify(result));
// })
// .then(function () {
//     console.log("完成测试");
// })
// .catch(function (err) {
//     console.log(err);
// });