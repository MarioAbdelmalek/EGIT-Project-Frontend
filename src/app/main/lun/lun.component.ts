import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lun',
  templateUrl: './lun.component.html',
  styleUrls: ['./lun.component.css']
})
export class LunComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

    this.route.navigate(['view']);
  }

}
