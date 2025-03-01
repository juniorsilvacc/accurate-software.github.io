import { DeleteCategoryService } from '@modules/categories/services/DeleteCategoryService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCategoryService = container.resolve(DeleteCategoryService);

    await deleteCategoryService.execute({ id });

    return response.status(204).send();
  }
}

export { DeleteCategoryController };
