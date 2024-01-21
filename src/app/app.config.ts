import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-10ae7","appId":"1:356531221846:web:68570723a2b9d0671792f7","storageBucket":"ring-of-fire-10ae7.appspot.com","apiKey":"AIzaSyCs2vtxYGbrBI6TW_A-vP3Cd1nu5TMAh4w","authDomain":"ring-of-fire-10ae7.firebaseapp.com","messagingSenderId":"356531221846","measurementId":"G-0N207MQSW1"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
