import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api/api.service';
import { ListComponent } from 'src/app/admin/components/list/list.component';

@Component({
  selector: 'app-admin-ballads',
  templateUrl: './ballads.page.html',
  styleUrls: ['./ballads.page.scss']
})
export class AdminBalladsPage extends ListComponent implements OnInit {

  constructor(_apiService: ApiService) {
    super(_apiService);
  }

  ngOnInit() {
    this.component = 'ballads';
    this.defineRoutes();
    this.baseGetData();
  }

  defineRoutes() {
    this.routes.api.list = 'ballads'
    this.routes.web.create = 'ballads/create'
  }

  edit(id: string) {
    this.routes.web.edit = `ballads/edit/${id}`;
    this.baseGoToEditPage();
  }

  delete() {
    this.routes.api.delete = `ballads/${this.dataItemId}`;
    this.baseDelete();
  }

}
