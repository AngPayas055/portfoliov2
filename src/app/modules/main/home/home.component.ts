import {  Component, HostListener, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeSection: HTMLElement | null = null;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = this.elementRef.nativeElement.querySelectorAll('.sec');
    const scrollPosition = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop - 10;
      const sectionHeight = section.offsetHeight;
      console.log(sectionTop)

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection = section;
        break;
      }
    }
  }

}
