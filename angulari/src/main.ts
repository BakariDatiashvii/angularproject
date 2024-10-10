import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Import withFetch

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule, 
    provideHttpClient(withFetch()), // Enable fetch for HttpClient
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));
