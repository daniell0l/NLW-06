import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagCotroller";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receiver",ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };
