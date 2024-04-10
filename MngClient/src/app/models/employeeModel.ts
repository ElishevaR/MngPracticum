import { RoleForEmployeeModel } from "./roleForEmployeeModel"
export class EmployeeModel {
    id!: number
    fName!: string
    lName!: string
    identityNumber!: string
    startDate!: Date
    birthDate!: Date
    gender!: number
    isActivate!: boolean
    rolesForEmployee: RoleForEmployeeModel[] = [];
}