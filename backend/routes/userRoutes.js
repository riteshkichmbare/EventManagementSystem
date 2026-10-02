const express=require("express");
const router=express.Router();

const{createNewEvent,getAllEvents,getEventById,updateEventById,deleteEventById}=require("../controller/userController");

router.route("/events").post(createNewEvent).get(getAllEvents);

router.route("/events/:id")
.get(getEventById)
.patch(updateEventById)
.delete(deleteEventById);

module.exports=router;