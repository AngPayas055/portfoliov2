import {  Component, HostListener, ElementRef  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';


// Custom email validator function
function isValidEmail(control: FormControl) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  return emailPattern.test(control.value) ? null : { invalidEmail: true };
}

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
    if(this.form.value.from_name.length <= 0 || 
      this.form.value.from_email.length <= 0 || 
      this.form.value.subject.length <= 0 || 
      this.form.value.message.length <= 0){
      return alert('All Fields are required')

    }
    
    const fromEmailFormControl = this.form.get('from_email') as FormControl;
    if (fromEmailFormControl.invalid || !fromEmailFormControl.value.includes('@')) {
      return alert('Invalid email');
    }

    emailjs.init('H5dz_L9_DPJUVZf7c')
    let response = await emailjs.send("service_p54fhys","template_59h2538",{
      from_name: this.form.value.from_name,
      to_name:  this.form.value.to_name,
      from_email:  this.form.value.from_email,
      subject:  this.form.value.subject,
      message:  this.form.value.message,
    });
    alert('sent message')
    this.form.reset()

  }

}
