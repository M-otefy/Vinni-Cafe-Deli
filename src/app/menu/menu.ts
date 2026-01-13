import { LanguageService } from './../Service/language.service';
import { Appetizer } from './appetizer/appetizer';
import { Component } from '@angular/core';
import { Breakfast } from "./breakfast/breakfast";
import { Salad } from './salad/salad';
import { Soup } from "./soup/soup";
import { Sandwichs } from "./sandwichs/sandwichs";
import { Pizza } from "./pizza/pizza";
import { Pasta } from "./pasta/pasta";
import { MainCourse } from "./main-course/main-course";
import { Drinks } from "./drinks/drinks";
import { Shisha } from "./shisha/shisha";
import { Dessert } from "./dessert/dessert";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Breakfast, Salad, Soup, Appetizer, Sandwichs, Pizza, Pasta, MainCourse, Drinks, Shisha, Dessert],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  labels: Record<string, { en: string; ar: string }> = {
    title: { en: 'Explore Our Menu', ar: 'استكشف قائمتنا' },
    subtitle: { en: 'Fresh breakfast, sandwiches & crafted drinks — made with love.', ar: 'إفطار طازج، ساندويتشات ومشروبات مُعدّة بحب.' },
    fullMenu: { en: 'Full Menu', ar: 'القائمة الكاملة' },
    drinks: { en: 'Drinks', ar: 'مشروبات' },
    breakfast: { en: 'Breakfast', ar: 'إفطار' },
    salad: { en: 'Salad', ar: 'سلطات' },
    soup: { en: 'Soup', ar: 'شوربة' },
    appetizers: { en: 'Appetizers', ar: 'مقبلات' },
    pasta: { en: 'Pasta', ar: 'باستا' },
    pizza: { en: 'Pizza', ar: 'بيتزا' },
    mainCourse: { en: 'Main Course', ar: 'الوجبات الرئيسية' },
    sandwich: { en: 'Sandwich', ar: 'ساندويتش' },
    dessert: { en: 'Dessert', ar: 'حلويات' },
    shisha: { en: 'Shisha', ar: 'شيشة' }
  };

  constructor(public LanguageService: LanguageService) { }

  getLabel(key: keyof typeof this.labels) {
    return this.labels[key][this.LanguageService.currentLang];
  }
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
