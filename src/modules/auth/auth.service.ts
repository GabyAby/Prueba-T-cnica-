import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private readonly users = [{ id: 1, username: 'usuario1', password: 'contraseña1' }];

    constructor(private readonly jwtService: JwtService) {}

    async validateUser(username: string): Promise<any> {
        const user = this.users.find(u => u.username === username);
        if (!user) return null;
        return user;
    }

    async login(username: string, password: string) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (!user) return null;

        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
