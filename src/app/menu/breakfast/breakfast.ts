import { Component } from '@angular/core';
import { LanguageService } from '../../Service/language.service';


@Component({
  selector: 'app-breakfast',
  standalone: true,
  imports: [],
  templateUrl: './breakfast.html',
  styleUrl: './breakfast.css',
})
export class Breakfast {

  constructor(public langService: LanguageService) { }

  dishes = [
    {
      en: {
        title: "Vinni's Special Breakfast",
        desc: "Nourish your taste buds with a delicious platter of scrambled eggs, toasted bread slices, papaya slices, and arugula & pan-fried crispy miniature potatoes cooked with fragrant oregano.",
        price: "128.90 EGP"
      },
      ar: {
        title: "فطور خاص في فيني",
        desc: "دلل براعم التذوق لديك مع طبق شهي من البيض المخفوق، شرائح الخبز المحمص، شرائح البابايا، والجرجير وبطاطس صغيرة مقليّة بنكهة الأوريغانو.",
        price: "١٢٨٫٩٠ ج.م"
      },
      img: "/breakFAst/11.png"
    },
    {
      en: { title: "Cheesy Eggs Benedict", desc: "An undeniably delicious American favorite, consisting of two slices of crispy toasted bread, each topped with a poached egg, served with papaya slices, arugula, cherry tomatoes & pan-fried crisp miniature potatoes cooked with fragrant oregano.", price: "137.90 EGP" },
      ar: { title: "بيض بنديكت بالجبن", desc: "طبق أمريكي مشهور ولذيذ، يتكون من شريحتين من الخبز المحمص المقرمش، كل واحدة عليها بيضة مسلوقة، مع شرائح البابايا، الجرجير والطماطم الكرزية وبطاطس صغيرة مقليّة بنكهة الأوريغانو.", price: "١٣٧٫٩٠ ج.م" },
      img: "/breakFAst/39.png"
    },
    {
      en: { title: "Vinni's Oriental Breakfast", desc: "A Friday morning soul mate composed of deliciously seasoned fava beans, feta cheese with tomatoes and olive oil, pita bread and your choice of eggs; boiled or omelet or sunny side up.", price: "159.90 EGP" },
      ar: { title: "الفطور الشرقي في فيني", desc: "طبق صباح الجمعة المميز المكون من فول متبل لذيذ، جبنة فيتا مع الطماطم وزيت الزيتون، خبز بيتا وخيارك من البيض: مسلوق، أومليت أو مقلي.", price: "١٥٩٫٩٠ ج.م" },
      img: "/breakFAst/18 (2).png"
    },
    {
      en: { title: "Spring Breakfast", desc: "A hearty breakfast that comes with omelet, toasted bread with jam, arugula, cherry tomatoes and orange slices.", price: "119.90 EGP" },
      ar: { title: "فطور الربيع", desc: "فطور شهي يتكون من أومليت، خبز محمص مع مربى، جرجير، طماطم كرزية وشرائح البرتقال.", price: "١١٩٫٩٠ ج.م" },
      img: "/breakFAst/27.png"
    },
    {
      en: { title: "Big Bite", desc: "A mouthwatering sandwich loaded with omelet, smoked beef, cheddar cheese sauce, lettuce & tomato served with orange slices.", price: "159.90 EGP" },
      ar: { title: "ساندوتش البيغ بايت", desc: "ساندوتش شهي محشو بالأومليت، لحم بقري مدخن، صلصة جبنة شيدر، خس وطماطم مع شرائح البرتقال.", price: "١٥٩٫٩٠ ج.م" },
      img: "/breakFAst/19.png"
    },
    {
      en: { title: "Mediterranean Omelet", desc: "A reminiscent of the authentic greek salad composed of Fluffy omelet topped with feta cheese cubes, fresh cherry tomatoes, olives & a sprinkle of oregano to add a touch of freshness, served with fresh arugula, mushrooms & potato wedges.", price: "189.90 EGP" },
      ar: { title: "أومليت البحر المتوسط", desc: "أومليت هشة مستوحاة من السلطة اليونانية الأصيلة مع جبن فيتا مكعبات، طماطم كرزية طازجة، زيتون ورشة من الأوريغانو لإضافة لمسة من الانتعاش، يقدم مع الجرجير الطازج، الفطر وقطع البطاطس.", price: "١٨٩٫٩٠ ج.م" },
      img: "/breakFAst/154A3225.png"
    }
  ];

}
