import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { LanguageService } from '../Service/language.service';
import emailjs from '@emailjs/browser';

type LabelKey =
  | 'name' | 'phone' | 'position' | 'selectPosition'
  | 'cv' | 'submit' | 'success'
  | 'nameError' | 'phoneError' | 'positionError' | 'cvError';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [CommonModule, Footer, ReactiveFormsModule],
  templateUrl: './hiring.html',
  styleUrls: ['./hiring.css']
})
export class Hiring {
  applyForm: FormGroup;
  submitted = false;
  successMessage = '';
  cvFile: File | null = null;
  cvName = '';

  positions = [
    { en: 'Barista', ar: 'بارستا' },
    { en: 'Kitchen Staff', ar: 'طاقم المطبخ' },
    { en: 'Service Crew', ar: 'طاقم الخدمة' },
    { en: 'Cashier', ar: 'كاشير' }
  ];

  // EmailJS
  private SERVICE_ID = 'service_bl342me';
  private TEMPLATE_ID = 'template_9spqjz1';
  private PUBLIC_KEY = 'ywdhcl5CtyfhEcQc1';

  // Cloudinary
  private CLOUD_NAME = 'djk8yn3in';
  private UPLOAD_PRESET = 'vinni_cv_upload';

  constructor(private fb: FormBuilder, public LanguageService: LanguageService) {
    this.applyForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]],
      position: ['', Validators.required],
      cv: [null, Validators.required]
    });
  }

  getCurrentPositionName(pos: { en: string; ar: string }): string {
    return this.LanguageService.currentLang === 'en' ? pos.en : pos.ar;
  }

  getLabel(key: LabelKey): string {
    const labels: Record<LabelKey, { en: string; ar: string }> = {
      name: { en: 'Full Name *', ar: 'الاسم الكامل *' },
      phone: { en: 'Phone Number *', ar: 'رقم الهاتف *' },
      position: { en: 'Position *', ar: 'الوظيفة *' },
      selectPosition: { en: 'Select position', ar: 'اختر الوظيفة' },
      cv: { en: 'Upload CV *', ar: 'ارفع السيرة الذاتية *' },
      submit: { en: 'Apply Now', ar: 'قدّم الآن' },
      success: { en: '✅ تم إرسال الطلب بنجاح. سنتواصل معك قريبًا!', ar: '✅ تم إرسال الطلب بنجاح. سنتواصل معك قريبًا!' },
      nameError: { en: 'Name is required', ar: 'الاسم مطلوب' },
      phoneError: { en: 'Enter a valid Egyptian phone number', ar: 'ادخل رقم هاتف مصري صالح' },
      positionError: { en: 'Position is required', ar: 'الوظيفة مطلوبة' },
      cvError: { en: 'CV is required', ar: 'السيرة الذاتية مطلوبة' }
    };
    return labels[key][this.LanguageService.currentLang];
  }

  onCvSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.cvFile = input.files[0];
      this.cvName = this.cvFile.name;
      this.applyForm.patchValue({ cv: this.cvFile });
    }
  }

  // رفع CV على Cloudinary
  async uploadCv(): Promise<string> {
    if (!this.cvFile) throw new Error('CV not selected');

    const formData = new FormData();
    formData.append('file', this.cvFile);
    formData.append('upload_preset', 'vinni_cv_upload');

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/raw/upload`,
      {
        method: 'POST', body: formData
      }
    );

    const data = await res.json();
    return data.secure_url;
  }



  async submitForm() {
    this.submitted = true;
    if (this.applyForm.invalid || !this.cvFile) return;

    const { name, phone, position } = this.applyForm.value;
    const positionName = this.getCurrentPositionName(position);

    try {
      // رفع CV
      const cvLink = await this.uploadCv();

      // إرسال البريد عبر EmailJS
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: name,
          phone,
          position: positionName,
          cv_link: cvLink
        },
        this.PUBLIC_KEY
      );

      // فتح واتساب
      const whatsappMessage = `طلب وظيفة – Vinni Café & Deli\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالوظيفة: ${positionName}\nرابط السيرة الذاتية: ${cvLink}`; window.open(`https://wa.me/201210552055?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

      // رسالة نجاح
      this.successMessage = this.getLabel('success');

      // إعادة تهيئة الفورم
      this.applyForm.reset();
      this.cvFile = null;
      this.cvName = '';
      this.submitted = false;

      setTimeout(() => this.successMessage = '', 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ حدث خطأ، يرجى المحاولة لاحقًا.');
      this.submitted = false;
    }
  }
}
