//======================================Connection=============================================//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rahma", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("Mongoose connection failed!");
  console.log("____________________________________________________");
});

db.once("open", function() {
  console.log("Mongoose connection initiated successfully!");
  console.log("____________________________________________________");
});

//========================================Schema===============================================//
let placesSchema = new mongoose.Schema({
  name: String,
  description: String,
  photosUrl: String
});

let Places = mongoose.model("places", placesSchema);

//========================================Schema===============================================//
let formsSchema = new mongoose.Schema({
  placeName: String,
  placeDescription: String,
  placePhoto:String
});

let Forms = mongoose.model("forms", formsSchema);

//========================================Schema===============================================//

let contactSchema = new mongoose.Schema({
name: String,
email: String,
phone:Number,
message:String
});

let ContactUs = mongoose.model("contactUs", contactSchema);

//الي جمب الmodel منجيبها من databases نفس الاسم 
// ولي جمب الlet لازم تكون cabetal

//=========================================GET=================================================//
let getPlaces = callBack => {
  console.log("GET PLACES FROM DATABASE");
  Places.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};

let getForm = callBack => {
  console.log("GET FORM DATA FROM DATABASE");
  Forms.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};

//=====================================GET BY ID===============================================//

let placeById = (callBack, _id) => {
  Places.findById(_id, function(err, docs) {
    if (err) {
      console.log("err :", err);
    }
    console.log("docs by id :", docs);
    callBack(docs);
  });
};
//=========================================ADD=================================================//
let addPlace = (callBack, obj) => {
  console.log("INSERT DATA TO DATABASE");
  Places.insertMany(
    [
      {
        name: obj.name,
        description: obj.description,
        photosUrl: obj.photosUrl
      }
    ],
    function(err, newPlace) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("NEW PLACE:", newPlace);
      getPlaces(callBack);
    }
  );
};


let contactUS = (cb, obj) => {
  ContactUs.create(
    obj,(err, result)=> {
    if (err) {
      console.log("err :", err);
    }
    // console.log("docs by id :", result);
    cb(result);
  });
};



let addForm = (callBack, obj) => {
  console.log("INSERT DATA TO DATABASE");
  Forms.insertMany(
    [
      {
        placeName: obj.placeName,
        placeDescription: obj.placeDescription,
        placePhoto:obj.placePhoto
      }
    ],
    function(err, newData) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("NEW Data:", newData);
      getForm(callBack);
    }
  );
};





const getMessages = (cb, obj) => {
  ContactUs.find(
      {},
      (err, docs) => {
          if (err) {
              console.log(err)
          }
          else {
              cb(docs)
          }
      }
  )
}



const readMessage = (cb, obj) => {
  let _id = obj._id
  ContactUs.update(
      { _id },
      { $set: { status: "readed" } },
      (err, doc) => {
          if (err) {
              console.log(err)
          }
          cb(doc)
      }
  )
}



const deleteMessage = (cb, obj) => {
  let _id = obj._id

  ContactUs.deleteOne(
      { _id },
      (err, doc) => {
          if (err) {
              console.log(err)
          }
          else {
              cb(doc)
          }
      }
  )

}




//=====================================MODULE EXPORTS=============================================//
module.exports = {
  getPlaces,
  addPlace,
  placeById,
  getForm,
  addForm,
  contactUS,
  getMessages,
  readMessage,
  deleteMessage,
};
