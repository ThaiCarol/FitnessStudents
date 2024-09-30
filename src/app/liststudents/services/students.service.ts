import { Injectable } from '@angular/core';
import { Listaaluno } from '../model/listaaluno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = 'https://6467a872e99f0ba0a814b5ff.mockapi.io/api/Pessoas';
  private localStorageKey = 'students';

  constructor(private http: HttpClient) { }

  // Método para buscar a lista de alunos da API externa
  getStudents(): Observable<Listaaluno[]> {
    return this.http.get<Listaaluno[]>(this.apiUrl);
  }

  // Método estático para retornar uma lista fixa de alunos, se necessário
  getStaticStudents(): Listaaluno[] {
    return [
      { Nome: 'Thais', Email: 'thais.css1@gmail.com', DataNascimento: '10/02/1988', Sexo: 'Feminino' }
    ];
  }

  // Criar um novo aluno no LocalStorage
  addStudent(student: Listaaluno): void {
    const students = this.getStudentsFromLocalStorage();
    students.push(student);
    localStorage.setItem(this.localStorageKey, JSON.stringify(students));
  }

  // Ler alunos do LocalStorage
  getStudentsFromLocalStorage(): Listaaluno[] {
    const students = localStorage.getItem(this.localStorageKey);
    return students ? JSON.parse(students) : [];
  }

  // Atualizar um aluno no LocalStorage
  updateStudent(index: number, updatedStudent: Listaaluno): void {
    const students = this.getStudentsFromLocalStorage();
    students[index] = updatedStudent;
    localStorage.setItem(this.localStorageKey, JSON.stringify(students));
  }

  // Deletar um aluno do LocalStorage
  deleteStudent(index: number): void {
    const students = this.getStudentsFromLocalStorage();
    students.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(students));
  }
}
