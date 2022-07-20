import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404component } from "./component/erro-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404component
              }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}