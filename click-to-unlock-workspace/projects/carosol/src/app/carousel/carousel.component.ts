import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Array of carousel items
  translateValue = 0; // Initial translation value

  ngOnInit() {
    interval(2000).subscribe(() => {
      this.next();
    });
  }

  next() {
    this.translateValue -= 100; // Move to the next item
    if (this.translateValue < -((this.carouselItems.length - 1) * 100)) {
      // If reached the last item, reset to the first item
      this.translateValue = 0;
    }
   
  }
}
