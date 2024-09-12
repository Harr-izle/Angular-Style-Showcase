import { Component } from '@angular/core';
import { HoverDirectiveDirective } from '../../directive/hover-directive.directive';

@Component({
  selector: 'app-veggies-layout',
  standalone: true,
  imports: [HoverDirectiveDirective],
  templateUrl: './veggies-layout.component.html',
  styleUrl: './veggies-layout.component.scss'
})
export class VeggiesLayoutComponent {

}
