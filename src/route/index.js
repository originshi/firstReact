
import LoadAble from 'react-loadable';
import Loading from './../components/loading';
import App from '../components/app';

const A=LoadAble({loader:()=>import('./../components/syn/index'),loading:Loading})
const B=LoadAble({loader:()=>import('./../components/asyn/index'),loading:Loading})
const C=LoadAble({loader:()=>import('../components/app'),loading:Loading})
const routes=[{

    component:App,
    routes:[{
        path:'/',
        exact:true,
        component:B
    },
    {
        path:'/b',
        component:B
    }]
}]
export default routes;