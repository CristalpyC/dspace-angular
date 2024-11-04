import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component, Injector } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ThemedSearchNavbarComponent } from 'src/app/search-navbar/themed-search-navbar.component';
import { ThemedLangSwitchComponent } from 'src/app/shared/lang-switch/themed-lang-switch.component';

import { ContextHelpToggleComponent } from '../../../../app/header/context-help-toggle/context-help-toggle.component';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';
import { ThemedAuthNavMenuComponent } from '../../../../app/shared/auth-nav-menu/themed-auth-nav-menu.component';
import { ThemedUserMenuComponent } from '../../../../app/shared/auth-nav-menu/user-menu/themed-user-menu.component';
import { ImpersonateNavbarComponent } from '../../../../app/shared/impersonate-navbar/impersonate-navbar.component';
import { AboutComponent } from '../about-page/about.component';
import { ContactComponent } from '../contact-page/contact.component';
import { Observable, of } from 'rxjs';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-themed-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav],
  standalone: true,
  imports: [NgbDropdownModule, ThemedLangSwitchComponent, ThemedSearchNavbarComponent, NgClass, RouterLink, NgIf, NgFor, NgComponentOutlet, ContextHelpToggleComponent, ThemedAuthNavMenuComponent, ImpersonateNavbarComponent, AsyncPipe, TranslateModule, ThemedUserMenuComponent, RouterModule],
})
export class NavbarComponent extends BaseComponent {
  sectionMap = [
    { label: 'QUIENES SOMOS', route: '/quienes-somos' },
    { label: 'EDITORIALES UNE', route: '/editoriales-une' },
    { label: 'CONTACTO', route: '/contacto' },
    { label: 'AYUDA', route: '/ayuda' }
  ];
}
