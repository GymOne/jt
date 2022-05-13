import { Connection } from 'mongoose';
import { WorkoutSessionSchema } from "./schemas/workouts-session.schema";

export const WorkoutsProvider = [
  {
    provide: 'WORKOUT_SESSION_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Workout', WorkoutSessionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
