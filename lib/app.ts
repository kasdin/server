// lib/app.ts
import express from "express";
import * as bodyParser from "body-parser";
import { shipRoutes } from "../routes/ship";
import { userRoutes } from "../routes/user";
import { eventRoutes } from "../routes/event";
import { eventRegRoutes } from "../routes/eventRegistration";

import mongoose from "mongoose";

class App {

    public app: express.Application;
    public shipRoute: shipRoutes = new shipRoutes();
    public userRoute: userRoutes = new userRoutes();
    public eventRoute: eventRoutes = new eventRoutes();
    public eventRegRoute: eventRegRoutes = new eventRegRoutes();


    constructor() {
        this.app = express();
        this.config();
        this.shipRoute.routes(this.app);
        this.userRoute.routes(this.app);
        this.eventRoute.routes(this.app);
        this.eventRegRoute.routes(this.app);
        this.mongoSetup();
    }


    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    public mongoUrl: string = 'mongodb://localhost/typescriptDemo';

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;