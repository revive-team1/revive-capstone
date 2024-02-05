const express = require('express');
const router = express.Router();
const { authRequired } = require('./utils');

const {  getAllSelfCare, getSelfCareById, createSelfCare, updateSelfCare, deleteSelfCareById, } = require('../db/sqlHelperFunctions/selfCare');

// GET - /api/selfCare - get all selfCare
router.get('/', async (req, res, next) => {
    try {
        const selfCare = await getAllSelfCare();
        res.send(selfCare);
    } catch (error) {
        next(error);
    }
});

// GET - /api/selfCare/:selfCare_id - get a single selfCare by id
router.get('/:selfCare_id', async (req, res, next) => {
    try {
        const selfCare = await getSelfCareById(req.params.selfCare_id);
        res.send(selfCare);
    } catch (error) {
        next(error);
    }
});

// POST - /api/selfCare - create a new selfCare
router.post('/', authRequired, async (req, res, next) => {
    try {
        const {name, description, article_url} = req.body
        const selfCare = await createSelfCare({name, description, article_url});
        res.send(selfCare);
    } catch (err) {
        next(err);
    }
});

// PUT - /api/selfCare/:selfCare_id - update a single ingredient by id
router.put('/:selfCare_id', authRequired, async (req, res, next) => {
    try {
        const selfCare = await updateSelfCare(req.params.selfCare_id, req.body);
        res.send(selfCare);
    } catch (err) {
        next(err);
    }
});

// DELETE - /api/selfCare/:selfCare_id - delete a single ingredient by id
router.delete('/:selfCare_id', authRequired, async (req, res, next) => {
    try {
        const selfCare = await deleteSelfCareById(req.params.selfCare_id);
        res.send(selfCare);
    } catch (error) {
        next(error);
    }
});
module.exports = router;