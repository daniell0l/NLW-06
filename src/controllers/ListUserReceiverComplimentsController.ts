import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserReceiverComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserSendComplimentsSevice = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsSevice.execute(user_id);
        
        return response.json(compliments);
    }
}

export { ListUserReceiverComplimentsController }