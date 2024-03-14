import { Route } from '@angular/router';

import { AuthenticatedGuard } from '../core/auth/authenticated.guard';
import { PublicationClaimBreadcrumbResolver } from '../core/breadcrumbs/publication-claim-breadcrumb.resolver';
import { provideSuggestionNotifications } from '../notifications/provide-suggestion-notifications';
import { SuggestionsPageComponent } from './suggestions-page.component';
import { SuggestionsPageResolver } from './suggestions-page.resolver';

export const ROUTES: Route[] = [
  {
    path: ':targetId',
    resolve: {
      suggestionTargets: SuggestionsPageResolver,
      breadcrumb: PublicationClaimBreadcrumbResolver,//I18nBreadcrumbResolver
    },
    data: {
      title: 'admin.notifications.publicationclaim.page.title',
      breadcrumbKey: 'admin.notifications.publicationclaim',
      showBreadcrumbsFluid: false,
    },
    providers: [
      provideSuggestionNotifications(),
    ],
    canActivate: [AuthenticatedGuard],
    runGuardsAndResolvers: 'always',
    component: SuggestionsPageComponent,
  },
];
