import { Component } from '@angular/core';

import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-appetizer',
  standalone: true,
  imports: [],
  templateUrl: './appetizer.html',
  styleUrls: ['./appetizer.css'],
})
export class Appetizer {

  constructor(public langService: LanguageService) { }

  appetizers = [
    {
      img: '/appetizer/21.png',
      titleEn: 'French Fries',
      titleAr: 'بطاطس مقلية',
      descEn: 'Crispy golden fries served fresh.',
      descAr: 'بطاطس ذهبية مقرمشة تقدم ساخنة.',
      priceEn: '43.90 EGP',
      priceAr: '٤٣٫٩٠ ج.م'
    },
    {
      img: '/appetizer/16.png',
      titleEn: 'Onion Rings',
      titleAr: 'حلقات بصل',
      descEn: 'Crispy deep fried onion rings seasoned to perfection.',
      descAr: 'حلقات بصل مقلية مقرمشة ومتبلّة بإتقان.',
      priceEn: '76.90 EGP',
      priceAr: '٧٦٫٩٠ ج.م'
    },
    {
      img: '/appetizer/20.png',
      titleEn: 'Chicken Fingers',
      titleAr: 'أصابع دجاج',
      descEn: 'Crunchy fried chicken tenders, juicy from the inside.',
      descAr: 'أصابع دجاج مقلية مقرمشة من الخارج وطريّة من الداخل.',
      priceEn: '98.90 EGP',
      priceAr: '٩٨٫٩٠ ج.م'
    },
    {
      img: '/appetizer/mombar.png',
      titleEn: 'Mombar Balls',
      titleAr: 'ممبار مقلي',
      descEn: 'Egyptian-style mombar balls fried until golden.',
      descAr: 'ممبار مصري مقلي حتى اللون الذهبي.',
      priceEn: '92.90 EGP',
      priceAr: '٩٢٫٩٠ ج.م'
    },
    {
      img: '/appetizer/sambusa.png',
      titleEn: 'Sambousek',
      titleAr: 'سمبوسك',
      descEn: 'Golden fried pastry filled with meat or cheese.',
      descAr: 'عجينة مقلية ذهبية محشوة لحم أو جبنة.',
      priceEn: '74.90 EGP',
      priceAr: '٧٤٫٩٠ ج.م'
    },
    {
      img: '/appetizer/susege.png',
      titleEn: 'Eastern Sausage',
      titleAr: 'سجق شرقي',
      descEn: 'Beef sausage cooked with onions and pomegranate molasses.',
      descAr: 'سجق بقري مطهو بالبصل ودبس الرمان.',
      priceEn: '134.90 EGP',
      priceAr: '١٣٤٫٩٠ ج.م'
    },
    {
      img: '/appetizer/24.png',
      titleEn: 'Mixed Appetizers',
      titleAr: 'مقبلات متنوعة',
      descEn: 'Start your meal off with these delicious assorted appetizers platter composed of crunchy chicken strips, French fries, crispy onion rings served with three sauces.',
      descAr: 'طبق مقبلات فيني المشكل "ابدأ وجبتك بمزيج القرمشة المثالي! طبق يجمع بين قطع الدجاج المقرمشة والبطاطس الذهبية، وحلقات البصل الهشة. يُقدم مع 3 أنواع من صوصاتنا الخاصة للتغميس.',
      priceEn: '199.90 EGP',
      priceAr: '١٩٩٫٩٠ ج.م'
    },
    {
      img: '/appetizer/25.png',
      titleEn: 'Mixed Oriental Appetizers',
      titleAr: 'مقبلات شرقية متنوعة',
      descEn: 'Our crowd-pleaser; Party appetizers composed of Mombar balls, beef or cheese sambousek, Eastern sausage made with pomegranate molasses.',
      descAr: 'الخيار المفضل للجميع! تشكيلة من كرات الممبار، سمبوسك اللحم أو الجبن، والسجق الشرقي بدبس الرمان',
      priceEn: '239.90 EGP',
      priceAr: '٢٣٩٫٩٠ ج.م'
    }
  ];

  addons = [
    {
      img: '/add-ones/BBQ.png',
      titleEn: 'BBQ Sauce',
      titleAr: 'صوص باربكيو',
      priceEn: '21.90 EGP',
      priceAr: '٢١٫٩٠ ج.م'
    },
    {
      img: '/add-ones/cheeseSauce.png',
      titleEn: 'Cheese Sauce',
      titleAr: 'صوص جبنة',
      priceEn: '21.90 EGP',
      priceAr: '٢١٫٩٠ ج.م'
    },
    {
      img: '/add-ones/honyMusterd.png',
      titleEn: 'Honey Mustard',
      titleAr: 'صوص هاني ماسترد',
      priceEn: '21.90 EGP',
      priceAr: '٢١٫٩٠ ج.م'
    }
  ];

}
