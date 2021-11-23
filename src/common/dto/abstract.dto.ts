import { ApiProperty } from '@nestjs/swagger';

export class AbstractDto {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    createdBy: string

    @ApiProperty()
    updatedBy: string

    @ApiProperty()
    isActive: number

    @ApiProperty()
    isDeleted: number
}