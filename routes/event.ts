// /lib/routes/crmRoutes.ts

import {Request, Response} from "express";

import { EventController } from "../lib/controllers/eventController";

export class eventRoutes {

    public eventController: EventController = new EventController();

    public routes(app: any): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!' 
            })
        })

        // Event Route
        app.route('/event')

        // Create a new Event
        app.route('/event')
        .post(this.eventController.addNewEvent); 

        // GET all Events
        app.route('/event')
        .get(this.eventController.getEvents)

         // get a specific Event
         app.route('/event/:eventId')
         .get(this.eventController.getEventId)

        // update a specific Event
        app.route('/event/:eventId')
        .put(this.eventController.updateEvent)

        // delete a specific Event
        app.route('/event/:eventId')
        .delete(this.eventController.deleteEvent)
       
        // app.route('/ship/:shipId')
        // // edit specific contact
        // .get(this.shipController.getShipId)
        // .put(this.shipController.updateShip)
        // .delete(this.shipController.deleteShip)
      
        
    }

   


}



