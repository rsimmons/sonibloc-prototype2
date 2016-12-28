
// These are JS code strings, to be eval()'d. We load them directly here
//  to simulate the scenario where they are dynamically loaded from a server
//  or from arbitrary (3rd party) URLs.
const availableBlocCodes = {
  'BeatClock': require('raw!./blocs/beatclock/bundle.js'),
  'DrumSynth': require('raw!./blocs/drumsynth/bundle.js'),
  'Orinami': require('raw!./blocs/orinami/bundle.js'),
  'Racket': require('raw!./blocs/racket/bundle.js'),
};

// This demo page is hard-coded to host a certain "rack" bloc,
//  within which the real action will happen.
const rackBlocCode = availableBlocCodes['Racket'];

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Instantiate the rack bloc, which will let the user dynamically instantiate
//  and connect up other blocs.
const rackBlocClass = eval(rackBlocCode);
const rackBloc = new rackBlocClass(document, audioContext);

document.querySelector('#rack-container').appendChild(rackBloc.windowView);
