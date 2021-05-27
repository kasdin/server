//   /lib/controllers/crmController.ts

import * as mongoose from 'mongoose';
import { EventRegistrationSchema } from '../models/eventRegistration';
import { Request, Response } from 'express';

const EventReg = mongoose.model('EventReg', EventRegistrationSchema);

export class EventRegController{

    
// Create and save a new EventRegistration in DB
public addNewEventReg (req: Request, res: Response) {
    let newEventReg = new EventReg(req.body);

    newEventReg.save((err: any, eventReg: any) => {
        if(err){
            res.send(err);
        }
        res.json(eventReg);
    });
}

// Get all EventRegistrations
public getEventRegs (req: Request, res: Response) {
    EventReg.find({}, (err: any, eventReg) => {
        if(err){
            res.send(err);
        }
        res.json(eventReg);
    });
}

// Get an EventRegistration by ID
public getEventRegId (req: Request, res: Response) {
    EventReg.findById(req.params.eventRegId, (err: any, eventReg: any) => {
        if(err){
            res.send(err);
        }
        res.json(eventReg);
    });

}

// Update an EventRegistration by ID
public updateEventReg (req: Request, res: Response) {
    EventReg.findOneAndUpdate({ _id: req.params.evenRegtId }, req.body, { new: true }, (err, eventReg) => {
        if(err){
            res.send(err);
        }
        res.json(eventReg);
    });

}

// Delete an EventRegistration by ID
public deleteEventReg (req: Request, res: Response) {
    EventReg.remove({ _id: req.params.eventRegId }, (err: any) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Event!'});
    });
}

}
