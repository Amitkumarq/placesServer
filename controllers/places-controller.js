const Place = require("../models/placesModel");

const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find({});
    res.status(200).json({ places });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createPlace = async (req, res) => {
  try {
    console.log(req.body);
    const createPlace = await Place.create(req.body);
    res.status(201).json({ createPlace });
    console.log("task created sucessfully");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getPlace = async (req, res) => {

    try {
        const { id: placeID } = req.params
        const place = await Place.findOne({ _id: placeID })

        if (!place) {
            return res.status(404).json({ msg: `No place with id: ${placeID} ` })
        }
        res.status(200).json({ place })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updatePlace = async (req, res) => {
    try {
        const { id: placeID } = req.params

        const place = await Place.findOneAndUpdate({ _id: placeID }, req.body, {
            runValidators: true,
            new: true,
        })

        if (!place) {
            return res.status(404).json({ msg: `No place with id: ${placeID} ` })
        }
        res.status(200).json({ place })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deletePlace = async (req, res) => {
    try {
        const { id: placeID } = req.params
        const task = await Place.findByIdAndDelete({ _id: placeID })

        if (!place) {
            return res.status(404).json({ msg: `No place with id: ${placeID} ` })
        }
        res.status(200).json({ task: null, status: 'success' })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
module.exports = { getAllPlaces, createPlace ,getPlace,updatePlace,deletePlace};
