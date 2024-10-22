import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        const accessToken = await this.authService.login(body.username, body.password);
        if (!accessToken) {
            return { status: 401, message: 'Credenciales incorrectas' };
        }
        return accessToken;
    }
}