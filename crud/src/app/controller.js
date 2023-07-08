// contactsController.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('./authMiddleware');

// Route to display the contacts list view
router.get('/', authMiddleware, async (req, res) => {
  try {
    // Retrieve contacts data from the MongoDB database
    const contacts = await req.db.collection('contacts').find().toArray();

    // Render the contacts list view with the retrieved data
    res.render('contacts', { contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

// Route to display the update contact view
router.get('/update/:id', authMiddleware, async (req, res) => {
    try {
      const contactId = req.params.id;
  
      // Retrieve the contact with the specified ID from the MongoDB database
      const contact = await req.db.collection('contacts').findOne({ _id: mongodb.ObjectId(contactId) });
  
      // Render the update contact view with the retrieved contact data
      res.render('update', { contact });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to handle the update contact form submission
  router.post('/update/:id', authMiddleware, async (req, res) => {
    try {
      const contactId = req.params.id;
      const updatedContactData = req.body;
  
      // Update the contact with the specified ID in the MongoDB database
      await req.db.collection('contacts').updateOne(
        { _id: mongodb.ObjectId(contactId) },
        { $set: updatedContactData }
      );
  
      // Redirect to the contacts list view after successful update
      res.redirect('/contacts');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  