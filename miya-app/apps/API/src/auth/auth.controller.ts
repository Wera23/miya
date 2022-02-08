import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('register')
  async register(@Request() req) {
    return this.authService.register(
      req.body.username,
      req.body.dateOfBirth,
      req.body.userPassword,
      req.body.userDescription,
      req.body.userVoivodeship,
      req.body.userCity,
      req.body.userImage,
      req.body.userGender,
    );
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
