import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component'; //copy from app.module.ts
import { AboutComponent } from './about/about.component'; //copy from app.module.ts
import { ProjectsComponent } from './projects/projects.component'; //copy from app.module.ts
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component'; //set up the route for login page - assignment 2

const appRoutes : Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'projects',
        component: ProjectsComponent
    },
    {
        path:'services',
        component: ServicesComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
]

export default appRoutes;