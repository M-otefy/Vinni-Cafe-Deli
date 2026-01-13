
import { LanguageService } from './../../Service/language.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [],
  templateUrl: './drinks.html',
  styleUrl: './drinks.css',
})
export class Drinks {
  constructor(public LanguageService: LanguageService) { }
  hotDrinks = [
    { nameEn: 'Espresso', nameAr: 'إسبريسو', priceEn: '42.90 EGP', priceAr: '٤٢٫٩٠ ج.م' },
    { nameEn: 'Espresso Double', nameAr: 'إسبريسو دوبل', priceEn: '52.90 EGP', priceAr: '٥٢٫٩٠ ج.م' },
    { nameEn: 'Macchiato', nameAr: 'ماكياتو', priceEn: '46.90 EGP', priceAr: '٤٦٫٩٠ ج.م' },
    { nameEn: 'Cortado', nameAr: 'كورتادو', priceEn: '51.90 EGP', priceAr: '٥١٫٩٠ ج.م' },
    { nameEn: 'Flat White', nameAr: 'فلات وايت', priceEn: '52.90 EGP', priceAr: '٥٢٫٩٠ ج.م' },
    { nameEn: 'American Coffee', nameAr: 'قهوة أمريكية', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Cappuccino', nameAr: 'كابوتشينو', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Café Latte', nameAr: 'كافيه لاتيه', priceEn: '54.90 EGP', priceAr: '٥٤٫٩٠ ج.م' },
    {
      nameEn: 'Flavored Latte', nameAr: 'لاتيه منكه', priceEn: '63.90 EGP', priceAr: '٦٣٫٩٠ ج.م',
      flavorsEn: 'Mocha – Caramel – Vanilla – Cinnamon – Hazelnut – Nutella',
      flavorsAr: 'موكا – كارميل – فانيلا – قرفه – بندق – نيوتيلا'
    },
    { nameEn: 'Nescafe', nameAr: 'نسكافيه', priceEn: '64.90 EGP', priceAr: '٦٤٫٩٠ ج.م' },
    { nameEn: 'Turkish Coffee', nameAr: 'قهوة تركية', priceEn: '40.90 EGP', priceAr: '٤٠٫٩٠ ج.م' },
    { nameEn: 'French Coffee', nameAr: 'قهوة فرنسية', priceEn: '44.90 EGP', priceAr: '٤٤٫٩٠ ج.م' },
    { nameEn: 'Hot Chocolate', nameAr: 'شوكولاتة ساخنة', priceEn: '51.90 EGP', priceAr: '٥١٫٩٠ ج.م' },
    { nameEn: 'Hot Cider', nameAr: 'سايدر ساخن', priceEn: '58.90 EGP', priceAr: '٥٨٫٩٠ ج.م' },
    {
      nameEn: 'Herbs Drink', nameAr: 'مشروب أعشاب', priceEn: '52.90 EGP', priceAr: '٥٢٫٩٠ ج.م',
      flavorsEn: 'Anise – Mint – Lemon – Honey', flavorsAr: 'ينسون – نعناع – ليمون – عسل'
    },
    { nameEn: 'Tea', nameAr: 'شاي', priceEn: '35.90 EGP', priceAr: '٣٥٫٩٠ ج.م' },
    { nameEn: 'Green Tea', nameAr: 'شاي أخضر', priceEn: '37.90 EGP', priceAr: '٣٧٫٩٠ ج.م' },
    {
      nameEn: 'Flavored Tea', nameAr: 'شاي منكه', priceEn: '45.90 EGP', priceAr: '٤٥٫٩٠ ج.م',
      flavorsEn: 'Strawberry – Vanilla – Peach – Raspberry – Earl Grey',
      flavorsAr: 'فراوله – فانيلا – خوخ – توت – ايرلجراي'
    },
    { nameEn: 'Hibiscus', nameAr: 'كركديه', priceEn: '37.90 EGP', priceAr: '٣٧٫٩٠ ج.م' },
    { nameEn: 'Mint', nameAr: 'نعناع', priceEn: '37.90 EGP', priceAr: '٣٧٫٩٠ ج.م' },
    { nameEn: 'Anise', nameAr: 'يانسون', priceEn: '37.90 EGP', priceAr: '٣٧٫٩٠ ج.م' },
    { nameEn: 'Cinnamon', nameAr: 'قرفة', priceEn: '37.90 EGP', priceAr: '٣٧٫٩٠ ج.م' },
    { nameEn: 'Ginger', nameAr: 'زنجبيل', priceEn: '37.90 EGP', priceAr: '٣٧٫٩٠ ج.م' }
  ];

  cocktails = [
    { nameEn: 'Florida', nameAr: 'فلوريدا', priceEn: '61.90 EGP', priceAr: '٦١٫٩٠ ج.م' },
    { nameEn: 'Electric Lemon', nameAr: 'ايلكتريك ليمون', priceEn: '67.90 EGP', priceAr: '٦٧٫٩٠ ج.م' },
    { nameEn: 'Vinni Cocktail', nameAr: 'كوكتيل فيني', priceEn: '67.90 EGP', priceAr: '٦٧٫٩٠ ج.م' },
    { nameEn: 'Strawberry Life', nameAr: 'ستروبيري لايف', priceEn: '67.90 EGP', priceAr: '٦٧٫٩٠ ج.م' },
    { nameEn: 'Mango Banana', nameAr: 'مانجو موز', priceEn: '67.90 EGP', priceAr: '٦٧٫٩٠ ج.م' },
    { nameEn: 'Mojito Bull', nameAr: 'موجيتو بول', priceEn: '82.90 EGP', priceAr: '٨٢٫٩٠ ج.م' },
    { nameEn: 'Electric Blue', nameAr: 'ايلكتريك بلو', priceEn: '66.90 EGP', priceAr: '٦٦٫٩٠ ج.م' },
    { nameEn: 'Yoghurt', nameAr: 'زبادي', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Sun Shine', nameAr: 'صن شاين', priceEn: '54.90 EGP', priceAr: '٥٤٫٩٠ ج.م' },
    { nameEn: 'Ever Green', nameAr: 'إيفر جرين', priceEn: '54.90 EGP', priceAr: '٥٤٫٩٠ ج.م' },
    { nameEn: 'Fusion Bull', nameAr: 'فيوجن بول', priceEn: '84.90 EGP', priceAr: '٨٤٫٩٠ ج.م' },
  ];

  softDrinks = [
    { nameEn: 'Soft Drinks', nameAr: 'مشروبات غازية', priceEn: '42.90 EGP', priceAr: '٤٢٫٩٠ ج.م' },
    { nameEn: 'Schweppes Gold', nameAr: 'شويبس جولد', priceEn: '43.90 EGP', priceAr: '٤٣٫٩٠ ج.م' },
    { nameEn: 'Fayrouz', nameAr: 'فايروز', priceEn: '43.90 EGP', priceAr: '٤٣٫٩٠ ج.م' },
    { nameEn: 'Soda', nameAr: 'صودا', priceEn: '51.90 EGP', priceAr: '٥١٫٩٠ ج.م' },
    { nameEn: 'Tonic', nameAr: 'تونيك', priceEn: '51.90 EGP', priceAr: '٥١٫٩٠ ج.م' },
    { nameEn: 'Birell', nameAr: 'بريل', priceEn: '44.90 EGP', priceAr: '٤٤٫٩٠ ج.م' },
    { nameEn: 'Red Bull', nameAr: 'ريد بُل', priceEn: '77.90 EGP', priceAr: '٧٧٫٩٠ ج.م' },
    { nameEn: 'Mineral Water Small', nameAr: 'مياه معدنية صغيرة', priceEn: '20.90 EGP', priceAr: '٢٠٫٩٠ ج.م' }
  ];
  freshJuices = [
    { nameEn: 'Mango', nameAr: 'مانجو', priceEn: '56.90 EGP', priceAr: '٥٦٫٩٠ ج.م' },
    { nameEn: 'Orange', nameAr: 'برتقال', priceEn: '54.90 EGP', priceAr: '٥٤٫٩٠ ج.م' },
    { nameEn: 'Guava', nameAr: 'جوافة', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Strawberry', nameAr: 'فراولة', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Lemon', nameAr: 'ليمون', priceEn: '52.90 EGP', priceAr: '٥٢٫٩٠ ج.م' },
    { nameEn: 'Lemon Mint', nameAr: 'ليمون بالنعناع', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Banana with Milk', nameAr: 'موز بالحليب', priceEn: '53.90 EGP', priceAr: '٥٣٫٩٠ ج.م' },
    { nameEn: 'Seasonal Juices', nameAr: 'عصائر موسمية', priceEn: '54.90 EGP', priceAr: '٥٤٫٩٠ ج.م' },
    { nameEn: 'Blue Lemonade', nameAr: 'ليمونادة زرقاء', priceEn: '59.90 EGP', priceAr: '٥٩٫٩٠ ج.م' }
  ];

  smoothies = [
    { nameEn: 'Mango Smoothie', nameAr: 'سموزي مانجو', priceEn: 'R 63.90 - L 68.90 EGP', priceAr: 'R ٦٣٫٩٠ - L ٦٨٫٩٠ ج.م' },
    { nameEn: 'Strawberry Smoothie', nameAr: 'سموزي فراولة', priceEn: 'R 60.90 - L 65.90 EGP', priceAr: 'R ٦٠٫٩٠ - L ٦٥٫٩٠ ج.م' },
    { nameEn: 'Kiwi Smoothie', nameAr: 'سموزي كيوي', priceEn: 'R 65.90 - L 70.90 EGP', priceAr: 'R ٦٥٫٩٠ - L ٧٠٫٩٠ ج.م' },
    { nameEn: 'Passion Fruit', nameAr: 'فاكهة باشن', priceEn: 'R 65.90 - L 70.90 EGP', priceAr: 'R ٦٥٫٩٠ - L ٧٠٫٩٠ ج.م' },
    { nameEn: 'Raspberry', nameAr: 'توت ', priceEn: 'R 65.90 - L 70.90 EGP', priceAr: 'R ٦٥٫٩٠ - L ٧٠٫٩٠ ج.م' },
    { nameEn: 'Peach', nameAr: 'خوخ', priceEn: 'R 65.90 - L 70.90 EGP', priceAr: 'R ٦٥٫٩٠ - L ٧٠٫٩٠ ج.م' },
    { nameEn: 'Mango Passion Smoothie', nameAr: 'سموزي مانجو باشن', priceEn: 'R 66.90 - L 71.90 EGP', priceAr: 'R ٦٦٫٩٠ - L ٧١٫٩٠ ج.م' },
    { nameEn: 'Mango Peach Smoothie', nameAr: 'سموزي مانجو خوخ', priceEn: 'R 67.90 - L 72.90 EGP', priceAr: 'R ٦٧٫٩٠ - L ٧٢٫٩٠ ج.م' },
    { nameEn: 'Mango Kiwi Smoothie', nameAr: 'سموزي مانجو كيوي', priceEn: 'R 67.90 - L 72.90 EGP', priceAr: 'R ٦٧٫٩٠ - L ٧٢٫٩٠ ج.م' }
  ];
  shakes = [
    { nameEn: 'Vanilla Shake', nameAr: 'ميلك شيك فانيليا', priceEn: 'R 61.90 - L 66.90 EGP', priceAr: 'R ٦١٫٩٠ - L ٦٦٫٩٠ ج.م' },
    { nameEn: 'Chocolate Shake', nameAr: 'ميلك شيك شوكولاتة', priceEn: 'R 71.90 - L 77.90 EGP', priceAr: 'R ٧١٫٩٠ - L ٧٧٫٩٠ ج.م' },
    { nameEn: 'Mango Shake', nameAr: 'ميلك شيك مانجو', priceEn: 'R 71.90 - L 77.90 EGP', priceAr: 'R ٧١٫٩٠ - L ٧٧٫٩٠ ج.م' },
    { nameEn: 'Strawberry Shake', nameAr: 'ميلك شيك فراولة', priceEn: 'R 71.90 - L 77.90 EGP', priceAr: 'R ٧١٫٩٠ - L ٧٧٫٩٠ ج.م' },
    { nameEn: 'Oreo Cookie Shake', nameAr: 'ميلك شيك اوريو', priceEn: 'R 73.90 - L 78.90 EGP', priceAr: 'R ٧٣٫٩٠ - L ٧٨٫٩٠ ج.م' },
    { nameEn: 'Caramel Shake', nameAr: 'ميلك شيك كراميل', priceEn: 'R 71.90 - L 77.90 EGP', priceAr: 'R ٧١٫٩٠ - L ٧٧٫٩٠ ج.م' },
    { nameEn: 'Chocolate Lovers', nameAr: 'ميلك شيك عشاق الشوكولاتة', priceEn: 'R 85.90 - L 89.90 EGP', priceAr: 'R ٨٥٫٩٠ - L ٨٩٫٩٠ ج.م' },
    { nameEn: 'Mix Berry Shake', nameAr: 'ميلك شيك توت مشكل', priceEn: 'R 75.90 - L 82.90 EGP', priceAr: 'R ٧٥٫٩٠ - L ٨٢٫٩٠ ج.م' }
  ];

  icedDrinks = [
    { nameEn: 'Iced Mocha', nameAr: 'موكا مثلجة', priceEn: 'R 57.90 - L 66.90 EGP', priceAr: 'R ٥٧٫٩٠ - L ٦٦٫٩٠ ج.م' },
    { nameEn: 'Iced Latte', nameAr: 'لاتيه مثلج', priceEn: 'R 53.90 - L 62.90 EGP', priceAr: 'R ٥٣٫٩٠ - L ٦٢٫٩٠ ج.م' },
    { nameEn: 'Iced Chocolate', nameAr: 'شوكولاتة مثلجة', priceEn: 'R 53.90 - L 62.90 EGP', priceAr: 'R ٥٣٫٩٠ - L ٦٢٫٩٠ ج.م' },
    { nameEn: 'Iced Caramel', nameAr: 'كراميل مثلج', priceEn: 'R 54.90 - L 63.90 EGP', priceAr: 'R ٥٤٫٩٠ - L ٦٣٫٩٠ ج.م' }
  ];
}
