import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongodbModule} from "./infrastructure/mongo/mongodb.module";
import {ExercisesModule} from "./exercises/exercises.module";

@Module({
  imports: [MongodbModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
