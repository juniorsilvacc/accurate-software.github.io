import { categoriesRoutes } from '@modules/categories/infra/http/routes/categories.routes';
import { objectsRoutes } from '@modules/objects/infra/http/routes/objects.routes';
import { adminRoutes } from '@modules/users/infra/http/routes/admin.routes';
import { passwordRoutes } from '@modules/users/infra/http/routes/password.routes';
import { profileRoutes } from '@modules/users/infra/http/routes/profile.routes';
import { sessionsRoutes } from '@modules/users/infra/http/routes/sessions.routes';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/admin', adminRoutes);
routes.use('/profile', profileRoutes);
routes.use('/password', passwordRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/objects', objectsRoutes);
routes.use(sessionsRoutes);

export { routes };
