// /lib/routes/crmRoutes.ts

import {Request, Response} from "express";

import { ShipController } from "../lib/controllers/shipController";

export class shipRoutes {

    public shipController: ShipController = new ShipController();

    public routes(app: any): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!' 
            })
        })

        // ship Route
        app.route('/ship')

        
        // Create a new Ship
        app.route('/ship')
        .post(this.shipController.addNewShip); 

        // GET all Ships
        app.route('/ship')
        .get(this.shipController.getShips)

        // get a specific Ship
        app.route('/ship/:shipId')
        .get(this.shipController.getShipId)

        // update a specific Ship
        app.route('/ship/:shipId')
        .put(this.shipController.updateShip)

        // delete a specific Ship
        app.route('/ship/:shipId')
        .delete(this.shipController.deleteShip)
       
        // app.route('/ship/:shipId')
        // // edit specific contact
        // .get(this.shipController.getShipId)
        // .put(this.shipController.updateShip)
        // .delete(this.shipController.deleteShip)
      
        
    }

   


}



