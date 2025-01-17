import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef, } from '@angular/material/bottom-sheet';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
  selector: 'app-material',
  imports: [ CommonModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

  constructor(private _bottomSheet: MatBottomSheet){}

  openBottomSheet(): void{
    this._bottomSheet.open(OptionsBottomSheetComponent);
  }

}
