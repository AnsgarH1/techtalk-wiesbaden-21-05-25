import { defineAppSetup } from '@slidev/types'

import mermaid from 'mermaid/dist/mermaid.esm.mjs';
import { icons as logos } from '@iconify-json/logos';
import { icons as lucide } from '@iconify-json/lucide';


mermaid.registerIconPacks([
    {
        name: logos.prefix,
        icons: logos
    },
    {
        name: lucide.prefix,
        icons: lucide
    },
])

export default defineAppSetup(() => {})