import { Component, OnInit } from '@angular/core';
import { CampaingService } from '../campaing.service';
import { ToastrService} from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-campaing',
  templateUrl: './list-campaing.component.html',
  styleUrls: ['./list-campaing.component.scss']
})
export class ListCampaingComponent implements OnInit {
  campaings: any[] = [];
  userLogger: any = localStorage.getItem('idUser');
  visible:boolean = true;
  visible2:boolean = false;
  selectedFile: File | null = null;
  campaing:any;
  monto: any;
  constructor(private api: CampaingService, private toast: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getData();
  }
getData(): void {
    this.api.getCampaing().subscribe((response: any )  => {
      console.log(response);
      this.campaings = response.data;
    });
}

  deleteCampaing(id): void {
    this.api.deleteCampaing(id).subscribe((response: any )  => {
      // tslint:disable-next-line:triple-equals
     if (response.code == 200) {
       this.toast.success(response.message);
       this.getData();
     } else {
       this.toast.error(response.message);
     }
    });
  }

  subscribeToCamp(id: any) {
   const dataToSend = {
     campaing_id: id,
     user_id: this.userLogger
   };
   this.campaing = id;
    this.visible = !this.visible;
    this.visible2 = !this.visible2;
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit(): void {
  if (this.selectedFile) {
    this.api.uploadFile(this.selectedFile,
      this.campaing, this.monto).subscribe((response): void => {
      console.log(response);
    }, function (err) {
      console.log(err);
    });
  }
  }
}
