import { ResetPasswordService } from '@modules/users/services/ResetPasswordService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

class ResetPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;

    const resetPassword = container.resolve(ResetPasswordService);

    await resetPassword.execute({ token, password });

    return response.status(204).json();
  }
}

export { ResetPasswordController };
