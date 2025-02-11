import { OrdersController } from '@/controllers/orders-controller';
import { Router } from 'express';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post('/', ordersController.create);

export { ordersRouter };