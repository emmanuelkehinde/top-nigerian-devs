import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {DevsService} from "../devs.service";

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit, OnDestroy {
  private sub : Subscription;
  private lang : string;
  devs : any = [];

  constructor(private route: ActivatedRoute, private devsService: DevsService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lang = params['lang']; // (+) converts string 'id' to a number

      this.devsService.getDevs(this.lang).subscribe(devs => {
        this.devs = devs;
      });

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
