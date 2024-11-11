import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ThemedCommunityListComponent } from './community-list/themed-community-list.component';
import { StartsWithTextComponent } from '../shared/starts-with/text/starts-with-text.component';

/**
 * Page with title and the community list tree, as described in community-list.component;
 * navigated to with community-list.page.routing.module
 */
@Component({
  selector: 'ds-base-community-list-page',
  templateUrl: './community-list-page.component.html',
  standalone: true,
  imports: [ ThemedCommunityListComponent, TranslateModule, StartsWithTextComponent],
})
export class CommunityListPageComponent {

}
