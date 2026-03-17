import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { UsuarioLogin } from './../entities/usuariologin.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller("/usuarios")
export class AuthController {
    constructor(private authService: AuthService) { }

    // endponit de login, que o usuario usara para entrar no sistema. vai usar o mesmo caminho do usuario /logar e /cadastrar, para ficar mais intuitivo. e vai receber um objeto do tipo UsuarioLogin, que tem o usuario e a senha. e vai devolver um objeto com as informações do usuario e o token de acesso.

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
     async login(@Body() usuario: UsuarioLogin): Promise<any> {
        return this.authService.login(usuario);
    }

}