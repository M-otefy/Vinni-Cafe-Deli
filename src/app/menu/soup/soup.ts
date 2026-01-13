import { Component } from '@angular/core';

import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-soup',
  standalone: true,
  imports: [],
  templateUrl: './soup.html',
  styleUrls: ['./soup.css'],
})
export class Soup {
  constructor(public langService: LanguageService) { }

  soups = [
    {
      img: '/soup/tomato.png',
      titleEn: 'Tomato Soup',
      titleAr: 'شوربة طماطم',
      descEn: 'Rich and creamy tomato soup with basil.',
      descAr: 'شوربة طماطم غنية وكريمية مع الريحان.',
      priceEn: '69.90 EGP',
      priceAr: '٦٩٫٩٠ ج.م'
    },
    {
      img: '/soup/newChecken.png',
      titleEn: 'Chicken Soup',
      titleAr: 'شوربة دجاج',
      descEn: 'Classic chicken soup with vegetables & herbs.',
      descAr: 'شوربة دجاج كلاسيكية مع خضار وأعشاب.',
      priceEn: '94.90 EGP',
      priceAr: '٩٤٫٩٠ ج.م'
    },
    {
      img: '/soup/Mashruom.png',
      titleEn: 'Mushroom Soup',
      titleAr: 'شوربة مشروم',
      descEn: 'Creamy mushroom soup with garlic & thyme.',
      descAr: 'شوربة مشروم كريمية مع الثوم والزعتر.',
      priceEn: '91.90 EGP',
      priceAr: '٩١٫٩٠ ج.م'
    },
    {
      img: '/soup/Bro-1.png',
      titleEn: 'Broccoli Soup',
      titleAr: 'شوربة بروكلي',
      descEn: 'Creamy broccoli soup with cheese or light cream.',
      descAr: 'شوربة بروكلي كريمية مع الجبن أو الكريمة الخفيفة.',
      priceEn: '89.90 EGP',
      priceAr: '٨٩٫٩٠ ج.م'
    },
    {
      img: '/soup/lentil.png',
      titleEn: 'Lentil Soup',
      titleAr: 'شوربة عدس',
      descEn: 'Nutritious lentil soup with carrots, onions & spices.',
      descAr: 'شوربة عدس مغذية مع الجزر والبصل والتوابل.',
      priceEn: '72.90 EGP',
      priceAr: '٧٢٫٩٠ ج.م'
    },
    {
      img: '/soup/chicken.png',
      titleEn: 'Onion Soup',
      titleAr: 'شوربة بصل',
      descEn: 'Classic onion soup rich with flavor.',
      descAr: 'شوربة بصل كلاسيكية غنية بالنكهة.',
      priceEn: '72.90 EGP',
      priceAr: '٧٢٫٩٠ ج.م'
    }
  ];


  addons = [
    { img: '/add-ones/croutons (1).png', titleEn: 'Croutons', titleAr: 'خبز محمص', priceEn: '21.90 EGP', priceAr: '٢١٫٩٠ ج.م' },
    { img: '/add-ones/croutons (2).png', titleEn: 'Garlic Bread', titleAr: 'خبز بالثوم', priceEn: '21.90 EGP', priceAr: '٢١٫٩٠ ج.م' },
    { img: '/add-ones/croutons (3).png', titleEn: 'Toast', titleAr: 'توست', priceEn: '21.90 EGP', priceAr: '٢١٫٩٠ ج.م' },
  ];

}
