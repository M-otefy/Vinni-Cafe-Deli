
import { LanguageService } from './../../Service/language.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dessert.html',
  styleUrl: './dessert.css',
})
export class Dessert {
  constructor(public LanguageService: LanguageService) { }
  desserts = [
    { nameEn: 'Oreo Madness', nameAr: 'أوريو مادنس', priceEn: '91.90 EGP', priceAr: '٩١٫٩٠ ج.م' },
    { nameEn: 'Nutella Crepe', nameAr: 'كريب نوتيلا', priceEn: '78.90 EGP', priceAr: '٧٨٫٩٠ ج.م' },
    { nameEn: 'Vinni Ice Cream', nameAr: 'آيس كريم فيني', detailsEn: 'Vanilla, Chocolate, Mango, Strawberry', detailsAr: 'فانيلا، شوكولاتة، مانجو، فراولة', priceEn: '79.90 EGP', priceAr: '٧٩٫٩٠ ج.م' },
    { nameEn: 'Brownie', nameAr: 'براوني', priceEn: '82.90 EGP', priceAr: '٨٢٫٩٠ ج.م' },
    { nameEn: 'Molten Cake', nameAr: 'مولتن كيك', priceEn: '86.90 EGP', priceAr: '٨٦٫٩٠ ج.م' },
    { nameEn: 'Cheesecake', nameAr: 'تشيز كيك', detailsEn: 'Caramel, Chocolate, Strawberry, Blueberry', detailsAr: 'كراميل، شوكولاتة، فراولة، توت أزرق', priceEn: '84.90 EGP', priceAr: '٨٤٫٩٠ ج.م' }
  ];


}
