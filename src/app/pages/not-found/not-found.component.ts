import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

  constructor(private TitleService: Title) { }

  ngOnInit() {
    this.TitleService.setTitle('404 | Укрпошта');
  }

}
