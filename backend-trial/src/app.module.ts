import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsModule } from './workouts/workouts.module';
import {MongodbModule} from "./infrastructure/mongo/mongodb.module";

@Module({
  imports: [WorkoutsModule, MongodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
