import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";
import { CreateUserService } from "../services/CreateUserService";

class CreateTagController {
    async handle(request: Request, response: Response) {
        const{name} = request.body; 
        const createTagService = new CreateTagService(); 
        const tag = await createTagService.execute(name)
        return response.status(201).json(tag);
    }
}

export{CreateTagController}