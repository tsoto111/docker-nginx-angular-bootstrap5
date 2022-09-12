import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  gameCounter: any;
  gameTimerCounter: number = 0;
  startControlDisabled = false;
  stopControlDisabled = true;


  @Output() gameCounterDelegate = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Start Game
   *
   * Entrypoint function to start game logic.
   *
   * @returns {void}
   */
  startGame(): void {
    this.toggleControlDisabledStates();

    this.gameCounter = setInterval(() => {
      this.gameTimerCounter += 1;
      this.gameCounterDelegate.emit(this.gameTimerCounter);
    }, 1000);
  }

  /**
   * Stop Game
   *
   * Entrypoint function for the stop game logic.
   *
   * @returns {void}
   */
  stopGame(): void {
    this.toggleControlDisabledStates();
    clearInterval(this.gameCounter);
  }

  /**
   * Toggle Control Disabled States
   *
   * This button toggles both the start and stop button states
   * whenever called. If button is disabled, it will enable it. If
   * button is enabled, it will be disabled.
   *
   * @returns {void}
   */
  toggleControlDisabledStates(): void {
    this.startControlDisabled = !this.startControlDisabled;
    this.stopControlDisabled = !this.stopControlDisabled;
  }
}
