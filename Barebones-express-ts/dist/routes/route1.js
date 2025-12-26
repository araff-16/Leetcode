"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route1_1 = require("../handlers/route1");
var router = (0, express_1.Router)();
// /api/route1
router.get("/", route1_1.route1function);
exports.default = router;
