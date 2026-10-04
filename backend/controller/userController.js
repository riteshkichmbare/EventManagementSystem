const User = require("../model/userModel");

async function createNewEvent(req, res) { 
  try {
    const body = req.body;
    if(!body || !body.title || !body.description || !body.date || !body.time || !body.venue || !body.category || !body.cover_image){
      return res.status(400).json({msg: "All fields are required."});
    }
    const event = await User.create({
      title: body.title, description: body.description, date: body.date, time: body.time,
      venue:body.venue, category: body.category, cover_image: body.cover_image,
    });
    return res.status(201).json({ msg: "Event Created Successfully.", event });
  } catch (error) {
    return res.status(500).json({ msg: "Could not create event." });
  }
} 

async function getAllEvents(req, res) { 
  try { const allEvent = await User.find().sort({ date: 1 }); return res.status(200).json(allEvent); }
  catch (error) { return res.status(500).json({ msg: "Could not load events." }); }
} 

async function getEventById(req, res) { 
  try { const event = await User.findById(req.params.id); if(!event) return res.status(404).json({msg:"Event not found."}); return res.status(200).json(event); }
  catch (error) { return res.status(500).json({ msg: "Could not load event." }); }
} 
async function updateEventById(req, res) { 
  try { const event = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if(!event) return res.status(404).json({msg:"Event not found."}); return res.status(200).json({msg : "Event updated Successfully.", event }); }
  catch (error) { return res.status(500).json({ msg: "Could not update event." }); }
} 
async function deleteEventById(req, res){    
  try { const event = await User.findByIdAndDelete(req.params.id); if(!event) return res.status(404).json({msg:"Event not found."}); return res.status(200).json({msg : "Event deleted successfully."}); }
  catch (error) { return res.status(500).json({ msg: "Could not delete event." }); }
}
       
module.exports={ createNewEvent, getAllEvents, getEventById, updateEventById, deleteEventById };
