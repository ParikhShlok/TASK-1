import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../menu/menu';
import { Slider } from '../slider/slider';
import { ApiService, CategoryItem, ProductItem } from '../data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule, Menu, Slider],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  // Use the apiService to load categories and products from JSON files.
  // These values are Observables so the template can use the async pipe.
  protected readonly categories$: Observable<CategoryItem[]>;
  protected readonly products$: Observable<ProductItem[]>;

  constructor(private readonly apiService: ApiService) {
    this.categories$ = this.apiService.getCategories();
    this.products$ = this.apiService.getProducts();
  }
}

