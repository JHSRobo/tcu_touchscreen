import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShutdownService implements OnInit {

  private apiUrl = 'http://localhost:3000/bottomside-shutdown';
  private shutdownResponse: Subject<boolean>;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.shutdownResponse = new Subject<boolean>();
  }

  public shutdown() {
    this.http.get(this.apiUrl).subscribe(v => {
      console.log(v);
    });
  }

}
