import { Injectable } from '@angular/core';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }
  playlist: Song[] = [
    {
      id: 'CX11yw6YL1w',
      name: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
    },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'UzZNF2xiM8k',
      name: 'Cảm Ơn Vì Ai Đó Đã Mang Đến Em Tiếng Cười'
    },
    {
      id:'a9TqnLIg3U4',
      name:'Nhạc Chill TikTok  Hon Ca May Troi'
    }
  ];
  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
