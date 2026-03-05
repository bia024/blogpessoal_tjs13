import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { TemaService } from "../tema/services/tema.service";

@Injectable()
export class PostagemService{
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>,
        private readonly temaService: TemaService
    ){}

    async findAll(): Promise<Postagem[]>{
        //SELECT * FROM tb_postagens
        return await this.postagemRepository.find({
            relations: {
                tema: true
            }
        });
    }

    // async findAll(id: number): Promise<Postagem[]>{
    //     //SELECT * FROM tb_postagens WHERE id = id
    //     return await this.postagemRepository.find({
    //         where: {
    //             id
    //         },
    //         relations: {
    //             tema: true
    //         }
    //     })
    // }

    async findById(id: number): Promise<Postagem>{
        //SELECT * FROM tb_postagens WHERE id = id
        const postagem = await this.postagemRepository.findOne({
            where: {
                id
            },
            relations: {
                tema: true
            }
        })
        if (!postagem)
          throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        
        return postagem;
    }

    // findAllById
    async findByTitulo(titulo: string): Promise<Postagem[]>{
        //SELECT * FROM tb_postagens WHERE titulo LIKE '%titulo%'
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true
            }
        })
    }
    
    async create(postagem: Postagem): Promise<Postagem>{
        await this.temaService.findById(postagem.tema.id); // faz a verificação do tema
        //INSERT INTO tb_postagens (titulo, texto, data) VALUES (postagem.titulo, postagem.texto, postagem.data)
        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem>{

        if (!postagem.id || postagem.id <= 0)
          throw new HttpException('O ID da postagem é inválido', HttpStatus.BAD_REQUEST);
        
        
        await this.findById(postagem.id); // checa de a postagem existe, se não existir lança uma exceção
        await this.temaService.findById(postagem.tema.id); // checa se o tema da postagem existe, se não existir lança uma exceção
        return this.postagemRepository.save(postagem);
            //UPDATE tb_postagens SET titulo = ?,
        // texto = ? ,
        //data = CURRENT_TIMESTAMP()
        //WHERE id = ?;
        //UPDATE tb_postagens SET titulo = postagem.titulo, texto = postagem.texto, data = postagem.data WHERE id = postagem.id
    //     let buscaPostagem = await this.findById(postagem.id || 0);

    //     if (!buscaPostagem || !postagem.id)
    //       throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        
    //     return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscaPostagem = await this.findById(id);

         //DELETE FROM tb_postagens FROM id = ?;
         return this.postagemRepository.delete(id);
        // await this.postagemRepository.remove(buscaPostagem);
        // return await this.postagemRepository.delete(id);
    }
}
