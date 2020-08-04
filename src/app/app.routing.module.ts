/* core modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* components */
const routes: Routes = [
    { path: '', loadChildren: () => import('./FeatureModules/crm/Crm.module').then(m => m.CRMModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
