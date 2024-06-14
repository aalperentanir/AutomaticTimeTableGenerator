import {Component, OnInit} from '@angular/core';
import {Department} from "../../../models/departement.models";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DepartmentService} from "../../../services/department.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Major} from "../../../models/majors.models";
import {MajorService} from "../../../services/major.service";

@Component({
  selector: 'app-managment-major',
  templateUrl: './managment-major.component.html',
  styleUrls: ['./managment-major.component.css']
})
export class ManagmentMajorComponenet implements OnInit{
  majors: Major [] = [];
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  page: number = 0;
  size: number = 6;
  totalPages: number = 0;
  currentPage: number = 0;
  totalelements:number=0;
  displayedPages: number[] = [];
  constructor(
    private majorService: MajorService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control('')
    });
    this.handleSearchMajors();
  }
  handleEditMajor(majorEdit: Major) {
    this.router.navigateByUrl('/majors/edit',{state :majorEdit});
  }
  handleChangeSize($event: Event) {
    this.size = parseInt((<HTMLInputElement>$event.target).value);
    this.handleSearchMajors();
  }
  handleSearchMajors(): void {
    this.majorService
      .searchMajors(this.searchFormGroup.value.keyword, this.page, this.size)
      .subscribe(
        (data) => {
          this.majors = data.content;
          this.totalPages = data.totalPages;
          this.currentPage = data.number;
          this.setDisplayedPages();
        },
        (error) => {
          this.errorMessage = error;
          console.log(error);
        }
      );
  }

  handleDeleteMajor(major: Major): void {
    Swal.fire({
      title: 'Are you sure',
      text: "You won't be able to go back !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.majorService.deleteMajor(major.id).subscribe();
        this.majors = this.majors.filter((f) => f.id !== major.id);

      }
    });
  }

  setDisplayedPages(): void {
    this.displayedPages = [];
    const startPage = Math.floor(this.currentPage / 3) * 3;
    for (
      let i = startPage;
      i < startPage + 3 && i < this.totalPages;
      i++
    ) {
      this.displayedPages.push(i);
    }
  }

  gotoPage(page: number): void {
    this.currentPage = page;
    this.page = page;
    this.handleSearchMajors();
  }

  goToPreviousSet(): void {
    const startPage = Math.floor(this.currentPage / 3) * 3;
    if (startPage - 3 >= 0) {
      this.currentPage = startPage - 3;
      this.page = this.currentPage;
      this.handleSearchMajors();
    }
  }

  goToNextSet(): void {
    const startPage = Math.floor(this.currentPage / 3) * 3;
    if (startPage + 3 < this.totalPages) {
      this.currentPage = startPage + 3;
      this.page = this.currentPage;
      this.handleSearchMajors();
    }
  }

}
