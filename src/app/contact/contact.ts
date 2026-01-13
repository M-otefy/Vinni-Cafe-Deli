import { Component } from '@angular/core';
import { LanguageService } from '../Service/language.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(public LanguageService: LanguageService) { }

  contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      textEn: '22 Hendawi Street, From Vinni Square, El Dokki',
      textAr: '٢٢ شارع هندوي، من ميدان فيني، الدقي',
      link: ''
    },
    {
      icon: 'fas fa-phone-alt',
      textEn: '012-1055-2055',
      textAr: '012-1055-2055',
      link: 'tel:01210552055'
    },
    {
      icon: 'fas fa-phone-alt',
      textEn: '02-333-552-66',
      textAr: '02-333-552-66',
      link: 'tel:0233355266'
    },
    {
      icon: 'fab fa-whatsapp text-success',
      textEn: 'Chat on WhatsApp',
      textAr: 'الدردشة عبر واتساب',
      link: 'https://wa.me/201210552055',
      target: '_blank'
    },
    {
      icon: 'fas fa-envelope',
      textEn: 'info@vinni.com',
      textAr: 'info@vinni.com',
      link: 'mailto:info@vinni.com'
    }
  ];

  socialLinks = [
    { icon: 'fab fa-google', textEn: 'Google Review', textAr: 'تقييم جوجل', link: 'https://g.page/r/CaGioRnr_12QEBM/review', class: 'btn-google' },
    { icon: 'fas fa-map-marker-alt', textEn: 'Foursquare', textAr: 'فورسكوير', link: 'https://www.tripadvisor.com/Restaurant_Review-g294202-d7126013-Reviews-Vinni_Cafe_Deli-Giza_Giza_Governorate.html', class: 'btn-foursquare' },
    { icon: 'fab fa-facebook-f', textEn: 'Facebook', textAr: 'فيسبوك', link: 'https://www.facebook.com/vinnicafe', class: 'btn-facebook' },
    { icon: 'fab fa-instagram', textEn: 'Instagram', textAr: 'إنستجرام', link: 'https://www.instagram.com/vinni_cafe/', class: 'btn-instagram' }
  ];

}
