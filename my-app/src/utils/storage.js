export function getStorages (){
    let data= localStorage.getItem('todolist')||'[]';
    return data ;
}
export function setStorages (item){
    let todoData= localStorage.getItem('todolist')||'[]';
    localStorage.setItem('todolist',JSON.stringify([...JSON.parse(todoData),item]));
}