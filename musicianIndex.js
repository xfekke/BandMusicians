export class Musician {
  static musicianCount = 0;
  static musicianData = [];

  constructor(name, info, birthYear, bands, formerBands, instruments) {
    this.name = name;
    this.info = info;
    this.birthYear = birthYear;
    this.bands = bands;
    this.formerBands = formerBands;
    this.instruments = instruments;

    Musician.musicianCount++;

    return new Musician(name, info, birthYear, bands, formerBands, instruments);
  }
}