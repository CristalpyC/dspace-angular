import { Component } from '@angular/core';
import { CommunityServiceService } from './community-service.service';

@Component({
  selector: 'ds-community-page',
  standalone: true,
  imports: [],
  templateUrl: './community-page.component.html',
  styleUrl: './community-page.component.scss'
})
export class CommunityPageComponent {
  communities: any[] = [];

  constructor(private communityService: CommunityServiceService) {}

  ngOnInit(): void {
    this.communityService.getCommunities().subscribe(data => {
      this.communities = data._embedded.communities;
      console.log('Editoriales: ', this.communities);
    });
  }
}
