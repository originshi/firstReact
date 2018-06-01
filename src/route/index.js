
import LoadAble from 'react-loadable';
import Loading from './../components/loading';
import App from '../components/app';

const A=LoadAble({loader:()=>import('./../components/syn/index'),loading:Loading})
const routes=[{

    component:App,
    routes:[{
        path:'/',
        component:A
    }]
}]
export default routes;