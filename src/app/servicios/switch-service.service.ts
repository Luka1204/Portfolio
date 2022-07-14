import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchServiceService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
