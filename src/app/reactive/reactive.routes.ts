import { Routes } from "@angular/router";
import { BasicPage } from "./page/basic-page/basic-page";
import { DynamicPage } from "./page/dynamic-page/dynamic-page";
import { SwitchesPage } from "./page/switches-page/switches-page";


export const reactiveRoutes: Routes = [
  {
    path: '',
  children: [
    {
      path:'basic',
      title: 'Básicos',
      component: BasicPage,

    },
    {
      path:'dynamic',
      title: 'Dinámicos',
      component: DynamicPage,

    },
    {
      path:'switches',
      title: 'Switches',
      component: SwitchesPage,

    },
    {
      path:'**',
      redirectTo:'basic',

    }
  ]

  }

];
