import express from "express"
import isAdmin from "../middleware/is-Admin.js"
import isSignedIn from "../middleware/is-sign-in.js"
import schemesRouter from "../controllers/schemes.js"

const router = express.Router()

// Protected routes that require authentication and admin privileges
router.get("/schemesList", isSignedIn, isAdmin, schemesRouter.showSchemesList)
router.get("/dashBoard", isSignedIn, schemesRouter.dashBoard)
router.get("/depot24", isSignedIn, schemesRouter.index)
router.get("/depot25", isSignedIn, schemesRouter.index2)
router.get("/new", isSignedIn, schemesRouter.newScheme)
router.get("/:schemeId", isSignedIn, schemesRouter.getById)
router.post("/create", isSignedIn, schemesRouter.createSchemeFunc)
router.get("/edit/:schemeId", isSignedIn, schemesRouter.editScheme)
router.put("/update/:schemeId", isSignedIn, schemesRouter.updateScheme)
router.delete("/delete/:schemeId", isSignedIn, schemesRouter.deleteScheme)

// Uncomment if you want to include this route
// router.get("/otherScheme/:schemeId", isSignedIn, schemesRouter.allSchemesFunc);

export default router
