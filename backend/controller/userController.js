const User = require("../model/userModel");

async function createNewEvent(req, res) { 
      const body =  await req.body; 
console.log("Request body: ", body); 

   if(
    !body ||
    !body.title ||
    !body.description ||
    !body.date ||
    !body.time ||
    !body.venue ||
    !body.category ||
    !body.cover_image 
   ){
      return res.status(404).json({msg: "All fields are required."});

   }
   User.create({
   title: body.title,
   description: body.description,
    date: body.date,
    time: body.time,
    venue:body.venue,
    category: body.category,
    cover_image: body.cover_image, 
   });
    return res.status(201).json({ msg: "Event  Created Successfully." }); 
} 

async function getAllEvents(req, res) { 
        const allEvent = await User.find(); 
       return res.status(200).json(allEvent);
       } 

async function getEventById(req, res) { 
        const event = await User.findById(req.params.id); 
          return res.status(200).json(event);
       } 
async function updateEventById(req, res) { 
        const event = await User.findByIdAndUpdate(req.params.id, req.body); 
          return res.status(200).json({msg : "Event updated Successfully.", event : event});
       } 
async function deleteEventById(req, res){    
       const event = await User.findByIdAndDelete(req.params.id);   
        return res.status(200).json({msg : "Event deleted successfully."})
       }
       
module.exports={
      createNewEvent,
      getAllEvents,
      getEventById,
      updateEventById,
      deleteEventById
};