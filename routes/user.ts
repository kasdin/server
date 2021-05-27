// /lib/routes/crmRoutes.ts

import {Request, Response} from "express";

import { UserController } from "../lib/controllers/userController";

export class userRoutes {

    public userController: UserController = new UserController();

    public routes(app: any): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!' 
            })
        })

        // user Route
        app.route('/user')

        // Create a new User
        app.route('/user')
        .post(this.userController.addNewUser); 

        // GET all Users
        app.route('/user')
        .get(this.userController.getUsers)

         // get a specific User
         app.route('/user/:userId')
         .get(this.userController.getUserId)

        // update a specific User
        app.route('/user/:userId')
        .put(this.userController.updateUser)

        // delete a specific User
        app.route('/user/:userId')
        .delete(this.userController.deleteUser)
       
        // app.route('/ship/:shipId')
        // // edit specific contact
        // .get(this.shipController.getShipId)
        // .put(this.shipController.updateShip)
        // .delete(this.shipController.deleteShip)
      
        
    }

   


}



