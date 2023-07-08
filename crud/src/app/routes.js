module.exports = (app) =>{
    const busContacts = require('./controller');

    //Create a record
    app.post('/busContacts', busContacts.create);

    //Retrieve all records
    app.get('/busContacts', busContacts.findAll);

    //Retrieve a single record by id
    app.get('/busContacts/:id',busContacts.findOne);
    
    //Update a record with id
    app.put('/busContacts/:id', busContacts.update);

    //Delete a record by id
    app.delete('/busContacts/:id', busContacts.delete);

}