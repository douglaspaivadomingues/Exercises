class students {
  private _registration: string;
  private _name: string;
  private _examGrades: number[];
  private _assignmentGrades: number[];

  constructor(registration: string, name: string, examGrades: number[], assignamentGrades: number[]) {
    this._registration = registration;
    this._name = name;
    this._examGrades = examGrades;
    this._assignmentGrades = assignamentGrades;
  }

  sumNote(n:number[]):number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum +=n[i];
    }
    return sum;
  }

  mediaNote(n: number[]):number {
    let note = 0;
    note = this.sumNote(n) / n.length;
    return note;
  }
}