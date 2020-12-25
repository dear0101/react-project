export function getStorages (){
    return localStorage.getItem('todolist')||'[]';
}
export function setStorages (todolist){
    localStorage.setItem('todolist',JSON.stringify(todolist));
}