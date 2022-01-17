import { Controller, Post, Req, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/users/schema/user.schema';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Request() req) {
    return this.authService.register(
      req.body.username,
      req.body.dateOfBirth,
      req.body.userPassword,
      req.body.userDescription,
    );
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
