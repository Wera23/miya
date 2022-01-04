import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Post('/local/signup')
  signupLocal() {
    console.log('działą');
  }
}
