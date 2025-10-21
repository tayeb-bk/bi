import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as pbi from 'powerbi-client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const embedConfig = {
      type: 'report',
      tokenType: (pbi as any).models.TokenType.Embed,
      accessToken: '<TON_ACCESS_TOKEN>', // Remplacer par votre token
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f327eaed-af11-4ac3-9a26-3a4fb98b744a&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730',
      id: 'f327eaed-af11-4ac3-9a26-3a4fb98b744a',
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: true,
        panes: {
          filters: {
            expanded: false,
            visible: false
          }
        }
      }
    };

    // Embed le rapport Power BI
    (pbi as any).embed(this.reportContainer.nativeElement, embedConfig);
  }

  // Méthode pour ouvrir en plein écran
  openFullScreen(): void {
    window.open(
      'https://app.powerbi.com/reportEmbed?reportId=af5ad581-f6e4-4af8-a09f-3457e1934267&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730',
      '_blank',
      'width=1200,height=800'
    );
  }
}
