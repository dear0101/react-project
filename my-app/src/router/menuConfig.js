import Home from "../pages/home";
import Buttons from "../pages/ui/Buttons";
import Form from "../pages/form";
import Table from "../pages/table";
import Rich from "../pages/rich";
import City from "../pages/city";
import Order from "../pages/order";
import User from "../pages/user";
import BikeMap from "../pages/bikemap";
import Charts from "../pages/charts";
import Permission from "../pages/permission";

const menuList = [{
        title: '首页',
        component: Home,
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [{
                title: '按钮',
                component: Buttons,
                key: '/ui/buttons',
            },
            {
                title: '弹框',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
            },
            {
                title: '全局Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
            },
            {
                title: '图片画廊',
                key: '/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        component: Form,
        key: '/form',
        children: [{
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        component: Table,
        key: '/table',
        children: [{
                title: '基础表格',
                key: '/table/basic',
            },
            {
                title: '高级表格',
                key: '/table/high',
            }
        ]
    },
    {
        title: '富文本',
        component: Rich,
        key: '/rich'
    },
    {
        title: '城市管理',
        component: City,
        key: '/city'
    },
    {
        title: '订单管理',
        component: Order,
        key: '/order',
        btnList: [{
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        component: User,
        key: '/user'
    },
    {
        title: '车辆地图',
        component: BikeMap,
        key: '/bikeMap'
    },
    {
        title: '图表',
        component: Charts,
        key: '/charts',
        children: [{
                title: '柱形图',
                key: '/charts/bar'
            },
            {
                title: '饼图',
                key: '/charts/pie'
            },
            {
                title: '折线图',
                key: '/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        component: Permission,
        key: '/permission'
    },
];
export default menuList;