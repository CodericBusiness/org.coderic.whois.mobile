import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loader: boolean = false;
  public whoisForm = new FormGroup({
    type: new FormControl('domain'),
    name: new FormControl<null|string>(null, Validators.required)
  });
  public search$ = this.whoisForm.valueChanges;
  public whois$: Observable<any> = this.homeSrv.searchWhois(null);

  constructor(private homeSrv: HomeService,) {
    
    this.search$.subscribe((result: Partial<any>) => {
      this.loader = true;
      this.whois$ = this.homeSrv.searchWhois(result);
      this.whois$.subscribe({
        complete: ()=>  this.loader = false,
        error: ()=>  this.loader = false
      });
    })
  }
}
