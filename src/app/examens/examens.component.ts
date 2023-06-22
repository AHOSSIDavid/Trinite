import { Component } from '@angular/core';

@Component({
  selector: 'app-examens',
  templateUrl: './examens.component.html',
  styleUrls: ['./examens.component.css']
})
export class ExamensComponent {

  constructor(){
  }
    ceps=[
      {
        Anne:"2018-2019",
        cep:"CEP",
        candidats:30,
        admis:30,
        taux:100,
      },
      {
        Anne:"2019-2020",
        cep:"CEP",
        candidats:30,
        admis:30,
        taux:100,
      },
      {
        Anne:"2020-2021",
        cep:"CEP",
        candidats:30,
        admis:30,
        taux:100,
      },
      {
        Anne:"22021-2022",
        cep:"CEP",
        candidats:30,
        admis:30,
        taux:100,
      },

      {
        Anne:"22022-2023",
        cep:"CEP",
        candidats:30,
        admis:30,
        taux:100,
      },
  
    ];
}
