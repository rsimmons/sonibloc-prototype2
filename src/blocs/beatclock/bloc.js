import EventEmitter from 'events';

import htmlToElement from '../../util/htmlToElement';
import EventScheduler from './scheduler';

function createEventOutput() {
  const subscribers = [];
  const subscribe = (cb) => {
    subscribers.push(cb);
    return () => {
      subscribers.splice(subscribers.indexOf(cb), 1);
    };
  };
  const emit = (time, value) => {
    for (const subscriber of subscribers) {
      subscriber(time, value);
    }
  };
  return [subscribe, emit];
}

export default class BeatClock {
  constructor(document, audioContext) {
    const TICKS_PER_BEAT = 4;
    const divs = [
      {outName: 'gate16', divisor: 1},
      {outName: 'gate8', divisor: 2},
      {outName: 'gate4', divisor: 4},
    ];

    this.inputs = {};
    this.outputs = {};

    for (const div of divs) {
      const [subscribe, emitter] = createEventOutput();
      this.outputs[div.outName] = {type: 'gateEvent', subscribe: subscribe};
      div.emitter = emitter;
    }

    let tempo = 120;
    const MIN_TEMPO = 10;
    this.panelView = htmlToElement(document, '<div style="box-sizing: border-box; width: 192px; height: 256px; padding: 5px; background-color: white;"><div>BeatClock</div><form><label>Tempo <input type="number" value="' + tempo + '" min="' + MIN_TEMPO + '" style="width: 50px" />bpm</label></form></div>');
    this.panelView.querySelector('input').addEventListener('input', function(e) {
      const t = parseInt(e.target.value, 10);
      if (!isNaN(t) && (t >= MIN_TEMPO)) {
        tempo = t;
      }
    }, false);

    this._scheduler = new EventScheduler(audioContext);

    let nextTickTime = audioContext.currentTime + 0.1; // start first tick a little in the future
    let nextTickNumber = 0;

    this._scheduler.start(function(e) {
      const secsPerTick = 60.0/(tempo*TICKS_PER_BEAT);

      while (nextTickTime < e.end) {
        for (const div of divs) {
          const ticksPerDiv = div.divisor;
          const tickDuration = ticksPerDiv*secsPerTick;

          if ((nextTickNumber % ticksPerDiv) === 0) {
            div.emitter(nextTickTime, true);
            div.emitter(nextTickTime+0.5*tickDuration, false);
            // TODO: "number"/count is Math.round(tick/ticksPerDiv) if we want to export that
          }
        }

        nextTickTime += secsPerTick;
        nextTickNumber++;
      }
    });
  }

  deactivate() {
    this._scheduler.stop();
  }
}

BeatClock.blocName = 'BeatClock';
