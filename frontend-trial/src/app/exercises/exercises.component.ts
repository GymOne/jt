import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../shared/service/exercise.service";
import {ExerciseState} from "../shared/stores/states/exercise.state";
import {Observable} from "rxjs";
import {exercise} from "../shared/entities/exercise.entity";
import {CreateExercise, DeleteExercise, LoadExercises} from "../shared/stores/actions/exercise.action";
import {Select, Store} from "@ngxs/store";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit  {

  name = ''

  isAddMode: boolean = true;

  @Select(ExerciseState.getExercises)
  exercises$!: Observable<exercise[]>;

  constructor(private store:Store, private exerciseService:ExerciseService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = true;


  }


  ngOnInit(): void {

    this.store.dispatch(new LoadExercises)
  }

  deleteExercise(exerciseId:string){
    this.store.dispatch(new DeleteExercise(exerciseId))
  }

  createExercise(name:string){
    this.store.dispatch(new CreateExercise(name))
  }


  open(content: any, isAddMode: boolean) {
    this.isAddMode = isAddMode;
    this.modalService.open(content);
  }

  open2(content: any) {
    this.modalService.open(content);
  }
}
