import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'realTime',
        loadChildren: () => import('../real-time/real-time.module').then(m => m.RealTimePageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/realTime',
    pathMatch: 'full'
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
