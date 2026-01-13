import { Component } from '@angular/core';

import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-salad',
  standalone: true,
  imports: [],
  templateUrl: './salad.html',
  styleUrls: ['./salad.css'],
})
export class Salad {
  // Inject LanguageService
  constructor(public langService: LanguageService) { }


  salads = [
    {
      img: '/salads/Gemini_Generated_Image_pkib4wpkib4wpkib.png',
      titleEn: 'Green Salad',
      titleAr: 'سلطة خضراء',
      descEn: 'Assorted fresh vegetables drizzled with lemon.',
      descAr: 'خضروات طازجة متنوعة مع عصير ليمون.',
      priceEn: '81.90 EGP',
      priceAr: '٨١٫٩٠ ج.م'
    },
    {
      img: '/salads/Greek salad.png',
      titleEn: 'Greek Salad',
      titleAr: 'سلطة يونانية',
      descEn: 'Assorted fresh vegetables tossed with feta cheese & a sprinkle of herbs on top.',
      descAr: 'خضروات طازجة مع جبنة فيتا ورشة أعشاب.',
      priceEn: '138.90 EGP',
      priceAr: '١٣٨٫٩٠ ج.م'
    },
    {
      img: '/salads/IMG_1199.png',
      titleEn: 'Chicken Caesar Salad',
      titleAr: 'سلطة سيزر بالدجاج',
      descEn: 'Crisp, and fresh lettuce with perfectly juicy, and seasoned grilled chicken drenched in Caesar dressing',
      descAr: 'خس طازج مع دجاج مشوي متبل وصلصة سيزر لذيذة',
      priceEn: '166.90 EGP',
      priceAr: '١٦٦٫٩٠ ج.م'
    },
    {
      img: '/salads/30.png',
      titleEn: 'Caesar Salad',
      titleAr: 'سلطة سيزر',
      descEn: 'Iceberg lettuce drenched in Caesar dressing.',
      descAr: 'خس آيسبرغ مع صلصة سيزر.',
      priceEn: '109.90 EGP',
      priceAr: '١٠٩٫٩٠ ج.م'
    },
    {
      img: '/salads/16.png',
      titleEn: 'Orange Salad',
      titleAr: 'سلطة برتقال',
      descEn: 'A Vibrant mixture of freshly picked crisp iceberg lettuce, arugula, orange wedges, cherry tomatoes and bell pepper tossed with vinni tangy dressing',
      descAr: 'مزيج ملون من خس آيسبرغ، جرجير، شرائح برتقال، طماطم كرزية وفلفل مع صلصة فيني المنعشة',
      priceEn: '81.90 EGP',
      priceAr: '٨١٫٩٠ ج.م'
    }
  ];



}
