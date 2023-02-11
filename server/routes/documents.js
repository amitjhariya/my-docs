import { Router } from "express";
import pagination from "./../middleware/pagination.js";
import { authenticate } from "./../middleware/auth.js";
import {validateRequest} from './../middleware/validate-request.js'
import {validateDocument} from './../validations/documents.js'
const router = Router();
import {
  getDocumentByID,
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
  searchDocuments
} from "./../controllers/document.js";


// Validate request parameters
// router.use(validateDocument, validateRequest);

// Authenticate and Authorize request
router.use(authenticate);

// Create a document
router.post("/", createDocument);

// Get all documents
router.get("/", pagination, getDocuments);

// Get document by ID
router.get("/:id", getDocumentByID);

// Update a document
router.patch("/:id",validateDocument, validateRequest, updateDocument);

// Delete a document
router.delete("/:id", deleteDocument);

// Search documents
router.get("/search/:query", pagination, searchDocuments);



export default router;
