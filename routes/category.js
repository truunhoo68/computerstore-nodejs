import express from 'express';
import { list, create, categoryById, read, remove ,update} from '../controllers/category'
const router = express.Router();

router.get('/category', list);

router.post('/category', create);

router.put('/category/:categoryId',update)

router.get('/category/:categoryId', read);

router.delete('/category/:categoryId', remove);

router.param('categoryId', categoryById);
module.exports = router;