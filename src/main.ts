import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Removendo o provedor de roteamento para desativar o roteador
bootstrapApplication(AppComponent, {
  providers: []
})
  .catch((err) => console.error(err));
