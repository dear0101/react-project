export function getStorages (){
    return localStorage.getItem('todolist')||'[]';
}
export function setStorages (todo){
    localStorage.setItem('todolist',JSON.stringify(todo));
}