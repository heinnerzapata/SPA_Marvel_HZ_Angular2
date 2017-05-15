import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './views/test/test.component';
import { Test2Component } from './views/test2/test2.component';

const Router: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'test2', component: Test2Component }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(Router);
