import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  standalone: false,

  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
    @Input()
    public placeholder: string = '';

    @Output()
    public onValue = new EventEmitter<string>();

    emitValue( value: string): void {
      this.onValue.emit(value);
    }
}
