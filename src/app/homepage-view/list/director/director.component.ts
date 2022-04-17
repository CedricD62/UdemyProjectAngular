import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Director } from 'src/app/interfaces/director';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  @Input() directorModel!: Director;
  @Output() delete: EventEmitter<Director>= new EventEmitter();
  director!: Director;
  constructor() { }

  ngOnInit(): void {
    this.director = this.directorModel;
  }

  onClick():void{
    this.delete.emit(this.director);
  }
}
