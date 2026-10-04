const express=require("express");
const router=express.Router();
const{checkRole}=require("../middleware/authMiddleware");
const{createNewEvent,getAllEvents,getEventById,updateEventById,deleteEventById}=require("../controller/userController");

router.route("/events").get(getAllEvents).post(checkRole("admin"),createNewEvent);
router.route("/events/:id").get(getEventById).patch(checkRole("admin"),updateEventById).delete(checkRole("admin"),deleteEventById);

module.exports=router;
