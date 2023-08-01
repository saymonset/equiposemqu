import {Component, EventEmitter, Input, Output, OnInit, inject} from '@angular/core';
@Component({
  selector: 'equipos-ping',
  templateUrl: './equipos-ping.component.html',
  styleUrls: ['./equipos-ping.component.css']
})
export class EquiposPingComponent implements OnInit{
 
  
 
    @Output()
    public onRefrescar: EventEmitter<boolean> = new EventEmitter();
  
    @Input()
    public detalles: string = '';
  
   
    ngOnInit(): void {
  
    }
  
     
  }
  