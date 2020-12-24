export default {
    //时间转换
    formateDate(time) {
        if (!time) return;
        let data = new Date(time);
        return data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    },

    //分页数据转换
     pagination(target,pagesize,pages){
        let total =target.slice((pagesize-1)*(pages-1), pagesize*pages)
        return total;
    }
}