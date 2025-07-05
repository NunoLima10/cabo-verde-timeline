type HSLColor = {
  h: number; 
  s: number; 
  l: number; 
};

function hslToHex({ h, s, l }: HSLColor): string {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));

  return `#${f(0).toString(16).padStart(2, '0')}${f(8).toString(16).padStart(2, '0')}${f(4)
    .toString(16)
    .padStart(2, '0')}`;
}

function generateDistinctColor(previousHues: number[]): string {
 
  let h: number;
  let tries = 0;
  do {
    h = Math.floor(Math.random() * 360);
    tries++;

  } while (previousHues.some(ph => Math.abs(ph - h) < 30) && tries < 10);

  const s = 40 + Math.random() * 30; 
  const l = 40 + Math.random() * 20; 

  previousHues.push(h);
  return hslToHex({ h, s, l });
}


export function generatePalette(count: number): string[] {
  const colors: string[] = [];
  const previousHues: number[] = [];

  for (let i = 0; i < count; i++) {
    const color = generateDistinctColor(previousHues);
    colors.push(color);
  }

  return colors;
}