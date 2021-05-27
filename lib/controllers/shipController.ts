//   /lib/controllers/crmController.ts

import * as mongoose from 'mongoose';
import { ShipSchema } from '../models/ship';
import { Request, Response } from 'express';

const Ship = mongoose.model('Ship', ShipSchema);

export class ShipController{

// Create and save a new Ship    
public addNewShip (req: Request, res: Response) {
    let newShip = new Ship(req.body);

    newShip.save((err: any, ship: any) => {
        if(err){
            res.send(err);
        }
        res.json(ship);
    });
}

// Get 
public getShips (req: Request, res: Response) {
    Ship.find({}, (err: any, ship) => {
        if(err){
            res.send(err);
        }
        res.json(ship);
    });
}

public getShipId (req: Request, res: Response) {
    Ship.findById(req.params.shipId, (err: any, ship: any) => {
        if(err){
            res.send(err);
        }
        res.json(ship);
    });

}

public updateShip (req: Request, res: Response) {
    Ship.findOneAndUpdate({ _id: req.params.shipId }, req.body, { new: true }, (err, ship) => {
        if(err){
            res.send(err);
        }
        res.json(ship);
    });

}

public deleteShip (req: Request, res: Response) {
    Ship.remove({ _id: req.params.shipId }, (err: any) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact!'});
    });
}

}
