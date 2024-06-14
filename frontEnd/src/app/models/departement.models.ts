import { Major } from "./majors.models";

export interface Department {
    id:      number;
    label: string;
    chefDepartment: string;
    majors: Major[];
}
