import { LanguageService } from './../Service/language.service';
import { Component } from '@angular/core';
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public LanguageService: LanguageService) { }

  bestSellingDishes = [
    {
      img: '/home/11.png',
      titleEn: "Vinni's Special Breakfast",
      titleAr: 'فطور خاص في فيني',
      descEn: 'Nourish your taste buds with a delicious platter of scrambled eggs, toasted bread slices, papaya slices, and arugula & pan-fried crispy miniature potatoes cooked with fragrant oregano.',
      descAr: 'دلل براعم التذوق لديك مع طبق شهي من البيض المخفوق، شرائح الخبز المحمص، شرائح البابايا، والجرجير وبطاطس صغيرة مقليّة بنكهة الأوريغانو.',
    },
    {
      img: '/home/5.png',
      titleEn: 'Classic Chicken Burger',
      titleAr: 'برجر فراخ كلاسيك',
      descEn: 'Our top-notch chicken burger has a super moist texture combined with aromatic herbs & spices, served with crispy French fries and pickles.',
      descAr: 'برجر فراخ متبل وعصري يُقدّم مع بطاطس مقلية ومخلل.',
    },
    {
      img: '/home/16.png',
      titleEn: 'Orange Salad',
      titleAr: 'سلطة برتقال',
      descEn: 'A vibrant mixture of freshly picked crisp iceberg lettuce, arugula, orange wedges, cherry tomatoes and bell pepper tossed with vinni tangy dressing.',
      descAr: 'مزيج ملون من خس آيسبرغ، جرجير، شرائح برتقال، طماطم كرزية وفلفل مع صلصة فيني المنعشة.',
    }
  ];


}
