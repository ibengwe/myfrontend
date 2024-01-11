import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StaffRegisterComponent } from './pages/staff-register/staff-register.component';
import { StaffListComponent } from './pages/staff-list/staff-list.component';
import { AuthGuard } from './shared/auth.guard';
import { RegionComponent } from './pages/region/region.component';
import { DistrictComponent } from './pages/district/district.component';
import { JobComponent } from './pages/job/job.component';
import { SectionComponent } from './pages/section/section.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},

  {path:"",component:MainlayoutComponent,
  canActivate:[AuthGuard],
  children:[
    {path:"signup",component:SignupComponent},
    {path:'table',component:DataTableComponent},
    {path:"logout",component:LogoutComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"region",component:RegionComponent},
    {path:"job",component:JobComponent},
    {path:"section",component:SectionComponent},
    {path:"region",component:RegionComponent},
    {path:"district",component:DistrictComponent,


  }, 

    {path:"staff_register",component:StaffRegisterComponent}, 
    {path:"staff_list",component:StaffListComponent},
    {path:"**",redirectTo:"/login",pathMatch:'full'}
     
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
