import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.readAsDataURL($event);
      reader.onload = () =>{
        resolve({
  
          base: reader.result
        })
      };
      reader.onerror = error => {
        resolve({
          base : null
        })
      }
    } catch (err) {
      return null
    }
  });

}
