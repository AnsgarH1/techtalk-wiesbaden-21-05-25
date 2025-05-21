import { defineMermaidSetup } from '@slidev/types'




export default defineMermaidSetup(() => {
  return {
    theme: 'default',
    look: "handDrawn",
    gantt: {
      barHeight: 50,
      barGap: 20,
      fontSize: 25,
      axisFormat: '%Lms',
    },
    sequence: {
      mirrorActors: false,
      boxMargin: 0.1,
    }
  }
})
