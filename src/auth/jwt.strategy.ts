import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Lê o token do header
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'turismo_secret_key',
    });
  }

  async validate(payload: any) {
    // O payload é o conteúdo decodificado do token
    return { userId: payload.sub, email: payload.email };
  }
}
