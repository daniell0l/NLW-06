import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiverComplimentsSevice {
   
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id,
            },
            relations: ["userSend", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListUserReceiverComplimentsSevice }


