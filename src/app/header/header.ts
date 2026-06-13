import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Slider } from '../slider/slider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Menu, Slider],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}

