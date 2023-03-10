export default [
    {title:'企业首页',url:'/index',icon:'el-icon-menu',name:'index',component:'index'},
    {
      title:'申请类别',
      url:'/approvalApply',
      icon:'el-icon-menu',
      name:'approvalApply',component:'approvalApply',
      children:[
        {
            title:'办公审批',
            url:'/approvalApply/officeApply',
            icon:'el-icon-menu',
            name:'officeApply',
            component:'approvalApply/officeApply'
        },
        {
            title:'请假审批',
            url:'/approvalApply/leaveApply',
            icon:'el-icon-menu',
            name:'leaveApply',
            component:'approvalApply/leaveApply'
        },
      ]
    },
    {
        title:'申请管理',
        url:'/approvalManage',
        icon:'el-icon-menu',
        name:'approvalManage',component:'approvalManage',
        children:[
          {
              title:'办公审批',
              url:'/approvalManage/officeManage',
              icon:'el-icon-menu',
              name:'officeManage',
              component:'approvalManage/officeManage'
          },
          {
              title:'请假审批',
              url:'/approvalManage/leaveManage',
              icon:'el-icon-menu',
              name:'leaveManage',
              component:'approvalManage/leaveManage'
          },
        ]
      },
    {title:'企业档案管理',url:'/fileManage',icon:'el-icon-menu',name:'fileManage',component:'fileManage'},
    {title:'全局组件',url:'/test',icon:'el-icon-menu',name:'test',component:'test'},
]