//   /lib/controllers/crmController.ts

import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController{

public addNewUser (req: Request, res: Response) {
    let newUser = new User(req.body);

    newUser.save((err: any, user: any) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}

public getUsers (req: Request, res: Response) {
    User.find({}, (err: any, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}

public getUserId (req: Request, res: Response) {
    User.findById(req.params.userId, (err: any, user: any) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });

}

public updateUser (req: Request, res: Response) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });

}

public deleteUser (req: Request, res: Response) {
    User.remove({ _id: req.params.userId }, (err: any) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted User!'});
    });
}

}
