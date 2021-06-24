/**
 * Done: Create a keydown listener to track what keys are hit
 * Done: Create a Beat class to represent the beat object in utils.js
 * Done: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * Done: Button pt1: Initialize color and element values
 * Done: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * Done: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * Done: Button pt4: Call the select() function upon key press ;)
 * Done: Button pt5: Add transition for button selection
 * Done: Button pt6: Remove the button style upon transition end | Use deselect function
 * Done: Complete all button instances with the following colors
 * Done: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */
// Keyboard Key codes
// https://www.oreilly.com/library/view/javascript-dhtml/9780596514082/apb.html

let beats = {
  //   65
  a: {
    beat: new Beat('./assets/Piano Chord 331.mp3'),
    button: new Button('#00fffe', a),
  },
  //   83
  s: {
    beat: new Beat('./assets/Piano Chord 209.mp3'),
    button: new Button('#00fffe', s),
  },
  //   68
  d: {
    beat: new Beat('./assets/Piano Chord 208.mp3'),
    button: new Button('#00fffe', d),
  },
  //   70
  f: {
    beat: new Beat('./assets/Drum Sticks Hit 3.mp3'),
    button: new Button('#FF00FF', f),
  },
  //   71
  g: {
    beat: new Beat('./assets/Drum Snare Roll.mp3'),
    button: new Button('#FF00FF', g),
  },
  //   72
  h: {
    beat: new Beat('./assets/PREL Musical 57.mp3'),
    button: new Button('#FF00FF', h),
  },
  //   74
  j: {
    beat: new Beat('./assets/Cymbal Suspended 2.mp3'),
    button: new Button('#FF00FF', j),
  },
  //   75
  k: {
    beat: new Beat('./assets/Musical Compos 33.mp3'),
    button: new Button('#FFFFFF', k),
  },
  //   76
  l: {
    beat: new Beat('./assets/Musical Orches 4.mp3'),
    button: new Button('#FFFFFF', l),
  },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
  let keyPressed = event;
  if (keyPressed in beats) {
    // console.log(keyPressed);
    let keyPress = beats[event];
    keyPress.beat.play();
    keyPress.button.select();
  }
};

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */

document.addEventListener('keydown', (event) => {
  //   console.log(event);
  //   console.log(event.key);
  triggerBeat(event.key);
});
