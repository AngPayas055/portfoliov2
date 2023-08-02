import {  Component, HostListener, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeSection: HTMLElement | null = null;
  form: FormGroup = this.fb.group({
    from_name: "",
    to_name: "Admin",
    from_email: "",
    subject: "",
    message: "",
  })
  constructor(private elementRef: ElementRef, private fb: FormBuilder) {}

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = this.elementRef.nativeElement.querySelectorAll('.sec');
    const scrollPosition = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop - 10;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection = section;
        break;
      }
    }
  }
  async send(){
    emailjs.init('H5dz_L9_DPJUVZf7c')
    let response = await emailjs.send("service_p54fhys","template_59h2538",{
      from_name: this.form.value.form_name,
      to_name:  this.form.value.to_name,
      from_email:  this.form.value.from_email,
      subject:  this.form.value.subject,
      message:  this.form.value.message,
    });
    alert('sent message')
    this.form.reset()

  }

}
