import { IsString, IsDateString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  readonly Account: string;

  @IsString()
  readonly Comment: string;

  @IsDateString()
  readonly Date: string;
}
