import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:WelcomeComponent, pathMatch:"full"},
  {path:"login", component:LoginPageComponent},
  {path:"signup",component:SignupPageComponent},
  {path:"home/:username/profile", component:ProfileComponent},
  {path:"home/:username",component:HomeComponent  },
  {path:"home/:username/foodcard",component:FoodcardComponent},
  {path:"aboutus",component:AboutusComponent  },
  {path:"contactus",component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
