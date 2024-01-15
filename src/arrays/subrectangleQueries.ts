class SubrectangleQueries {
  rectangle: number[][];
  constructor(rectangle: number[][]) {
    this.rectangle = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number,
  ): void {
    for (let i = row1 - 1; i < row2; i++) {
      for (let j = col1 - 1; j < col2; j++) {
        this.rectangle[i][j] = newValue;
      }
    }
    console.log(this.rectangle);
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col];
  }
}

let r = new SubrectangleQueries([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]);

r.updateSubrectangle(2, 2, 3, 3, 1);
