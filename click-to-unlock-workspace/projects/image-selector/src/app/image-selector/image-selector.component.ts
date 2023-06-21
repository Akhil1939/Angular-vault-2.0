import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent {
  fileCollection :File[] = [];
 srcs: string[] = [];
  @Input() imgHeight = '100px';
  @Input() imgWidth = '100px';
  @Output() fileSelected = new EventEmitter<File[]>();

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) this.handleFile(target.files);
  }
//handleFile() method is used to handle the file selection event.
  handleFile(files: FileList): void {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) {
          window.alert('Please select image files only.');
          return;
        }
        this.fileCollection.push(file);
        const reader = new FileReader();
        reader.onloadend = (event: ProgressEvent<FileReader>) => {
          if (event.target && event.target.result) {
            this.srcs.push(event.target.result as string);
          }
        };
        reader.readAsDataURL(files[i]);
      }
      this.fileSelected.emit(this.fileCollection);

    }
  }

  //removeSrc() method is used to remove the selected image from the list.
  removeSrc(src: string): void {
    const index = this.srcs.indexOf(src);
    if (index > -1) {
      this.srcs.splice(index, 1);
      this.fileCollection.splice(index, 1);
      this.fileSelected.emit(this.fileCollection);
      
    }
  }

  //onFileDropped() method is used to handle the file drop event.
  onFileDropped(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) this.handleFile(files);
  }

  //onDragOver() method is used to handle the drag over event.
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  //onDragLeave() method is used to handle the drag leave event.
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

}

//done
