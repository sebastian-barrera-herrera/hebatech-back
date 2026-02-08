import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateLeadDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

 @IsString()
@Length(7, 15)
phone: string;

    @IsString()
  @IsOptional()
  company?: string;

  @IsString()
  @IsOptional()
  service?: string;
  
  @IsOptional()
  message?: string;
}




