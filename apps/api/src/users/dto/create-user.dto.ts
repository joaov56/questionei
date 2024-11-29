export interface CreateUserDto {
  email: string;
  password: string;
  name: string;
  phone?: string;
  avatar?: string;
}
