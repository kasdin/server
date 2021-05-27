//   /lib/controllers/crmController.ts

import * as mongoose from 'mongoose';
import { EventSchema } from '../models/event';
import { Request, Response } from 'express';

const Event = mongoose.model('Event', EventSchema);

export class EventController{

// Create and save a new Event     
public addNewEvent (req: Request, res: Response) {
    let newEvent = new Event(req.body);

    newEvent.save((err: any, event: any) => {
        if(err){
            res.send(err);
        }
        res.json(event);
    });
}

// Get all Events
public getEvents (req: Request, res: Response) {
    Event.find({}, (err: any, event) => {
        if(err){
            res.send(err);
        }
        res.json(event);
    });
}

// Get an Event by ID
public getEventId (req: Request, res: Response) {
    Event.findById(req.params.eventId, (err: any, event: any) => {
        if(err){
            res.send(err);
        }
        res.json(event);
    });

}

// Update an Event by ID
public updateEvent (req: Request, res: Response) {
    Event.findOneAndUpdate({ _id: req.params.eventId }, req.body, { new: true }, (err, event) => {
        if(err){
            res.send(err);
        }
        res.json(event);
    });

}

// Delete an Event by ID
public deleteEvent (req: Request, res: Response) {
    Event.remove({ _id: req.params.eventId }, (err: any) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Event!'});
    });
}

}
