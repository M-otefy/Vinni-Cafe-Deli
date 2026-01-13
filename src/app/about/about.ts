import { LanguageService } from './../Service/language.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../footer/footer";



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',

})

export class About {

  constructor(public LanguageService: LanguageService) { }
  // reviews data داخل نفس الـ ts
  reviews = [
    { textEn: "Vinni Café is my favorite spot for coffee and comfort. Amazing atmosphere and delicious food!", textAr: "كافيه فيني هو مكاني المفضل للقهوة والطعام الشهي. أجواء رائعة وطعام لذيذ!", author: "Sarah M." },
    { textEn: "The fusion menu is incredible, and the staff is super friendly. Highly recommend!", textAr: "القائمة المتنوعة مذهلة، والفريق ودود جدًا. أنصح به بشدة!", author: "Ahmed K." },
    { textEn: "Best place for birthdays and meetings. The catering service is top-notch.", textAr: "أفضل مكان لأعياد الميلاد والاجتماعات. خدمة تقديم الطعام ممتازة.", author: "Dina R." },
    { textEn: "The cafe was near my airbnb. Amazing breakfast with big portions. Ordered their vinny special breakfast and Ranch Pizza. Both were delicious. Very nice staff", textAr: "المقهى كان بالقرب من Airbnb الخاص بي. فطور رائع مع حصص كبيرة. طلبت فطور فيني الخاص وبيتزا رانش. كلاهما كان لذيذًا. فريق العمل ممتاز.", author: "Irfan Ahmad" },
    { textEn: "This cafe is comfortable , its location in dokki makes the atmosphere calm , cozy & charming. * You can do the important things in this place (like : online work / interviews ) * It has indoors & outdoors . * Staff are decent , professional , smart 🤓 * Quality is v.good . * Prices are affordable .", textAr: "المقهى مريح، موقعه بالدقي يجعل الأجواء هادئة ومريحة وجذابة. * يمكنك القيام بالأعمال المهمة هنا (مثل العمل أونلاين / المقابلات) * يحتوي على أماكن داخلية وخارجية * الفريق محترف وذكي 🤓 * الجودة ممتازة * الأسعار معقولة.", author: "Dalia Waleed" },
  ];

}
