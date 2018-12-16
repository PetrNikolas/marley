import { Component, Input } from '@angular/core';

@Component({
  selector: 'marleyjs-shell',
  template: `    
    <h1>{{ title }}</h1>
    <div>
        <p>
          <a href="learn-more">Learn more</a>
          <br/>
          Copyright stuff is in here as well.
        </p>
    </div>
  `,
  styles: []
})
export class ShellComponent {
  @Input() title: string;
}
