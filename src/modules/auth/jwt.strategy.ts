import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-jwt'; // Importar Strategy de passport-jwt

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'tu_secreto', 
        });
    }

    async validate(payload: any) {
        
        return { userId: payload.sub, username: payload.username };
    }
}
