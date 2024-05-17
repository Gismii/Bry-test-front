export interface User {
    id: number;
    firstName: string;
    lastName: string;
    cpfHash: string;
    image: string;
  }
  
  export interface UserRequest {
    firstName: string;
    lastName: string;
    cpf: string;
    image: File;
  }
  