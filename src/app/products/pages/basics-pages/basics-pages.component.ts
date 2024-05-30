import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {

  public nameLower: string = 'gustavo';
  public nameUpper: string = 'GUSTAVO';
  public fullName: string = 'gUStaVo';

  public customDate: Date = new Date();
}
