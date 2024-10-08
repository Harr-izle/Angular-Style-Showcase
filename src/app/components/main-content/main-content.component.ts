import { Component } from '@angular/core';
import { FruitsLayoutComponent } from "../fruits-layout/fruits-layout.component";
import { VeggiesLayoutComponent } from "../veggies-layout/veggies-layout.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FruitsLayoutComponent, VeggiesLayoutComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
