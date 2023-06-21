import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-selector';
  onFilesSelected(files: File[]) {
    // Handle the selected files here
    console.log(files);
  }
}
