import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'copy-to-clipboard';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  constructor(private clipboardService: ClipboardService, private clipboard: Clipboard) {}
  copyContent() {
    this.clipboardService.copyFromContent(this.text);
    alert('Copied!');
  }

  longStringToCopy: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus tristique ex. Donec placerat sit amet tortor at sollicitudin. Nullam dictum consequat efficitur. Morbi vehicula ut leo in porta. Sed vitae lacus lorem. Maecenas varius lectus quis vestibulum pellentesque. Duis congue efficitur risus, quis egestas velit eleifend id. In condimentum sollicitudin mi. Phasellus facilisis ante in enim vulputate bibendum. Aenean enim felis, pharetra quis sagittis a, sagittis et dolor.';
copyLongText() {
    const pending = 
            this.clipboard.beginCopy(this.longStringToCopy);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }
}
