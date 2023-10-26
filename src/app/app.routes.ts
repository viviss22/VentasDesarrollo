import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NarvarComponent } from './narvar/narvar.component';

const APP_ROUTES: Routes = [
{path:'home', component: HomeComponent},
{path: 'narvar', component: NarvarComponent},
{path:'**', pathMatch:'full', redirectTo:'home'},

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
