import { CreateUserService } from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, telephone, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const createUser = await createUserService.execute({
      name,
      email,
      telephone,
      password,
    });

    return response.status(201).json(instanceToInstance(createUser));
  }
}

export { CreateUserController };
