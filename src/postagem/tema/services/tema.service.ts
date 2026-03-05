import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tema } from "../entities/tema.entity";
import { ILike, Repository } from "typeorm";

@Injectable()
export class TemaService{

    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>,
    ){}
    async findAll(): Promise<Tema[]>{
        //SELECT * FROM tb_temas
        return await this.temaRepository.find(({ relations: { postagens: true } }));
    }
    async findById(id: number): Promise<Tema>{
        //SELECT * FROM tb_temas WHERE id = id
        const tema =
        id && (await this.temaRepository.findOne({
            where: {
                id
            },
            relations: { postagens: true }

        }));
        if (!tema)
            throw new HttpException(`Id de Tema não encontrado`, HttpStatus.NOT_FOUND);
        return tema;
    }

    async findAllByDescricao(descricao: string): Promise<Tema[]>{
        //SELECT * FROM tb_temas WHERE descricao LIKE '%descricao%'
        return await this.temaRepository.find({
            where: { descricao: ILike(`%${descricao}%`)},
            relations: { postagens: true },
        })
    }
    // async findByDescricao(descricao: string): Promise<Tema[]>{
    //     //SELECT * FROM tb_temas WHERE descricao LIKE '%descricao%'
    //     return await this.temaRepository.find({
    //         where: {
    //             descricao: ILike(`%${descricao}%`)
    //         }
    //     })
    // }

    async create(tema: Tema): Promise<Tema>{
        const { id, ...dadosSemId } = tema;
        return await this.temaRepository.save(dadosSemId); // Evita que o ID seja passado para o banco de dados, permitindo que ele seja gerado automaticamente
    }
    async update(tema: Tema): Promise<Tema>{
        if (!tema.id || !this.temaRepository.findOneBy({id: tema.id}))
            // throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND);
        await this.findById(tema.id);
        return await this.temaRepository.save(tema);
    }
    async delete(id: number): Promise<DeleteResult>{
        if (!this.temaRepository.findOneBy({id}))
            throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND);
        await this.temaRepository.delete(id);
    }
}
