import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface CategoryItem {
  image: string;
  title: string;
  id: number;
}

export interface ProductVariant {
  size: string;
  price: string;
}

export interface ProductItem {
  id: number;
  title: string;
  color?: string[];
  eta?: number;
  rating?: number;
  description?: string[];
  images: string[];
  variant?: ProductVariant[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private readonly http: HttpClient) {}

  getCategories(): Observable<CategoryItem[]> {
    return isPlatformBrowser(this.platformId)
      ? this.http.get<CategoryItem[]>('/category.json')
      : of([]);
  }

  getProducts(): Observable<ProductItem[]> {
    return isPlatformBrowser(this.platformId)
      ? this.http.get<ProductItem[]>('/products.json')
      : of([]);
  }
}
