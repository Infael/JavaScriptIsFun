function loop() {
  dance: for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === 2) {
        break dance;
      }
    }
  }
}
