import { Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'result', component: ResultComponent},
    {path: '**', component: NotFoundComponent}
];
