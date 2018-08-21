import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { WakeUpComponent } from './wake-up/wake-up.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'character-creation',
    component: CharacterCreationComponent
  },
  {
    path: 'wake-up',
    component: WakeUpComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
