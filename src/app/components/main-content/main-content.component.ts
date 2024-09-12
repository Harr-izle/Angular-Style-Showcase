import { Component } from '@angular/core';
import { FruitsLayoutComponent } from "../fruits-layout/fruits-layout.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FruitsLayoutComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
