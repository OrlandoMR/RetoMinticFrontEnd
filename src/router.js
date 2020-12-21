import vueRouter from 'vue-router'

//Import Components

import App from './App'
import Home from './components/Home'
import Iniciar from './components/Iniciar'
import Signin from './components/Signin'
import DeleteUser from './components/DeleteUser'

const router=new vueRouter(
    {
        mode:'history',
        base:__dirname,
        routes:[
            // {
            //     path:'/',
            //     name:"root",
            //     component:App
            // },
            {
                path:'/',
                name:"home",
                component:Home
            },
            {
                path:'/login',
                name:"iniciar",
                component:Iniciar
            },
            {
                path:'/signin',
                name:"signin",
                component:Signin
            },
            {
                path:'/delete',
                name:"delete",
                component:DeleteUser
            },
        ]
    }
)
export default router