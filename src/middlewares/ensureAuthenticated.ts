import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
    sub: string
}


export function ensureAuthenticated(
    request: Request, 
    response: Response,
    next: NextFunction) {


    const authtoken = request.headers.authorization;
   
    if (!authtoken) {
        return response.status(401).end();
    }

    
    const [,token] = authtoken.split(" ");

    try {
        const { sub } = verify( token,"58981d7434b365a0e6cbe3f9e6a8a975") as Ipayload;
       
        request.user_id = sub;
        
        return next();
      } catch (err) {
        return response.status(401).end();
        } 
        

    
}


