import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css',
})
export class UncommonPagesComponent {
  // i18n Select
  public name: string = 'Gustavo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Valentina';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = [
    'Gustavo',
    'Valentina',
    'Benjamin',
    'Amelie',
    'Agustín',
    'Julieta',
    'Antony',
  ];
  public clientsMap = {
    '=0': 'no tenemos nunún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Gustavo',
    age: 25,
    address: 'Cali, Colombia',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
