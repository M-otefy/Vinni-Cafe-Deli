import { Component } from '@angular/core';
import { LanguageService } from './../../Service/language.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pasta.html',
  styleUrl: './pasta.css',
})
export class Pasta {
  constructor(public LanguageService: LanguageService) { }
  pastas = [
    {
      img: '/Pasta/154A3390.png',
      titleEn: 'Tuscan Pasta',
      titleAr: 'باستا توسكان',
      descEn: 'Nutritious tasty pasta composed of chicken, spinach, onion, cherry tomato & gouda cheese with creamy white sauce.',
      descAr: 'باستا مغذية ولذيذة مكوّنة من فراخ، سبانخ، بصل، طماطم شيري وجبنة جودة مع صوص أبيض كريمي.',
      priceEn: '214.90 EGP',
      priceAr: '٢١٤٫٩٠ ج.م'
    },
    {
      img: '/Pasta/Vinne Rest 2025 (10).png',
      titleEn: 'Aglio e Olio Pasta',
      titleAr: 'باستا أليو إي أوليو',
      descEn: 'Classic Italian pasta made with garlic, olive oil, oregano, bell peppers, olives, mushrooms & parsley.',
      descAr: 'باستا إيطالية كلاسيك بالثوم، زيت الزيتون، أوريجانو، فلفل رومي، زيتون، مشروم وبقدونس.',
      priceEn: '169.90 EGP',
      priceAr: '١٦٩٫٩٠ ج.م'
    },
    {
      img: '/Pasta/154A3370.png',
      titleEn: 'Fettuccine Alfredo Pasta',
      titleAr: 'باستا فيتوتشيني ألفريدو',
      descEn: 'Must-try pasta with chicken, mushroom & bell pepper in vinni’s special white sauce.',
      descAr: 'باستا مميزة بالفراخ، المشروم والفلفل مع صوص فيني الأبيض الخاص.',
      priceEn: '209.90 EGP',
      priceAr: '٢٠٩٫٩٠ ج.م'
    },
    {
      img: '/Pasta/27 (2).png',
      titleEn: 'Meatballs Pasta',
      titleAr: 'باستا ميت بولز',
      descEn: 'Delicious meatballs pasta with vinni’s special red sauce.',
      descAr: 'باستا كرات اللحم الشهية مع صوص فيني الأحمر الخاص.',
      priceEn: '209.90 EGP',
      priceAr: '٢٠٩٫٩٠ ج.م'
    },
    {
      img: '/Pasta/4.png',
      titleEn: 'Drumsticks Pasta',
      titleAr: 'باستا درام ستيكس',
      descEn: 'Hearty pasta with red sauce served with two seasoned chicken drumsticks.',
      descAr: 'باستا غنية بالصوص الأحمر تُقدّم مع قطعتين درام ستيكس فراخ متبّلة.',
      priceEn: '219.90 EGP',
      priceAr: '٢١٩٫٩٠ ج.م'
    },
    {
      img: '/Pasta/3.png',
      titleEn: 'Red Sauce Pasta',
      titleAr: 'باستا صوص أحمر',
      descEn: 'Authentic Italian pasta full of classic flavors with special red sauce.',
      descAr: 'باستا إيطالية أصلية بنكهات كلاسيك مع صوص أحمر مميز.',
      priceEn: '149.90 EGP',
      priceAr: '١٤٩٫٩٠ ج.م'
    }
  ];

  addons = [
  {
    img: '/add-ones/Grilled.png',
    titleEn: 'Chicken',
    titleAr: 'فراخ',
    priceEn: '48.90 EGP',
    priceAr: '٤٨٫٩٠ ج.م'
  },
  {
    img: '/add-ones/mushroom.png',
    titleEn: 'Mushroom',
    titleAr: 'مشروم',
    priceEn: '27.90 EGP',
    priceAr: '٢٧٫٩٠ ج.م'
  },
  {
    img: '/add-ones/cheese.png',
    titleEn: 'Cheese',
    titleAr: 'جبنة',
    priceEn: '26.90 EGP',
    priceAr: '٢٦٫٩٠ ج.م'
  }
  ];


}
