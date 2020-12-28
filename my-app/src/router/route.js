import {Route} from "react-router-dom";
import menuList from './menuConfig.js';
function Routes (){
    return (
        menuList.map((item, index) => {
            if(item.children){
                return(
                        item.children.map((child, index) => {
                            return (
                                <Route key={child.key} path={child.key} component={child.component}></Route>
                            )
                        })
                )
            }else{
                return (
                   <Route key={item.key} path={item.key} component={item.component}></Route>
                )
            }
           
        })
    )
}
export default Routes;