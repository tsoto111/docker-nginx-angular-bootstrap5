import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Odd & Even Game';
  countList: Array<{count: number, type: string}> = [];

  gameStartedEvent($count: number) {
    this.countList.push({count: $count, type: this.getNumberType($count)});
  }

  /**
   * Get Number Type
   *
   * This method will tell us if a number is 'even' or 'odd'.
   *
   * @param   {number} $number The number we want to proccess on.
   * @returns {string}         Will return 'even' or 'odd' based off of the passed in
   *                           integer.
   */
  getNumberType($number: number): string {
    return $number % 2 === 0 ? 'even' : 'odd'
  }
}
