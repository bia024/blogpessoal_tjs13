import { Transform } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";
// import { SassString } from "sass";
import { Postagem } from "../../entities/postagem.entity"; // revisar caminho de importação


@Entity({name: "tb_temas"}) // CREATE TABLE tb_temas
export class Tema{

  @IsOptional() // Permitir que o campo seja opcional
  @IsInt()
  @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
  id: number;

    // @new Transform(({ value }: TransformFnParams) => value?.trim()) // Remover espaços em branco I/F    
    // @IsNotEmpty({message: "O Tema é Obrigatório"}) // Forçar digitação
    // @Length(5, 100, {message: "O Tema deve ter entre 5 e 100 caracteres"})
    // @Column({length: 100, nullable: false}) // VARCHAR(100) NOT NULL
    // descricao: string;
    @IsNotEmpty()
    @Column({ nullable: false, length: 255 })
    @Length(10, 255, {message: "O Texto deve ter entre 10 e 255 caracteres"})
    @Transform((param) => param.value.trim())
    descricao: string;

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagens: Postagem[];
  }

// @Entity({name: "tb_postagens"}) // CREATE TABLE tb_postagens
// export class Postagem{

//   @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
//   id: number;