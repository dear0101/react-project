import {BrowserRouter as Router,Route} from "react-router-dom";
import menuList from './menuConfig.js';
function Routes (){
    return (
        menuList.map((item, index) => {
            if(item.children){
                item.children.map((child, index) => {
                    return (
                        <Route  path={child.key} component={child.component}></Route>
                    )
                })
            }else{
                return (
                    <Route  path={item.key} component={item.component}></Route>
                )
            }
        })
    )
}
export default Routes;