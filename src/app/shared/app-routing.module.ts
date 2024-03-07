import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { ProductsComponent } from "./component/products/products.component";
import { UsersComponent } from "./component/users/users.component";
import { UserComponent } from "./component/users/user/user.component";
import { EditUserComponent } from "./component/users/edit-user/edit-user.component";

const appRoutes : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/:userId',
        component: UserComponent
    },
    {
        path: 'users/:userId/edit',
        component: EditUserComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
 constructor(){
    console.log("routing module work");
    
 }
}