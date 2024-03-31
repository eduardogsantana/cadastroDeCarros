import { PartialType } from "@nestjs/mapped-types";
import { CreateCadastroDTO } from "./create-cadastro-dto";

export class UpdatePatchCadastroDTO extends PartialType (CreateCadastroDTO){
    
}