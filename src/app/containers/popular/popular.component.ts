import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/interfaces/api.service';


@Component({
  selector: 'tx-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

  }

}
