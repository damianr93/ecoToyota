import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateWaterDto {

    @ApiProperty({
        example: 'Amigacho',
        description: 'name of the person taking the measurement',
    })
    @IsString({ message: 'El nombre debe ser un string' })
    @IsNotEmpty({ message: 'El nombre es requerido' })
    medidoPor:string

    @ApiProperty({
        example: '1.3562',
        description: 'total in cubic metter',
    })
    @IsNotEmpty()
    @IsNumber()
    consumo:number

    @ApiProperty({
        example: '02/01/2024',
        description: 'Date of create',
        maxLength: 50,
        minLength: 4,
    })
    createdAt:string
}
