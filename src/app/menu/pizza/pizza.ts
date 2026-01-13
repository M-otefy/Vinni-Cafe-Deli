import { Component } from '@angular/core';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.html',
  styleUrls: ['./pizza.css'],
})
export class Pizza {
  constructor(public LanguageService: LanguageService) { }

  pizzas = [
    {
      img: '/pizza/IMG_2256 - Copy.jpg',
      titleEn: 'Margarita Pizza',
      titleAr: 'بيتزا مارجريتا',
      descEn: 'The traditional Neapolitan pizza with fresh tomato sauce topped with melty mozzarella & a sprinkle of oregano.',
      descAr: 'بيتزا نابوليتان تقليدية بصلصة طماطم طازة وموتزاريلا سايحة ولمسة أوريجانو.',
      priceEn: '138.90 EGP',
      priceAr: '١٣٨٫٩٠ ج.م'
    },
    {
      img: '/pizza/IMG_2344.jpg',
      titleEn: 'BBQ Chicken Pizza',
      titleAr: 'بيتزا فراخ باربكيو',
      descEn: 'Classic BBQ chicken pizza with tangy BBQ sauce, chicken, bell pepper & olives topped with mozzarella.',
      descAr: 'بيتزا فراخ بصوص باربكيو، فلفل رومي، زيتون وموتزاريلا سايحة.',
      priceEn: '204.90 EGP',
      priceAr: '٢٠٤٫٩٠ ج.م'
    },
    {
      img: '/pizza/IMG_2326.jpg',
      titleEn: 'Pepperoni Pizza',
      titleAr: 'بيتزا بيبروني',
      descEn: 'Pepperoni slices with bell pepper & olives topped with mozzarella & oregano.',
      descAr: 'شرائح بيبروني مع فلفل رومي وزيتون وموتزاريلا وأوريجانو.',
      priceEn: '185.90 EGP',
      priceAr: '١٨٥٫٩٠ ج.م'
    },
    {
      img: '/pizza/vegetables.png',
      titleEn: 'Vegetables Pizza',
      titleAr: 'بيتزا خضار',
      descEn: 'Fresh mushrooms, tomatoes, bell pepper & onion topped with mozzarella.',
      descAr: 'مشروم طازة، طماطم، فلفل رومي وبصل مع موتزاريلا.',
      priceEn: '162.90 EGP',
      priceAr: '١٦٢٫٩٠ ج.م'
    },
    {
      img: '/pizza/mashroum.jpg',
      titleEn: 'Mushroom Pizza',
      titleAr: 'بيتزا مشروم',
      descEn: 'Fresh mushrooms with melty mozzarella & a sprinkle of oregano.',
      descAr: 'مشروم طازة مع موتزاريلا سايحة ولمسة أوريجانو.',
      priceEn: '171.90 EGP',
      priceAr: '١٧١٫٩٠ ج.م'
    },
    {
      img: '/pizza/Vinni Cafe & Deli  mashrom - Ranch.jpg',
      titleEn: 'Ranch Pizza',
      titleAr: 'بيتزا رانش',
      descEn: 'Creamy ranch sauce topped with chicken, mozzarella, green pepper & olives.',
      descAr: 'صوص رانش كريمي مع فراخ، موزاريلا، فلفل أخضر وزيتون.',
      priceEn: '204.90 EGP',
      priceAr: '٢٠٤٫٩٠ ج.م'
    }
  ];
}
