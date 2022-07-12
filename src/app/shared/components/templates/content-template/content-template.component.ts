import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NavService } from 'src/app/shared/services/nav.service';
import { CustomizerService } from '../../../services/customizer.service';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.scss'],
})
export class ContentTemplateComponent implements OnInit {
  public screenWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event?: undefined) {
    this.screenWidth = window.innerWidth;
    this.navService.collapseSidebar = this.screenWidth < 768;
  }

  constructor(
    public navService: NavService,
    public customizer: CustomizerService,
    private router: Router
  ) {}

  @HostListener('document:click', ['$event'])
  clickedOutside(event) {
    // click outside Area perform following action
    document.getElementById('outer-container').onclick = function (e) {
      e.stopPropagation();
      if (e.target != document.getElementById('search-outer')) {
        document.getElementsByTagName('body')[0].classList.remove('offcanvas');
      }
      if (e.target != document.getElementById('outer-container')) {
        document
          .getElementById('canvas-bookmark')
          ?.classList.remove('offcanvas-bookmark');
      }
      if (e.target != document.getElementById('inner-customizer')) {
        document
          .getElementsByClassName('customizer-links')[0]
          ?.classList.remove('open');
        document
          .getElementsByClassName('customizer-contain')[0]
          ?.classList.remove('open');
      }
    };
  }

  ngOnInit() {
    this.onResize();
    this.subscribeToRouter();
  }

  subscribeToRouter() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((e) => {
        this.navService.collapseSidebar = this.screenWidth < 768;
      });
  }
}
