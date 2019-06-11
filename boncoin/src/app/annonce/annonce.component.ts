import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Annonce } from '../classes/Annonce';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  @Input() annonce;

  @Output() informParentEvent = new EventEmitter<any>();
  @Output() deletedEvent = new EventEmitter<any>();
  @Output() updatedEvent = new EventEmitter<Annonce>();
  constructor() { }

  ngOnInit() {
  }

  clickAnnonce = () => {
    this.informParentEvent.emit(this.annonce);
  }
  delete = () => {
    this.deletedEvent.emit(this.annonce);
  }

  update = () => {
    this.updatedEvent.emit(this.annonce);
  }
}
