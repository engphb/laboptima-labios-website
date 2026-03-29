import { Router, type IRouter } from "express";
import healthRouter from "./health";
import lattesRouter from "./lattes";

const router: IRouter = Router();

router.use(healthRouter);
router.use(lattesRouter);

export default router;
