import { SendForgotPasswordEmailService } from '@modules/users/services/SendForgotPasswordEmailService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

class ForgotPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPassword = container.resolve(
      SendForgotPasswordEmailService,
    );

    await sendForgotPassword.execute({ email });

    return response.status(204).json();
  }
}

export { ForgotPasswordController };
