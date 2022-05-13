"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbProvider = void 0;
const mongoose = require("mongoose");
exports.mongodbProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://localhost/jt'),
    },
];
//# sourceMappingURL=mongodb.provider.js.map