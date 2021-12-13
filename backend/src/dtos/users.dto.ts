import { IsEmail, IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;
}

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}

export class MonoAuthCode {
  @IsString()
  public authCode: string;
}

export class BillDto {
  @IsString()
  public Name: string;

  @IsString()
  public Amount: string;

  @IsString()
  public StartDate: string;

  @IsBoolean()
  public Trial: boolean;

  @IsString()
  public AccountNumber: string;

  @IsString()
  public TrialLength: string;

  @IsBoolean()
  public TrialContinue: boolean;
}
