import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Controller('exercise')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post('create')
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get('findAllExercises')
  findAllExercises() {
    return this.exercisesService.findAllExercises();
  }

  @Get('findById/:id')
  findOneById(@Param('id') id: string) {
    return this.exercisesService.findOneById(id);
  }

  @Delete('deleteById/:id')
  removeById(@Param('id') id: string) {
    return this.exercisesService.removeById(id);
  }
}
