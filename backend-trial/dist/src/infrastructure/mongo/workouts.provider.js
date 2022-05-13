"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutsProvider = void 0;
const workouts_session_schema_1 = require("./schemas/workouts-session.schema");
exports.WorkoutsProvider = [
    {
        provide: 'WORKOUT_SESSION_MODEL',
        useFactory: (connection) => connection.model('Workout', workouts_session_schema_1.WorkoutSessionSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=workouts.provider.js.map