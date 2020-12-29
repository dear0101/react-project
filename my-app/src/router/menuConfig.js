import Home from "../pages/home";
import Buttons from "../pages/ui/button";
import Popups from "../pages/ui/Popups";
import Load from "../pages/ui/Load";
import Tips from "../pages/ui/Tip";
import Tabs from "../pages/ui/Tabs";
import Mess from "../pages/ui/Mess";
import Picture from "../pages/ui/Picture";
import Swiper from "../pages/ui/Swiper";
import Form from "../pages/form";
import Login from "../pages/form/Login";
import Register from "../pages/form/Register";
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
                component: Popups,
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                component: Load,
                key: '/ui/loadings',
            },
            {
                title: '通知提醒',
                component: Tips,
                key: '/ui/notification',
            },
            {
                title: '全局Message',
                component: Mess,
                key: '/ui/messages',
            },
            {
                title: 'Tab页签',
                component: Tabs,
                key: '/ui/tabs',
            },
            {
                title: '图片画廊',
                component: Picture,
                key: '/ui/gallery',
            },
            {
                title: '轮播图',
                component: Swiper,
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
                component: Login,
                key: '/form/login',
            },
            {
                title: '注册',
                component: Register,
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
        title: '事件代办',
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