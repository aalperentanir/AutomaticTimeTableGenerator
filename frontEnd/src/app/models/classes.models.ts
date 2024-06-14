import { Major } from "./majors.models";
import { Module } from "./modules.models";
import { Semestre } from "./semestre.models";

export interface Classes {
    id:        number;
    label:   string;
    nbrStudents: number;
    major:   Major ;
    semester:Semestre;
}