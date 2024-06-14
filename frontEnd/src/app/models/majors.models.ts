import { Department } from "./departement.models";

export interface Major {
    id:          number;
    label:     string;
    numOfSem:   number;
    chefMajor: string;
    department: Department;
}
