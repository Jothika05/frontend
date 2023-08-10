import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductUsingReactiveFormComponent } from './add-product-using-reactive-form/add-product-using-reactive-form.component';
import { ProductService } from './product.service';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "servers", component: ServersComponent },
  { path: "users", component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    AddProductUsingReactiveFormComponent,
    HighlightDirective,
    HomeComponent,
    ServersComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
