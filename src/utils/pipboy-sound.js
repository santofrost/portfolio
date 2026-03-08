/**
 * Pip-boy style terminal blip sound using Web Audio API.
 * Generates a short electronic "blip" similar to Fallout 4's Pip-boy interface.
 */

let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

/**
 * Plays a short Pip-boy style blip sound.
 * Uses a square wave oscillator with rapid attack/decay envelope.
 */
export function playPipboyBlip() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        // Oscillator — square wave for that digital/retro feel
        const osc = ctx.createOscillator();
        osc.type = 'square';
        // Frequency sweep: starts at ~1000Hz and quickly drops to ~600Hz
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.03);

        // Gain envelope — sharp attack, quick decay
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.003); // fast attack (3ms)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045); // decay to near-zero

        // Connect: oscillator -> gain -> output
        osc.connect(gain);
        gain.connect(ctx.destination);

        // Play for a very short time
        osc.start(now);
        osc.stop(now + 0.05);
    } catch {
        // Silently fail — audio is non-critical
    }
}
