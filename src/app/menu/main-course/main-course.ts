
import { LanguageService } from './../../Service/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-course',
  standalone: true,
  imports: [],
  templateUrl: './main-course.html',
  styleUrl: './main-course.css',
})
export class MainCourse {

  constructor(public LanguageService: LanguageService) { }
  mainCourseChicken = [
    {
      img: '/Main course/8.png',
      titleEn: 'Chicken Aglio e Olio',
      titleAr: 'باستا دجاج أليو إي أوليو',
      descEn: 'Italian garlic & oil pasta with fresh garlic, olive oil, oregano, bell pepper, olives, mushrooms, served with grilled chicken breasts.',
      descAr: 'باستا إيطالية بالثوم وزيت الزيتون، فلفل رومي، زيتون، مشروم، مع صدور دجاج مشوية.',
      priceEn: '269.90 EGP',
      priceAr: '٢٦٩٫٩٠ ج.م'
    },
    {
      img: '/Main course/9.png',
      titleEn: 'Chicken Schnitzel',
      titleAr: 'شنيتزل دجاج',
      descEn: 'Juicy chicken breast breaded & fried, served with seasoned potato wedges & spicy tomato sauce.',
      descAr: 'صدر دجاج مقلي ومغطى بالبقسماط، يُقدّم مع بطاطس متبلة وصوص طماطم حار.',
      priceEn: '192.90 EGP',
      priceAr: '١٩٢٫٩٠ ج.م'
    },
    {
      img: '/Main course/12.png',
      titleEn: 'Chicken Fattah',
      titleAr: 'فتة دجاج',
      descEn: 'Toasted pita bread, tender chicken, bell pepper with garlic sauce.',
      descAr: 'خبز بيتا محمص، دجاج طري، فلفل رومي مع صوص ثوم.',
      priceEn: '262.90 EGP',
      priceAr: '٢٦٢٫٩٠ ج.م'
    },
    {
      img: '/Main course/16.png',
      titleEn: 'Chicken Tuscan',
      titleAr: 'دجاج توسكان',
      descEn: 'Grilled chicken in creamy white sauce with cherry tomatoes & spinach.',
      descAr: 'دجاج مشوي في صوص أبيض كريمي مع طماطم شيري وسبانخ.',
      sides: true,
      priceEn: '274.90 EGP',
      priceAr: '٢٧٤٫٩٠ ج.م'
    },
    {
      img: '/Main course/154A3494.png',
      titleEn: 'Italian Chicken',
      titleAr: 'دجاج إيطالي',
      descEn: 'Marinated sliced chicken, grilled with bell pepper, mushrooms & olives, with spicy tomato sauce.',
      descAr: 'شرائح دجاج متبلة مشوية مع فلفل، مشروم وزيتون مع صوص طماطم حار.',
      sides: true,
      priceEn: '259.90 EGP',
      priceAr: '٢٥٩٫٩٠ ج.م'
    },
    {
      img: '/Main course/154A3490.png',
      titleEn: 'Chicken Duxelle',
      titleAr: 'دجاج دوكسيل',
      descEn: 'Marinated sliced chicken grilled, tossed with bell pepper & onion in brown mushroom sauce.',
      descAr: 'شرائح دجاج متبلة مشوية مع فلفل وبصل في صوص مشروم بني.',
      sides: true,
      priceEn: '257.90 EGP',
      priceAr: '٢٥٧٫٩٠ ج.م'
    }
  ];

  mainCourseBeef = [
    {
      img: '/Main course/154A3660.png',
      titleEn: 'Beef Stew',
      titleAr: 'ستيو لحم',
      descEn: 'Juicy grilled beef slices with mushrooms & pickled onion in brown sauce.',
      descAr: 'شرائح لحم مشوي مع مشروم وبصل مخلل في صوص بني.',
      sides: true,
      priceEn: '369.90 EGP',
      priceAr: '٣٦٩٫٩٠ ج.م'
    },
    {
      img: '/Main course/14.png',
      titleEn: 'Beef Fattah',
      titleAr: 'فتة لحم',
      descEn: 'Fragrant rice, pita bread, bell pepper and slow-cooked beef in garlic-vinegar sauce.',
      descAr: 'أرز معطر، خبز بيتا، فلفل وبطء طهي اللحم مع صوص ثوم وخل.',
      priceEn: '319.90 EGP',
      priceAr: '٣١٩٫٩٠ ج.م'
    },
    {
      img: '/Main course/7.png',
      titleEn: 'Beef Schnitzel',
      titleAr: 'شنيتزل لحم',
      descEn: 'Crispy breaded beef, served with mashed potatoes & lemon sauce.',
      descAr: 'لحم مقلي مقرمش، يُقدّم مع بطاطس مهروسة وصوص ليمون.',
      priceEn: '309.90 EGP',
      priceAr: '٣٠٩٫٩٠ ج.م'
    }
  ];




}
