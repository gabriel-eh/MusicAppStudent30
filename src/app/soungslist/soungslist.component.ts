import { Component, OnInit } from '@angular/core';
import { Imusic } from '../interfaces/Imusic';
import { MusicService } from '../services/soung.service';

@Component({
  selector: 'app-soungslist',
  templateUrl: './soungslist.component.html',
  styleUrls: ['./soungslist.component.scss']
})
export class SoungslistComponent implements OnInit {

  showFiller: boolean = false;
  userName: string = "Gabriel";
  soungs: Imusic[] = [];
  filter: string = "";

  constructor(
    private musicService: MusicService
  ) {

  }

  ngOnInit(): void {
    this.GetMusicList();
  }
  async GetMusicList() {
    const list = await this.musicService.GetMusicList();
    this.soungs = list.data;
    console.log(list);
  }
}

