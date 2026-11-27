import { Routes } from "@angular/router";
import { Products } from "./products.component";
import { productGuard } from "./product-guard";

export const productRoutes: Routes = [
    {
        path: '', 
        component: Products,
        children: [
            {
                path: ':id', 
                canActivate: [productGuard],
                loadComponent: () => import('./product-detail/product-detail').then(c => c.ProductDetail)
            }
        ] 
    },
    
]