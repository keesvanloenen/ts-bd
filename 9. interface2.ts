interface Speler {
  name: string;
  city?: string;
  readonly tel: string;   // enkel op TypeScript niveau
}

interface IetsAnders {
  nr: number;
}

interface Playable extends Speler, IetsAnders {
  play(value: unknown, ...args: unknown[]): unknown;
}

const speler1: Speler = {
  name: 'Baarn',
  tel: '12234',
};

const player12: Playable = {
  play: function (value: unknown, ...args: unknown[]): unknown {
    throw new Error('Function not implemented.');
  },
  name: '',
  city: '',
  nr: 0,
  tel: '',
};

// speler1.tel = '456789'; // 💣

// ----------------------------------------------------------------------

interface IJsco {
  readonly aantalBolletjes: number;
  readonly heeftHorentje: boolean;
}

const ijsco1: IJsco = {
  aantalBolletjes: 2,
  heeftHorentje: false,
};

Object.freeze(ijsco1);      // ook op JavaScript niveau

// ijsco1.aantalBolletjes = 3;    // 💣
console.log(ijsco1.aantalBolletjes);



