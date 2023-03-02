export default [
    {title:'企业首页',url:'/index',icon:'el-icon-menu',name:'index',component:'index'},
    {
        title:'申请类别',
        url:'/approvalApply',
        icon:'el-icon-menu',
        name:'approvalApply',
        component:'approvalApply',
        children:[
            {
                title:'办公审批',
                url:'/approvalApply/officeApply',
                icon:'el-icon-menu',
                name:'officeApply',
                component:'/approvalApply/officeApply'
            },
            {
                title:'请假审批',
                url:'/approvalApply/leaveApply',
                icon:'el-icon-menu',
                name:'leaveApply',
                component:'/approvalApply/leaveApply'
            },
        ]
    },
]