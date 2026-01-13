
import { LanguageService } from './../../Service/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shisha',
  standalone: true,
  imports: [],
  templateUrl: './shisha.html',
  styleUrl: './shisha.css',
})
export class Shisha {
  constructor(public LanguageService: LanguageService) { }

  shishaList = [
    { nameEn: 'Salom', nameAr: 'سلوم', priceEn: '42.90 EGP', priceAr: '٤٢٫٩٠ ج.م' },
    { nameEn: "Vinni's Shisha", nameAr: 'شيشة فيني', priceEn: '99.90 EGP', priceAr: '٩٩٫٩٠ ج.م' },
    { nameEn: "Vinni's Shisha Mix", nameAr: 'شيشة ميكس فيني', priceEn: '109.90 EGP', priceAr: '١٠٩٫٩٠ ج.م' },
    { nameEn: 'Healthy Lay', nameAr: 'هيلثي لاي', priceEn: '19.90 EGP', priceAr: '١٩٫٩٠ ج.م' }
  ];

}
