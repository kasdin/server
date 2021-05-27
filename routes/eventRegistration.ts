// /lib/routes/crmRoutes.ts

import {Request, Response} from "express";

import { EventRegController } from "../lib/controllers/eventRegistrationController";

export class eventRegRoutes {

    public EventRegController: EventRegController = new EventRegController();

    public routes(app: any): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!' 
            })
        })

        // EventReg Route
        app.route('/eventReg')

        // Create a new EventReg
        app.route('/eventReg')
        .post(this.EventRegController.addNewEventReg); 

        // GET all EventRegs
        app.route('/eventReg')
        .get(this.EventRegController.getEventRegs)

         // get a specific EventReg
         app.route('/eventReg/:eventRegId')
         .get(this.EventRegController.getEventRegId)

        // update a specific EventReg
        app.route('/eventReg/:eventRegId')
        .put(this.EventRegController.updateEventReg)

        // delete a specific EventReg
        app.route('/eventReg/:eventRegId')
        .delete(this.EventRegController.deleteEventReg)
       
        // app.route('/ship/:shipId')
        // // edit specific contact
        // .get(this.shipController.getShipId)
        // .put(this.shipController.updateShip)
        // .delete(this.shipController.deleteShip)
      
        
    }

   


}



