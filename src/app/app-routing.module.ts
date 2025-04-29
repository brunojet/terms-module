import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeComponent } from './pages/notice/notice.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: 'notice', pathMatch: 'full' },
  { path: 'notice', component: NoticeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}