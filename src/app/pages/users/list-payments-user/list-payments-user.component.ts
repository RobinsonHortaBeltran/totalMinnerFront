import { Component, OnInit } from '@angular/core';
import { CampaingService } from '../../icons/campaing.service'
@Component({
  selector: 'app-list-payments-user',
  templateUrl: './list-payments-user.component.html',
  styleUrls: ['./list-payments-user.component.scss']
})
export class ListPaymentsUserComponent implements OnInit {

  constructor(private _payment: CampaingService) { }
payments: any;
  ngOnInit() {
    this.getPayments();
  }
getPayments(): void {
    this._payment.getPayments().subscribe((response:any) => {
      this.payments = response.data;
    });
}
  openImageInNewWindow(imageUrl: string) {
    window.open(imageUrl, '_blank');
  }
}
