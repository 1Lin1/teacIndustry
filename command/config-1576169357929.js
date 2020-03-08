var configs = {
  "rq100": {
    "id": "rq100",
    "name": "小治智能管理系统首页",
    "path": "/index",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [
      "rq100"
    ],
    "init_event": [
      "rq100"
    ]
  },
  "rq111": {
    "id": "rq111",
    "name": "获取系统信息",
    "path": "/index/systemInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1000": {
    "id": "rq1000",
    "name": "账号模块",
    "path": "/account",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1001": {
    "id": "rq1001",
    "name": "充值界面",
    "path": "/charge",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1011": {
    "id": "rq1011",
    "name": "登录",
    "path": "/account/login",
    "type": "ajax",
    "requiredParams": {
      "data": ""
    },
    "optionalParams": {
      "type": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1012": {
    "id": "rq1012",
    "name": "退出登录",
    "path": "/account/logout",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1014": {
    "id": "rq1014",
    "name": "忘记密码",
    "path": "/account/forgetPassword",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1013": {
    "id": "rq1013",
    "name": "充值",
    "path": "/account/charge",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1015": {
    "id": "rq1015",
    "name": "微信充值回调",
    "path": "/account/wechatPayCallback",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq1016": {
    "id": "rq1016",
    "name": "微信登录",
    "path": "/account/wechatPayRegsterCallback",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq201": {
    "id": "rq201",
    "name": "信息模块-销售",
    "path": "/info-sale",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq202": {
    "id": "rq202",
    "name": "信息模块-产品",
    "path": "/info-production",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq203": {
    "id": "rq203",
    "name": "信息模块-仓库",
    "path": "/info-repository",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq204": {
    "id": "rq204",
    "name": "信息模块-黑匣子",
    "path": "/info-blackbox",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq205": {
    "id": "rq205",
    "name": "信息模块-充值产品",
    "path": "/info-chargeproduct",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq211": {
    "id": "rq211",
    "name": "删除客户信息",
    "path": "/info/deleteClient",
    "type": "ajax",
    "requiredParams": {
      "list": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq212": {
    "id": "rq212",
    "name": "导出客户信息",
    "path": "/info/exportClientList",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq213": {
    "id": "rq213",
    "name": "获取产品列表",
    "path": "/info/getProductList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq214": {
    "id": "rq214",
    "name": "点击新增产品",
    "path": "/info/clickAddProduct",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq215": {
    "id": "rq215",
    "name": "保存产品录入信息",
    "path": "/info/updateProduct",
    "type": "ajax",
    "requiredParams": {
      "products": "",
      "working_Procedures": "",
      "productHasWorkingProcedures": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq216": {
    "id": "rq216",
    "name": "删除产品信息",
    "path": "/info/deleteProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq217": {
    "id": "rq217",
    "name": "获取员工列表",
    "path": "/info/getEmployeeList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq218": {
    "id": "rq218",
    "name": "点击新增员工信息",
    "path": "/info/clickAddEmployee",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq219": {
    "id": "rq219",
    "name": "点击编辑员工信息",
    "path": "/info/clickEditEmployee",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq220": {
    "id": "rq220",
    "name": "批量编辑员工信息",
    "path": "/info/batchEditEmployee",
    "type": "ajax",
    "requiredParams": {
      "factoryId": "",
      "list": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq221": {
    "id": "rq221",
    "name": "删除员工信息",
    "path": "/info/deleteEmployee",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq222": {
    "id": "rq222",
    "name": "获取生产进度",
    "path": "/info/getProductProcedureList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq223": {
    "id": "rq223",
    "name": "删除生产进度",
    "path": "/info/deleteProductProcedureList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq224": {
    "id": "rq224",
    "name": "导出生产进度",
    "path": "/info/exportProductProcedureList",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq225": {
    "id": "rq225",
    "name": "获取外包工单",
    "path": "/info/getOutSourceWorkOrder",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq226": {
    "id": "rq226",
    "name": "点击外包工单弹窗",
    "path": "/info/clickOutSourceWorkOrder",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq227": {
    "id": "rq227",
    "name": "导出外包工单",
    "path": "/info/exportOutSourceWorkOrder",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq228": {
    "id": "rq228",
    "name": "删除外包工单",
    "path": "/info/deleteOutSourceWorkOrder",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq229": {
    "id": "rq229",
    "name": "获取供应商列表",
    "path": "/info/getSupplier",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq230": {
    "id": "rq230",
    "name": "点击新增供应商弹窗",
    "path": "/info/clickSupplier",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq231": {
    "id": "rq231",
    "name": "导出供应商",
    "path": "/info/exportOutSourceWorkOrder",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq232": {
    "id": "rq232",
    "name": "删除供应商",
    "path": "/info/deleteOutSourceWorkOrder",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq233": {
    "id": "rq233",
    "name": "获取出库单信息",
    "path": "/info/getRepositoryOut",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq234": {
    "id": "rq234",
    "name": "导出出库单信息",
    "path": "/info/exportRepositoryOut",
    "type": "export",
    "requiredParams": "",
    "optionalParams": {
      "isIn": "",
      "isOut": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq235": {
    "id": "rq235",
    "name": "获取物料入库单信息",
    "path": "/info/getMaterialRepositoryIn",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq236": {
    "id": "rq236",
    "name": "导出物料入库单信息",
    "path": "/info/exportMaterialRepositoryIn",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq237": {
    "id": "rq237",
    "name": "物料信息列表",
    "path": "/info/getMaterialList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq238": {
    "id": "rq238",
    "name": "点击物料信息录入",
    "path": "/info/clickMaterialInfo",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq239": {
    "id": "rq239",
    "name": "保存物料信息录入",
    "path": "/info/saveMaterialInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq240": {
    "id": "rq240",
    "name": "删除物料信息",
    "path": "/info/deleteMaterialInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq241": {
    "id": "rq241",
    "name": "黑匣子",
    "path": "/info/blackBoxList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq242": {
    "id": "rq242",
    "name": "添加用户",
    "path": "/info/addCustomer",
    "type": "ajax",
    "requiredParams": {
      "data": "",
      "factoryId": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq243": {
    "id": "rq243",
    "name": "查找用户列表",
    "path": "/info/getCustomerList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq244": {
    "id": "rq244",
    "name": "删除用户",
    "path": "/info/deleteCustomer",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq245": {
    "id": "rq245",
    "name": "创建员工信息",
    "path": "/info/createEmployee",
    "type": "ajax",
    "requiredParams": {
      "data": "",
      "factoryId": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq246": {
    "id": "rq246",
    "name": "创建部门",
    "path": "/info/createDepartment",
    "type": "ajax",
    "requiredParams": {
      "data": "",
      "factoryId": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq247": {
    "id": "rq247",
    "name": "获取部门列表",
    "path": "/info/getDepartments",
    "type": "ajax",
    "requiredParams": {
      "factoryId": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq248": {
    "id": "rq248",
    "name": "编辑部门",
    "path": "/info/editDepartment",
    "type": "ajax",
    "requiredParams": {
      "data": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq249": {
    "id": "rq249",
    "name": "删除部门",
    "path": "/info/deleteDepartment",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq250": {
    "id": "rq250",
    "name": "新增供应商",
    "path": "/info/createSupplier",
    "type": "ajax",
    "requiredParams": {
      "data": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq251": {
    "id": "rq251",
    "name": "根据产品获取工序",
    "path": "/info/getProcedureByProduct",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq252": {
    "id": "rq252",
    "name": "更新产品工序的关联",
    "path": "/info/upsertProductProcedure",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq253": {
    "id": "rq253",
    "name": "获取产品客户关联列表",
    "path": "/info/getProductCustomerList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq254": {
    "id": "rq254",
    "name": "更新产品客户的关联",
    "path": "/info/upsertProductClientPrice",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq255": {
    "id": "rq255",
    "name": "查找单个产品客户的关联",
    "path": "/info/findProductClientById",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq300": {
    "id": "rq300",
    "name": "销售模块",
    "path": "/sale",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": [
      "rq300"
    ]
  },
  "rq311": {
    "id": "rq311",
    "name": "获取客户信息",
    "path": "/sale/clientInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "name": "",
      "mobile": "",
      "address": "",
      "contact": "",
      "contact_phone": "",
      "remarks": ""
    },
    "use_log": 1,
    "events": [],
    "init_event": []
  },
  "rq312": {
    "id": "rq312",
    "name": "新增客户弹窗",
    "path": "/sale/clickCreateClientInfo",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq313": {
    "id": "rq313",
    "name": "新增客户",
    "path": "/sale/createClientInfo",
    "type": "ajax",
    "requiredParams": {
      "factoryId": "",
      "list": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq314": {
    "id": "rq314",
    "name": "客户信息修改弹窗",
    "path": "/sale/clickEditClientInfo",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq315": {
    "id": "rq315",
    "name": "修改客户信息",
    "path": "/sale/editClientInfo",
    "type": "ajax",
    "requiredParams": {
      "list": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq316": {
    "id": "rq316",
    "name": "客户总览弹窗",
    "path": "/sale/clickClientReview",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq317": {
    "id": "rq317",
    "name": "查询订单",
    "path": "/sale/getOrderList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "clientId": "",
      "delivered": "",
      "close": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq318": {
    "id": "rq318",
    "name": "显示订单详情弹窗",
    "path": "/sale/clickShowOrderInfo",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq319": {
    "id": "rq319",
    "name": "显示订单详情",
    "path": "/sale/showOrderInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq320": {
    "id": "rq320",
    "name": "入账弹窗",
    "path": "/sale/clickShowEnterAccount",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq321": {
    "id": "rq321",
    "name": "入账信息显示",
    "path": "/sale/showEnterAccount",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq322": {
    "id": "rq322",
    "name": "显示订单列表",
    "path": "/sale/showOrderList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "page": "",
      "clientName": "",
      "id": "",
      "createdAt": "",
      "deleveryDate": "",
      "isClosed": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq323": {
    "id": "rq323",
    "name": "订单新增弹窗",
    "path": "/sale/clickToCreateOrder",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq324": {
    "id": "rq324",
    "name": "订单新增",
    "path": "/sale/createOrder",
    "type": "ajax",
    "requiredParams": {
      "clientId": "",
      "factoryId": "",
      "order": "",
      "orderProducts": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq325": {
    "id": "rq325",
    "name": "显示订单详情弹窗",
    "path": "/sale/clickToCreateOrder",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq326": {
    "id": "rq326",
    "name": "获取订单详情",
    "path": "/sale/getOrderInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "showProduct": "",
      "showReceivable": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq327": {
    "id": "rq327",
    "name": "获取出库单记录",
    "path": "/sale/getProductOutRecord",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq328": {
    "id": "rq328",
    "name": "修改订单信息",
    "path": "/sale/saveOrder",
    "type": "ajax",
    "requiredParams": {
      "data": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq329": {
    "id": "rq329",
    "name": "封存订单",
    "path": "/sale/closeOrder",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq400": {
    "id": "rq400",
    "name": "生产模块",
    "path": "/production",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq411": {
    "id": "rq411",
    "name": "获取未交付订单列表",
    "path": "/production/getUnDeliveryOrderList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "createAt": "",
      "deliveredDate": "",
      "create_user": "",
      "clientName": "",
      "orderId": "",
      "productName": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq412": {
    "id": "rq412",
    "name": "获取未交付产品",
    "path": "/production/getUnDeliveryProducts",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq413": {
    "id": "rq413",
    "name": "根据产品获取未交付订单列表弹窗",
    "path": "/production/clickUnDeliveryOrdersByProduct",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq414": {
    "id": "rq414",
    "name": "根据产品获取未交付订单列表",
    "path": "/production/getUnDeliveryOrdersByProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq415": {
    "id": "rq415",
    "name": "新增进度弹窗",
    "path": "/production/clickCreateProcess",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq416": {
    "id": "rq416",
    "name": "新增进度",
    "path": "/production/createProcess",
    "type": "ajax",
    "requiredParams": {
      "productId": "",
      "factoryId": "",
      "data": "",
      "procedures": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq417": {
    "id": "rq417",
    "name": "工单进度搜索",
    "path": "/production/processSearch",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "productName": "",
      "batchNo": "",
      "productProcedure": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq418": {
    "id": "rq418",
    "name": "显示进度弹窗",
    "path": "/production/clickProcess",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq419": {
    "id": "rq419",
    "name": "显示单个工序工人贡献的数量弹窗",
    "path": "/production/clickShowPeopleContribution",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq420": {
    "id": "rq420",
    "name": "获取单个工序工人贡献的数量",
    "path": "/production/clickGetPeopleContribution",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq421": {
    "id": "rq421",
    "name": "封存进度",
    "path": "/production/closeTheProgress",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq422": {
    "id": "rq422",
    "name": "检查进度工序数量",
    "path": "/production/checkProgreeProcudure",
    "type": "tooltip",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq423": {
    "id": "rq423",
    "name": "获取工单列表",
    "path": "/production/getWorkOrderList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "createAt": "",
      "batchNo": "",
      "descrition": "",
      "employeeName": "",
      "productName": "",
      "workPrice": "",
      "id": "",
      "productProcedure": "",
      "department": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq424": {
    "id": "rq424",
    "name": "新增工单弹窗",
    "path": "/production/clickToCreatWorkOrder",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq425": {
    "id": "rq425",
    "name": "新增工单",
    "path": "/production/createWorkOrder",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "isOutSource": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq426": {
    "id": "rq426",
    "name": "显示工单详情弹窗",
    "path": "/production/clickToShowWorkOrderDetail",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq427": {
    "id": "rq427",
    "name": "显示修改工单弹窗",
    "path": "/production/clickToEditWorkOrderDetail",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq428": {
    "id": "rq428",
    "name": "保存工单修改",
    "path": "/production/updateWorkOrder",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq429": {
    "id": "rq429",
    "name": "物料消耗弹窗",
    "path": "/production/clickShowMaterialConsume",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq430": {
    "id": "rq430",
    "name": "保存物料消耗",
    "path": "/production/updateMaterialConsume",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq431": {
    "id": "rq431",
    "name": "成品入库弹窗",
    "path": "/production/clickFinishedProduct",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq432": {
    "id": "rq432",
    "name": "工单模块成品入库",
    "path": "/production/updateFinishedProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq433": {
    "id": "rq433",
    "name": "根据产品型号获取可消耗的物料",
    "path": "/production/getMaterialsByProduct",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq434": {
    "id": "rq434",
    "name": "获取外包工单列表",
    "path": "/production/getOutSourceOrderList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq435": {
    "id": "rq435",
    "name": "保存进度",
    "path": "/production/saveProductionProcedure",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq500": {
    "id": "rq500",
    "name": "财务模块",
    "path": "/financial",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq511": {
    "id": "rq511",
    "name": "获取应收核算",
    "path": "/finacial/getAccountingReceivable",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "createAt": "",
      "createdName": "",
      "deliveredDate": "",
      "clientName": "",
      "orderId": "",
      "productName": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq512": {
    "id": "rq512",
    "name": "点击货款入账",
    "path": "/finacial/clickLoanEntry",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq513": {
    "id": "rq513",
    "name": "获取货款入账列表",
    "path": "/finacial/getLoanEntry",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq514": {
    "id": "rq514",
    "name": "导出工资条",
    "path": "/finacial/exportWageSlip",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq515": {
    "id": "rq515",
    "name": "获取应付核算",
    "path": "/finacial/getAccountingPayable",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "createAt": "",
      "supplierName": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq516": {
    "id": "rq516",
    "name": "点击应付核算详情",
    "path": "/finacial/clickAccountingPayableDetail",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq517": {
    "id": "rq517",
    "name": "获取应付核算详情",
    "path": "/finacial/getAccountingPayableDetail",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq518": {
    "id": "rq518",
    "name": "点击添加应付核算",
    "path": "/finacial/clickAddAccountingPayable",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq519": {
    "id": "rq519",
    "name": "添加应付核算",
    "path": "/finacial/addAccountingPayable",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq520": {
    "id": "rq520",
    "name": "删除应付核算",
    "path": "/finacial/deleteAccountingPayable",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq521": {
    "id": "rq521",
    "name": "导出应付核算",
    "path": "/finacial/exportAccountingPayable",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq522": {
    "id": "rq522",
    "name": "出账",
    "path": "/finacial/doOutOfAccount",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq523": {
    "id": "rq523",
    "name": "获取工资条列表",
    "path": "/finacial/getWageList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": {
      "startDate": "",
      "endDate": "",
      "employeeNo": "",
      "employeeName": "",
      "department": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq524": {
    "id": "rq524",
    "name": "导出工资条",
    "path": "/finacial/exportWageList",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq525": {
    "id": "rq525",
    "name": "获取工资条修正记录",
    "path": "/finacial/getWageFixList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq526": {
    "id": "rq526",
    "name": "导出工资条修正记录",
    "path": "/finacial/exprotWageFixList",
    "type": "export",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq527": {
    "id": "rq527",
    "name": "点击应扣新增",
    "path": "/finacial/clickWageFix",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq528": {
    "id": "rq528",
    "name": "保存应扣新增",
    "path": "/finacial/updateWageFix",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq600": {
    "id": "rq600",
    "name": "库存模块",
    "path": "/repository",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [
      "rq601",
      "rq602",
      "rq603",
      "rq604",
      "rq605"
    ],
    "init_event": []
  },
  "rq611": {
    "id": "rq611",
    "name": "获取产品物料记录",
    "path": "/repository/getMaterialRecord",
    "type": "ajax",
    "requiredParams": {
      "page": ""
    },
    "optionalParams": {
      "modelId": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq612": {
    "id": "rq612",
    "name": "获取物料入库记录",
    "path": "/repository/getRepositoryInRecord",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq613": {
    "id": "rq613",
    "name": "物料修正弹窗",
    "path": "/repository/clickFixMaterial",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq614": {
    "id": "rq614",
    "name": "物料修正",
    "path": "/repository/fixMaterial",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq615": {
    "id": "rq615",
    "name": "物料进仓弹窗",
    "path": "/repository/clickRepositoryIn",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq616": {
    "id": "rq616",
    "name": "物料进仓",
    "path": "/repository/updateRepositoryRecord",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq617": {
    "id": "rq617",
    "name": "产品物料进出仓详情弹窗",
    "path": "/repository/clickRepositoryRecordByProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq618": {
    "id": "rq618",
    "name": "获取产品物料进出仓详情",
    "path": "/repository/getRepositoryRecordByProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq619": {
    "id": "rq619",
    "name": "入库单详情弹窗",
    "path": "/repository/clickMaterialRepoRecordDetail",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq620": {
    "id": "rq620",
    "name": "获取入库单详情",
    "path": "/repository/materialRepoRecordDetail",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq621": {
    "id": "rq621",
    "name": "编辑入库单详情",
    "path": "/repository/updateMaterialRepoRecordDetail",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq622": {
    "id": "rq622",
    "name": "删除入库单详情",
    "path": "/repository/deleteMaterialRepoRecordDetail",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq623": {
    "id": "rq623",
    "name": "获取成品库存表",
    "path": "/repository/getFinishedProductList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq624": {
    "id": "rq624",
    "name": "获取成品入库记录",
    "path": "/repository/getProductRepositoryRecord",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq625": {
    "id": "rq625",
    "name": "成品入库弹窗",
    "path": "/repository/clickFinishedProductIn",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq626": {
    "id": "rq626",
    "name": "成品入库",
    "path": "/repository/updateFinishedProductIn",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq627": {
    "id": "rq627",
    "name": "成品出库弹窗",
    "path": "/repository/clickFinishedProductOut",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq628": {
    "id": "rq628",
    "name": "成品出库",
    "path": "/repository/updateFinishedProductOut",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq629": {
    "id": "rq629",
    "name": "成品修正弹窗",
    "path": "/repository/clickFixFinishedProduct",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq630": {
    "id": "rq630",
    "name": "成品修正",
    "path": "/repository/fixFinishedProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq631": {
    "id": "rq631",
    "name": "出库单详情弹窗",
    "path": "/repository/clickFinishedProductDetail",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq632": {
    "id": "rq632",
    "name": "删除出库单",
    "path": "/repository/deleteFinishedProduct",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq800": {
    "id": "rq800",
    "name": "超管模块",
    "path": "/supervisor",
    "type": "ejs",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq811": {
    "id": "rq811",
    "name": "获取工厂列表",
    "path": "/supervisor/getFactoryList",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq802": {
    "id": "rq802",
    "name": "点击添加工厂",
    "path": "/supervisor/clickAddFactory",
    "type": "popup",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq803": {
    "id": "rq803",
    "name": "添加工厂",
    "path": "/supervisor/addFactory",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq804": {
    "id": "rq804",
    "name": "删除工厂",
    "path": "/supervisor/deleteFactory",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq805": {
    "id": "rq805",
    "name": "费用管理",
    "path": "/supervisor/manageCharge",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq806": {
    "id": "rq806",
    "name": "添加工厂超级管理员",
    "path": "/supervisor/addFactorySupervisor",
    "type": "ajax",
    "requiredParams": {
      "factoryId": "",
      "data": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq807": {
    "id": "rq807",
    "name": "删除工厂超级管理员",
    "path": "/supervisor/removeFactorySupervisor",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq808": {
    "id": "rq808",
    "name": "记录用户操作",
    "path": "/supervisor/saveOperationRecord",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2011": {
    "id": "rq2011",
    "name": "检查订单编号是否唯一",
    "path": "/aux/checkOrderNumberUnique",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2012": {
    "id": "rq2012",
    "name": "简单查询产品",
    "path": "/aux/getProductsForAutoComplete",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2013": {
    "id": "rq2013",
    "name": "简单查询生产批次",
    "path": "/aux/getProcessForAutoComplete",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2014": {
    "id": "rq2014",
    "name": "简单查询所有工序",
    "path": "/aux/getProceduresForAutoComplete",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2015": {
    "id": "rq2015",
    "name": "简单查询所有制单员",
    "path": "/aux/getCreatorsForAutoComplete",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2016": {
    "id": "rq2016",
    "name": "员工简单查询",
    "path": "/aux/getEmployeesForAutoComplete",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2017": {
    "id": "rq2017",
    "name": "部门简单查询",
    "path": "/aux/getDepartmentForAutoComplete",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2018": {
    "id": "rq2018",
    "name": "根据订单号查询交付情况",
    "path": "/aux/getDeliveryInfo",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2019": {
    "id": "rq2019",
    "name": "根据物料id查找现有物料数量",
    "path": "/aux/getMaterialNumber",
    "type": "ajax",
    "requiredParams": {
      "id": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2020": {
    "id": "rq2020",
    "name": "查找产品并带出批次与生产工序",
    "path": "/aux/getProductsWithProcessAndProcedures",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2021": {
    "id": "rq2021",
    "name": "根据用户名查找工厂id",
    "path": "/aux/getFactoryIdByCustomerName",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2022": {
    "id": "rq2022",
    "name": "获取所有充值产品",
    "path": "/aux/getChargePeriod",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2111": {
    "id": "rq2111",
    "name": "通用创建接口",
    "path": "/common/create",
    "type": "ajax",
    "requiredParams": {
      "model": ""
    },
    "optionalParams": {
      "data": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2112": {
    "id": "rq2112",
    "name": "通用更新接口",
    "path": "/common/update",
    "type": "ajax",
    "requiredParams": {
      "model": ""
    },
    "optionalParams": {
      "data": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2113": {
    "id": "rq2113",
    "name": "通用删除接口",
    "path": "/common/delete",
    "type": "ajax",
    "requiredParams": {
      "model": ""
    },
    "optionalParams": {
      "data": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2114": {
    "id": "rq2114",
    "name": "通用查询接口",
    "path": "/common/get",
    "type": "ajax",
    "requiredParams": {
      "model": ""
    },
    "optionalParams": {
      "data": ""
    },
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2115": {
    "id": "rq2115",
    "name": "通用批量删除接口",
    "path": "/common/batchDelete",
    "type": "ajax",
    "requiredParams": {
      "ids": ""
    },
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2116": {
    "id": "rq2116",
    "name": "通用导出接口",
    "path": "/common/export",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  },
  "rq2117": {
    "id": "rq2117",
    "name": "批量导出接口",
    "path": "/common/batchExport",
    "type": "ajax",
    "requiredParams": "",
    "optionalParams": "",
    "use_log": false,
    "events": [],
    "init_event": []
  }
}
module.exports = configs;