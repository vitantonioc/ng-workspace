import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RouteNav } from "@tfl/core";
import { TfClienteModule } from "@tfl/componentes";
import { ProductoModule } from "@tfl/componentes";


// export const clientes = () => import(`dist/tfl-componentes`).then(m => m.TfClienteModule);
// export const productos = () => import(`dist/tfl-componentes`).then(m => m.ProductoModule);

export const routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home" },
  // por ahora no funciona en PROD las direcciones de import con promise, para importacion de librerias
  { path: "clientes", loadChildren: "dist/tfl-componentes#TfClienteModule", title: "Clientes" },
  { path: "productos", loadChildren: "dist/tfl-componentes#ProductoModule", title: "Productos" },
  { path: "clientes2", loadChildren: "dist/tfl-componentes#TfClienteModule", title: "Clientes2" },
  { path: "productos2", loadChildren: "dist/tfl-componentes#ProductoModule", title: "Productos2" }
  // { path: "clientes", loadChildren: () => import(`dist/tfl-componentes`).then(m => m.TfClienteModule), title: "Clientes" },
  // { path: "productos", loadChildren: () => import(`dist/tfl-componentes`).then(m => m.ProductoModule), title: "Productos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false /* ,  enableTracing: true  */ })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
