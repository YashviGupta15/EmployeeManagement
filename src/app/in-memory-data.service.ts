import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dbEmployees: Employee[] = [
      {
        name: 'Yashvi',
        id: 1,
        location: 'Pune',
        mobile: 8851610666,
      },
      {
        name: 'Koushik',
        id: 2,
        location: 'Bangalore',
        mobile: 9899657890,
      },
      {
        id: 3,
        name: 'Aditya',
        location: 'Delhi',
        mobile: 9876543210,
      },
      {
        name: 'Pallavi',
        id: 4,
        location: 'Kerala',
        mobile: 9087654321,
      },
    ];
    return { dbEmployees };
  }
}
