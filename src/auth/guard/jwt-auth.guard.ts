import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// no caso dos endpoints protegidos, ou seja, que precisam de autenticação, usamos o guard. O guard é uma classe que implementa a interface CanActivate. Ele é responsável por verificar se o usuário tem permissão para acessar o recurso solicitado. No caso do JWT, ele verifica se o token é válido e se o usuário tem permissão para acessar o recurso.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}