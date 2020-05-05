import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvVarService {

  constructor() { }

  ADMIN: string = "admin";
  EMPLOYEE: string = "employee";
  SUPERUSER: string = "superuser";
}
