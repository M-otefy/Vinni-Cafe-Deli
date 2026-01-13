
import { LanguageService } from './../../Service/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sandwichs',
  standalone: true,
  imports: [],
  templateUrl: './sandwichs.html',
  styleUrl: './sandwichs.css',
})
export class Sandwichs {
  constructor(public LanguageService: LanguageService) { }
  sandwiches = [
    {
      img: '/Sandwich/Vinni Cafe & Deli  (75).png',
      titleEn: 'Classic Beef Burger',
      titleAr: 'برجر لحم كلاسيك',
      descEn: 'Classic cheeseburger with a toasted bun, juicy beef patty, cheddar cheese sauce, onion, lettuce & tomato.',
      descAr: 'برجر لحم كلاسيك بعيش محمص، قطعة لحم متبلة، صوص شيدر، بصل، خس وطماطم.',
      singleEn: 'Single 169.90 EGP',
      singleAr: 'سبنجل١٦٩٫٩٠ ج.م',
      doubleEn: 'Double 204.90 EGP',
      doubleAr: 'دبل ٢٠٤٫٩٠ ج.م'
    },
    {
      img: '/Sandwich/34.png',
      titleEn: 'Vinni Chicken Crispy',
      titleAr: 'فيني تشيكن كريسبي',
      descEn: 'Ultra crispy chicken with lettuce, tomato & cheddar cheese sauce in a burger bun.',
      descAr: 'فراخ كريسبي مقرمشة مع خس وطماطم وصوص شيدر في عيش برجر.',
      priceEn: '179.90 EGP',
      priceAr: '١٧٩٫٩٠ ج.م'
    },
    {
      img: '/Sandwich/5.png',
      titleEn: 'Classic Chicken Burger',
      titleAr: 'برجر فراخ كلاسيك',
      descEn: 'Juicy seasoned chicken burger served with fries and pickles.',
      descAr: 'برجر فراخ متبل وعصري يُقدّم مع بطاطس مقلية ومخلل.',
      singleEn: 'Single 159.90 EGP',
      singleAr: ' سينجل١٥٩٫٩٠ ج.م',
      doubleEn: 'Double 199.90 EGP',
      doubleAr: 'دبل١٩٩٫٩٠ ج.م'
    },
    {
      img: '/Sandwich/Vinne Rest 2025 (6).png',
      titleEn: 'Chicken Wrap',
      titleAr: 'راب فراخ',
      descEn: 'Sliced chicken breast with lettuce, mushroom, corn, olives, tomatoes & Caesar dressing wrapped in tortilla.',
      descAr: 'شرائح فراخ مع خس، مشروم، ذرة، زيتون، طماطم وصوص سيزر ملفوفة في تورتيلا.',
      priceEn: '184.90 EGP',
      priceAr: '١٨٤٫٩٠ ج.م'
    }
  ];



}
