import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoronaApiDataService } from '../services/corona-api-data.service';
import { Papa } from 'ngx-papaparse';
import { config } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Model } from '../models/model';
import { Model2 } from '../models/model2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public casesList:Model[]=[];
  public uniqList:Model[]=[];
  public dailyCovidCasesReport:Model2[]=[];
  public  totalCount:number=0;
  public search:string='';

  myDate:any = new Date();
  constructor(private service:CoronaApiDataService, private papa:Papa,) {
   }
  ngOnInit(): void {
    // this.getGlobalData()
    this.showGlobalDailyData()
    
  }
  

  // getGlobalData(){
  //   this.service.getGlobalData().subscribe(
  //     data=>{
  //       let list:any=this.papa.parse(data)
        
  //      let c:number=0
        
  //       for(let i of list.data){
  //         let confirmedCase:number=0;
  //         let activeCase:number=0;
  //         let recovered:number=0;
  //         let death:number=0;
  //         for(let j of list.data){
  //           if(i[3]===j[3]){
  //             let _confirmed= Number(j[7])
  //             let _death= Number(j[8])
  //             let _recovered= Number(j[9])
  //             let _active= Number(j[10])
  //             confirmedCase+=_confirmed;
  //             activeCase+=_active;
  //             recovered+=_recovered;
  //             death+=_death;
  //           }
  //         }
  //         // console.log(i);
  //         // item.push(i)

          
  //         if(i[3]==='US'&& c<1){
  //           c+=1;
  //           this.casesList.push(new Model(i[3],confirmedCase,activeCase,recovered,death))
  //           this.uniqList.push(new Model(i[3],confirmedCase,activeCase,recovered,death))
  //         }
  //         else if(i[3]!=='US' && i[3]!=='Country_Region'){
  //           this.casesList.push(new Model(i[3],confirmedCase,activeCase,recovered,death))
  //         }
  //       }
  //       this.casesList.sort((a, b) => a.country < b.country ? -1 : a.country > b.country ? 1 : 0)
        
  //       // Removing dublicates from 
  //       const ids = this.casesList.map(o => o.country)
  //       const filtered = this.casesList.filter(({country}, index) => !ids.includes(country, index + 1))
  //       this.uniqList=filtered
  //       this.uniqList.pop()

  //       //------------->
  //       console.log(this.uniqList);
        
        
        
  //   },
  //   err=>{
  //     console.log(err);
      
  //   }
  //   );
  // }




  showGlobalDailyData(){
    this.service.getDailyDataOfCoronaVirus().subscribe(data=>{
      let list:any=this.papa.parse(data)
      for(let i=1;i<list.data.length;i++){
        let list2:any[]=list.data[i]
        this.dailyCovidCasesReport.push(new Model2(list2[0],list2[1],list2[list2.length-1],list2[list2.length-2],Math.abs(list2[list2.length-1]-list2[list2.length-2]))) 
      }
      this.dailyCovidCasesReport.pop()
      this.dailyCovidCasesReport.forEach(n=>{
        this.totalCount+= Number(n.reportedCases)
        
      })
    },
    err=>{
      console.log(err);
      
    }
    );
    
    
  }

}
