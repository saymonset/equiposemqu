import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Equipo, searchCompuBy } from '../../interfaces/equipos.interface';
import { NuevoEquipoComponent } from '../dialog/nuevo-equipo/nuevo-equipo.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  public  isAdmin : boolean = false;
  ngOnInit(): void {

    if(localStorage.getItem('isAdmin')){
      this.isAdmin = localStorage.getItem('isAdmin')?.toString()=='true';
    }
 
  }

  public dialog = inject(MatDialog);

  @Input()
  public equipos: Equipo[] = [];

  public classResuelta = "nav-link ";
  public classEnCurso ="nav-link active";

  @Output()
  public onNewCharacter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onRefrescar: EventEmitter<boolean> = new EventEmitter();

 

 


  /***Fin busqueda emitir valores */


  emitCharacter(id:string):void {
   if ( id) {
       this.onNewCharacter.emit(id);
   }
  }

  activar( act: string ): void {
    this.onNewCharacter.emit('');
    if  (act === '1') {
      this.classResuelta = "nav-link ";
      this.classEnCurso ="nav-link active";
    }else{
      this.classResuelta = "nav-link active";
      this.classEnCurso ="nav-link ";
    }

  }


  searchByCapital( term: string ):void  {
    this.onNewCharacter.emit('');
  
  }

  onNuevo(){
    const dialogRef = this.dialog.open(NuevoEquipoComponent, {
      data: {mensaje: 'Hellos', estado: 'En curso'},
      height: '400px',
      width: '80%',

    });

    dialogRef.afterClosed().subscribe(result => {

      if ( result) {
      
        this.onRefrescar.emit(result);
      }
    });
  }


  onEstado(id:string){
   
  }

}
