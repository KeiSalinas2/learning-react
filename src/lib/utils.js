export const leftPad = function(number) {
  const pad = '00';
  return pad.substr(0, pad.length - number.length) + number;
}
export const formattedTime = function(secs) {
  const secondsRounded = Math.round(secs, 10);
  const minutes = parseInt(secondsRounded / 60, 10);
  const seconds = parseInt(secondsRounded % 60, 10);
  return `${minutes}:${leftPad(seconds.toString())}`;
}

export const fullScreen = {
  isFullScreen: () => {
    console.log(document.fullscreen )
    console.log( document.webkitIsFullScreen )
    console.log( document.mozFullScreen)
    return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen
  },

  requestFullScreen: element => {
    try { element.requestFullscreen() } catch (e) {
      try { element.webkitRequestFullscreen() } catch (e) {
        try { element.mozRequestFullScreen() } catch (e) {
          try { element.msRequestFullscreen() } catch (e) {
            console.log(e)
          }
        }
      }
    }
  },

  exitFullScreen: () => {
    try { document.exitFullscreen() } catch (e) {
      try { document.webkitExitFullscreen() } catch (e) {
        try { document.mozCancelFullScreen() } catch (e) {
          try { document.msExitFullscreen() } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
}