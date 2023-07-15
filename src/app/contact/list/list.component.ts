import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { IContact } from 'src/app/types/IContact.interface';

@Component({
  selector: 'app-list',
  template: `
  <div>
    <ul>
      <li  *ngFor="let contact of contacts">
    {{contact.fullName}}
    <button (click)="onDeleteHandler(contact.id)">X</button>
</li>
</ul></div>
   
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {
  private contactService = inject(ContactService);
  contacts: IContact[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContact().subscribe(response => {
      console.log('#33', response)
        this.contacts = response;
    })
    
  }

  onDeleteHandler(contactId: number){
    this.contactService.deleteContact(contactId).subscribe(response => {
      console.log('Deleted succssfully');
      this.contacts = this.contacts.filter(contact => contact.id != contactId);
    })
  }
}
