let audioCtx: AudioContext | null = null;

function getContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  return audioCtx;
}

function playTone(frequency: number, duration: number, volume: number) {
  const ctx = getContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
}

export function playNavClick() {
  playTone(800, 0.06, 0.08);
  setTimeout(() => playTone(1200, 0.03, 0.04), 30);
}

export function playItemClick() {
  playTone(600, 0.05, 0.06);
}

export function playToggleClick() {
  playTone(1000, 0.04, 0.06);
  setTimeout(() => playTone(1400, 0.04, 0.04), 50);
}
