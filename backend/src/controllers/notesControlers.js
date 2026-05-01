

module.exports = {
    getNotes: (req, res) => {
        res.status(200).send("Get all notes");
    },
    createNote: async (req, res) => {
        res.status(200).json({message: "Create a new note"});
    }
};

module.exports.updateNote =  async (req, res) => {
   res.status(200).json({message: "Update a note"});
};

module.exports.deleteNote = async (req, res) => {
   res.status(200).json({message: "Delete a note"});
};

