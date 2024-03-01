import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public whoisForm = new FormGroup({
    type: new FormControl('domain'),
    name: new FormControl('')
  });
  public search$ = this.whoisForm.valueChanges;
  public whois$: Observable<any> = this.homeSrv.searchWhois(null);
  
  constructor(private homeSrv: HomeService) {
    
    this.search$.subscribe((result: Partial<any>) => {
      this.whois$ = this.homeSrv.searchWhois(result);
      this.whois$.subscribe(console.dir);
    })
  }
  
}
