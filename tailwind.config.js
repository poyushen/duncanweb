import { join } from 'path';

import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte}'
		)
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto": ["Noto Sans TC", "sans-serif"],
        "sedan": ["Sedan", "serif"]
      }
    },
  },
  plugins: [],
}

