import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'touchscreen';

  ngOnInit() {
    localStorage.setItem('buttonText', 'Power Off');
    localStorage.setItem('buttonStyle', 'powerbuttonoff');
  }

}
