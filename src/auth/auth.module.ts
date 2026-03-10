import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { UsuarioModule } from "../usuario/usuario.module";
import { PassportModule } from "@nestjs/passport"; 
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        forwardRef(() => UsuarioModule),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        })
    ],
    providers: [
        Bcrypt,
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
    // como corrigir as referencias ciclicas? o authService depende do localStrategy, que depende do authService. para resolver isso, vamos usar o forwardRef, que é uma função do NestJS que permite resolver as referencias ciclicas. e para isso, vamos importar o forwardRef do NestJS e usar ele na importação do UsuarioModule, que é onde o authService está sendo usado.
   
    controllers: [AuthController],
    exports: [Bcrypt, AuthService],
})
export class AuthModule {};