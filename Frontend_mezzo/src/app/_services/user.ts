import { KeyValue } from "@angular/common";
import { ResolveStart, RouterLink } from "@angular/router";

export class User {
  id: number=0;
  firstName !:string;
  lastName !:string;
  email!:string;
  number!: number;
  date!: Date;
  password!:string;
  roles!: any;
}
