import {Routes} from '@angular/router';

import { HomeComponent } from './home/home.component'; //copy from app.module.ts
import { AboutComponent } from './about/about.component'; //copy from app.module.ts
import { ProjectsComponent } from './projects/projects.component'; //copy from app.module.ts

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
    }
]

export default appRoutes;