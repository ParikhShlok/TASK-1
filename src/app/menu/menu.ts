import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  href: string;
  dropdown?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {
  protected readonly menuItems: MenuItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Shop ▼', href: '#', dropdown: true },
    { label: 'Collections ▼', href: '#', dropdown: true },
    { label: 'Custom Order', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];
}
