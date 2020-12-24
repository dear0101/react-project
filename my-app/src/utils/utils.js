    //时间转换
function formateDate(time) {
    if (!time) return;
    let data = new Date(time);
    return data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
}

//分页数据转换
 function pagination(target,pagesize,pages){
    let total =target.slice((pagesize-1)*(pages-1), pagesize*pages)
    return total;
} 

export default {
    formateDate, pagination
}