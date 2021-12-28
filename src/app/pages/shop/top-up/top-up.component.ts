import { TopUpFacadeService } from '@/store/top-up/top-up-facade.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss']
})
export class TopUpComponent implements OnInit {

  topUpId$: Observable<string | null> = this.topUpFacadeService.topUpId$;

  constructor(
    private topUpFacadeService: TopUpFacadeService
  ) {
  }

  ngOnInit() {
    this.topUpId$.subscribe((value) => console.log(value));
  }
}
