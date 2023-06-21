import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css'],
})
export class FileSelectorComponent {
  selectedFiles: File[] = [];

  @Output() filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      if (!this.isFileSelected(file)) {
        this.selectedFiles.push(file);
      }
    }
    this.emitFilesSelected();
  }

  removeFile(file: File) {
    const index = this.selectedFiles.indexOf(file);
    if (index !== -1) {
      this.selectedFiles.splice(index, 1);
      this.emitFilesSelected();
    }
  }
  private isFileSelected(file: File): boolean {
    return this.selectedFiles.some(
      (selectedFile) => selectedFile.name === file.name
    );
  }
  private emitFilesSelected() {
    this.filesSelected.emit(this.selectedFiles);
  }
}
