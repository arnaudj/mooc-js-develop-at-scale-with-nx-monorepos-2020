import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { storeFeatureGameDetailRoutes } from './lib.routes';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(storeFeatureGameDetailRoutes)],
  declarations: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
