import bialystokPalace from '@/assets/commons-bialystok-palace-960.jpg';
import kruszynianyMosque from '@/assets/commons-kruszyniany-mosque-960.jpg';
import supraslMonastery from '@/assets/commons-suprasl-monastery-960.jpg';
import supraslRiver from '@/assets/commons-suprasl-river-960.jpg';
import supraslView from '@/assets/commons-suprasl-panorama-600.jpg';
import woodenHouse from '@/assets/commons-golakowa-szyja-dom-600.jpg';
import puszczaForest from '@/assets/commons-puszcza-knyszynska-kolodno-600.jpg';

export const commonsPhotos = {
  forest: {
    image: puszczaForest,
    width: 600,
    height: 400,
    author: 'Adrian Grycuk',
    source:
      'https://commons.wikimedia.org/wiki/File:Park_Krajobrazowy_Puszczy_Knyszy%C5%84skiej_w_okolicy_Ko%C5%82odna.jpg',
    license: 'CC BY-SA 3.0 PL',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/pl/deed.pl',
  },
  suprasl: {
    image: supraslView,
    width: 600,
    height: 400,
    author: 'Szymon Staniec',
    source: 'https://commons.wikimedia.org/wiki/File:Supra%C5%9Bl_-_widok_og%C3%B3lny.jpg',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  woodenHouse: {
    image: woodenHouse,
    width: 600,
    height: 400,
    author: 'MopenZdj',
    source: 'https://commons.wikimedia.org/wiki/File:Golakowa_Szyja_tradycyjny_dom.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  bialystok: {
    image: bialystokPalace,
    width: 960,
    height: 313,
    author: 'Andrzej Miecznik',
    source:
      'https://commons.wikimedia.org/wiki/File:Bia%C5%82ystok_Pa%C5%82ac_Branickich_DSC_1020_ShiftN.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  monastery: {
    image: supraslMonastery,
    width: 960,
    height: 640,
    author: 'Sylwpak',
    source:
      'https://commons.wikimedia.org/wiki/File:Monaster_Zwiastowania_Przenaj%C5%9Bwi%C4%99tszej_Bogurodzicy_i_%C5%9Bw._Jana_Teologa_w_Supra%C5%9Blu_07.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  river: {
    image: supraslRiver,
    width: 960,
    height: 638,
    author: 'Adam Sokołowski',
    source: 'https://commons.wikimedia.org/wiki/File:Rzeka_Supra%C5%9Bl.jpg',
    license: 'CC BY-SA 3.0 PL',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/pl/deed.en',
  },
  mosque: {
    image: kruszynianyMosque,
    width: 960,
    height: 640,
    author: 'Fallaner',
    source: 'https://commons.wikimedia.org/wiki/File:Kruszyniany_Mosque_2016_P02.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
} as const;
