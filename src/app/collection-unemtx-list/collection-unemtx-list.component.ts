import { Component, OnInit } from '@angular/core';
import { CollectionsUnemtxService } from '../core/data/collections-unemtx.service';

@Component({
  selector: 'app-collection-unemtx-list',
  standalone: true,
  imports: [],
  templateUrl: './collection-unemtx-list.component.html',
  styleUrls: ['./collection-unemtx-list.component.css']
})
export class CollectionUnemtxListComponent implements OnInit {
  collections: any[] = [];

  constructor(private collectionsService: CollectionsUnemtxService) { }

  ngOnInit(): void {
    this.collectionsService.getCollections().subscribe(
      (data) => {
        this.collections = data._embedded.collections;
      },
      (error) => {
        console.error('Error al obtener las colecciones:', error);
      }
    );
  }
}
