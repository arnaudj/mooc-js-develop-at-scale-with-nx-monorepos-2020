import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { storeFeatureGameDetailRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(storeFeatureGameDetailRoutes)],
})
export class StoreFeatureGameDetailModule {}
