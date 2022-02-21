const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()
const goalController = require("../controllers/goalController")

router.get("/", goalController.getGoal)
router.post("/createGoal", goalController.createGoal)
router.put("/updateGoal/:id", goalController.updateGoal)
router.delete("/deleteGoal/:id", goalController.deleteGoal)

module.exports = router;

