import Document from "../models/document.js";


export const createDocument = async (req, res) => {
  try {
    const { mimetype, name, data } = req.files.file;
    const fileData = {
      title: name,
      contentType: mimetype,
      content: data,
      user: req.user.userId,
    };
    console.log(fileData);
    const document = new Document(fileData);
    await document.save();
    res.status(200).json({ success: true ,document});
    // res.set('Content-Type', mimetype);
    // res.set('Content-Disposition', `attachment; filename=${name}`);
    // res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getDocumentByID = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }    
    res.set('Content-Type', `${document.contentType}; charset=UTF-8`);
    res.set('Content-Disposition', `attachment; filename=${document.title}`);
    res.send(document.content);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const searchDocuments = async (req, res) => {
  try {
    const { query } = req.params;
    const { page = 1, limit = 10 } = req.pagination;
    const skip = (page - 1) * limit;
    const regex = {
      title: { $regex: query, $options: "i" },
      user: req.user.userId,
    };
    const documents = await Document.find(regex)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const total = await Document.countDocuments(regex);
    res.status(200).json({ success: true, result: { total, documents } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDocuments = async (req, res) => {
  const { page = 1, limit = 10 } = req.pagination;
  const skip = (page - 1) * limit;
  try {
    const total = await Document.countDocuments({ user: req.user.userId });
    const documents = await Document.find({ user: req.user.userId }).select('-content')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({ success: true, result: { total, documents } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ document });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
