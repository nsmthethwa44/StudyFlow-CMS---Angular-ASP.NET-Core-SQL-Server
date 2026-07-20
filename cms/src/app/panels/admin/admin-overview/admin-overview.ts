import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course-model';
import { CourseService } from '../../../services/course-service/course-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AdminDashboardSummary } from '../../../models/dashboard-model';
import { DashboardService } from '../../../services/dashboard-service/dashboard-service';
import {ApexAxisChartSeries, ApexChart, ApexXAxis,  ApexGrid, ApexDataLabels, ApexPlotOptions} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series:ApexAxisChartSeries;
  chart:ApexChart;
  xaxis:ApexXAxis;
  dataLabels:ApexDataLabels;
  plotOptions:ApexPlotOptions;
  grid: ApexGrid;
  colors: string[];
};

export const APP_COLORS = {
  primary: '#F37D26',
  success: '#22C55E',
  danger: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6'
};

@Component({
  selector: 'app-admin-overview',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './admin-overview.html',
  styleUrl: './admin-overview.scss',
})
export class AdminOverview  implements OnInit{
 courses: Course[] = [];
 baseUrl = environment.apiUrl;
 summary?: AdminDashboardSummary;

 constructor(private courseSvc: CourseService, private cdr: ChangeDetectorRef, private dashboardSvc: DashboardService){}

 ngOnInit(): void {
  this.getCourses();
  this.loadSummary();
   this.loadChart();
 }

 // get courses
 getCourses(){
  this.courseSvc.getCourses().subscribe({
    next: (res) =>{
      this.courses = res;
      this.cdr.detectChanges();
    },
    error: (err) =>{console.log(err)}
  })
 }

 displayImage(path: string){
  return (`${this.baseUrl}/${path}`)
 }


 // get admin stats summary
  loadSummary() {
    this.dashboardSvc.getSummary().subscribe({
      next: (res) => {
        this.summary = res;
        this.cdr.detectChanges();
      },
      error: (err) =>{console.log(err)}
    });
  }

chartOptions: ChartOptions = {
  series: [
    {
      name: 'Courses',
      data: []
    }
  ],

  chart: {
    type: 'bar',
    height: 180,
    toolbar: {
      show: false
    }
  },
  colors: [APP_COLORS.primary],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      columnWidth: '90%'
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: []
  },
  grid: {
    borderColor: '#f1f1f1'
  }

};

  loadChart(){
    this.dashboardSvc.getCategories().subscribe({
        next:(res)=>{
            this.chartOptions.series=[
                {
                    name:'Courses',
                    data:res.map(x=>x.totalCourses)
                }
            ];
            this.chartOptions.xaxis={
                categories:res.map(x=>x.category)
            };
            this.cdr.detectChanges();
        }
    });

}

}
