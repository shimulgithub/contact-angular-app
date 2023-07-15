import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IContact } from '../types/IContact.interface';
import { environment as env} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private httpClient = inject(HttpClient);

  getAllContact() {
   return this.httpClient.get<IContact[]>(`${env.API_SERVER_URL}/Contact`)
  }
  getOneContact(contactId: number) {
    return this.httpClient.get<IContact>(`${env.API_SERVER_URL}/Contact/${contactId}`)

  }
  saveContact(contact: IContact){
    return this.httpClient.post<IContact>(`${env.API_SERVER_URL}/Contact`, contact)

  }

  updateContact(contactId: number, contact: IContact) {
    return this.httpClient.put<Boolean>(`${env.API_SERVER_URL}/Contact/${contactId}`, contact)

  }
  deleteContact(contactId: number) {
   return this.httpClient.delete<Boolean>(`${env.API_SERVER_URL}/Contact/Delete?id=${contactId}`)

  }
}
