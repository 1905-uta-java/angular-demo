import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpclient: HttpClient) { }

  getUsers()
  {
    return this.httpclient.get<userData>(this.url);
  }
}


interface geoData{
  lat?: number;
  lng?: number;
}

interface addressData{
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: geoData;
}

interface corp{
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

interface userData{
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: addressData;
  phone?: string;
  website?: string;
  company?: corp;
}

