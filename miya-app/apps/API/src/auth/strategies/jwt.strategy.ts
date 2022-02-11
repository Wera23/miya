import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.username,
      dateOfBirth: payload.dateOfBirth,
      userGreet: payload.userGreet,
      isActive: payload.isActive,
      userDescription: payload.userDescription,
      userVoivodeship: payload.userVoivodeship,
      userCity: payload.userCity,
      userImage: payload.userImage,
      userGender: payload.userGender,
    };
  }
}
