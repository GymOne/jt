import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {exercise} from "../entities/exercise.entity";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private _http: HttpClient) {

  }

  public createExercise(name:string){
    return this._http.post(`http://localhost:3000/exercise/create`, {name:name});
  }

  public getAllExercises():Observable<exercise[]>{
    return this._http.get<exercise[]>(`http://localhost:3000/exercise/getAllExercises`);
  }

  public findById(exerciseId:string){
    return this._http.get(`http://localhost:3000/exercise/findById/${exerciseId}`);
  }

  public deleteById(exerciseId:string){
    return this._http.delete(`http://localhost:3000/exercise/deleteById/${exerciseId}`);
  }

}
