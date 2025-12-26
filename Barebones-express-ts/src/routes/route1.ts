import { Router } from "express";
import { route1Getfunction2 } from "../handlers/route1";
// import { route1Getfunction } from "../handlers/route1";

const router = Router();

// /api/route1
router.get("/", route1Getfunction2);
// router.post("/", route1Postfunction);

export default router;
