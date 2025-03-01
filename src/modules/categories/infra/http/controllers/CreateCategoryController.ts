import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryService } from '@modules/categories/services/CreateCategoryService';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    const category = await createCategoryService.execute({
      name,
      description,
    });

    return response.status(201).json(category);
  }
}

export { CreateCategoryController };
