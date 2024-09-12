import { Component } from '@angular/core';
import { HoverDirectiveDirective } from '../../directive/hover-directive.directive';

@Component({
  selector: 'app-fruits-layout',
  standalone: true,
  imports: [HoverDirectiveDirective],
  templateUrl: './fruits-layout.component.html',
  styleUrl: './fruits-layout.component.scss'
})
export class FruitsLayoutComponent {

}
