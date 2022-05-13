import {exercise} from "../../entities/exercise.entity";
import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {append, patch} from "@ngxs/store/operators";
import {LoadExercises,CreateExercise,DeleteExercise} from "../actions/exercise.action";
import {ExerciseService} from "../../service/exercise.service";

export class ExerciseStateModel {
  exercises!: exercise[];
}

@State<ExerciseStateModel>({
  name: 'exercise',
  defaults: {
    exercises: [],
  }
})
@Injectable()
export class ExerciseState{

  @Selector()
  static getExercises(state: ExerciseStateModel) {
    return state.exercises;
  }

  constructor(private _exerciseService :ExerciseService,private store: Store) {
  }

  @Action(LoadExercises)
  LoadExercises(ctx: StateContext<ExerciseStateModel>) {
    this._exerciseService.getAllExercises().subscribe(value => {
        ctx.patchState({
          exercises:value
        });
      },
      err => {
      })
  }

  @Action(CreateExercise)
  CreateExercise(ctx: StateContext<ExerciseStateModel>,action:CreateExercise){
    this._exerciseService.createExercise(action.name).subscribe(value => {
      ctx.setState(
        patch({
          exercises: append([value as exercise])
        }))
    })
  }

  @Action(DeleteExercise)
  DeleteExercise(ctx: StateContext<ExerciseStateModel>,action:DeleteExercise){
    this._exerciseService.deleteById(action.exerciseId).subscribe(_ => {
      this.store.dispatch(new LoadExercises())
    });
  }

}
