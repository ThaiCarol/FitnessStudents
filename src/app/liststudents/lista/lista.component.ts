import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Listaaluno } from '../model/listaaluno';
import { StudentsService } from '../services/students.service';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listas: Listaaluno[] = [];
  displayedColumns = ['Nome', 'Email', 'DataNascimento', 'Sexo', 'Actions'];

  // Injeção de Dependência do serviço
  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    // Usar o serviço para buscar os alunos e assiná-lo
    this.studentService.getStudents().subscribe(
      (data: Listaaluno[]) => {
        this.listas = data; // Atribuir os dados à variável 'listas'
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      }
    );
  }

  addStudent(newStudent: Listaaluno): void {
    this.studentService.addStudent(newStudent);
    this.listas = this.studentService.getStudentsFromLocalStorage(); // Atualiza a lista
  }

  updateStudent(index: number, updatedStudent: Listaaluno): void {
    this.studentService.updateStudent(index, updatedStudent);
    this.listas = this.studentService.getStudentsFromLocalStorage(); // Atualiza a lista
  }

  deleteStudent(index: number): void {
    this.studentService.deleteStudent(index);
    this.listas = this.studentService.getStudentsFromLocalStorage(); // Atualiza a lista
  }
}
