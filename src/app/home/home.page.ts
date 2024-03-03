import { Component } from '@angular/core';
import { HomeService, QueryInterface } from '../home.service';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loader: boolean = false;
  public whoisForm = new FormGroup({
    type: new FormControl<QueryInterface['type']>('domain'),
    name: new FormControl<QueryInterface['name']>(null, Validators.required),
  });
  public search$: Observable<any> = this.whoisForm.valueChanges;
  public whois$: Observable<any> = this.homeSrv.searchWhois(null);

  constructor(private homeSrv: HomeService) {
    this.search$.subscribe((result: Partial<QueryInterface>) => {
      console.dir(result);
      this.loader = true;
      if (result.name != '') {
        this.whois$ = this.homeSrv.searchWhois(result);
        this.whois$.subscribe({
          complete: () => (this.loader = false),
          error: () => (this.loader = false),
        });
      }
      else {
        this.loader = false;
      }
    });
  }

  openCapacitorSite = async () => {
    if (Capacitor.getPlatform() !== 'web') {
      await Browser.open({ url: 'https://github.com/CodericBusiness/org.coderic.whois.mobile' });
    }
    return false;
  };
}
