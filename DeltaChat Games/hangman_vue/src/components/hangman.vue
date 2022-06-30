<script lang="ts" setup>
/* eslint-disable new-cap */
import p5 from 'p5'

const canvas: HTMLElement = $ref()

function randomword(words: string[]) {
  return words[Math.round(Math.random() * (words.length - 1))]
}

const words = ['hallo', 'tschuess',"bentik",'trump','luchs','eierschalensollbruchstellenverursacher']
let target_word = randomword(words)
let new_string = $ref('_ '.repeat(target_word.length))

enum GameState {
  Playing,
  Won,
  Lost,
}

let game_state = $ref(GameState.Playing)

const body_x_top = 420
const body_y_top = 320
const galgen_x_bottom = body_x_top - 250
const galgen_y_bottom = body_y_top + 300
let elements_to_draw = 0

const parts = [
  // galgen
  [galgen_x_bottom, galgen_y_bottom, 250, 250, 3.1415, 0],
  [galgen_x_bottom, galgen_y_bottom - 250 / 2, galgen_x_bottom, galgen_y_bottom - 450],
  [galgen_x_bottom, galgen_y_bottom - 450, body_x_top, galgen_y_bottom - 450],
  [galgen_x_bottom, galgen_y_bottom - 370, galgen_x_bottom + 80, galgen_y_bottom - 450],
  [body_x_top, galgen_y_bottom - 450, body_x_top, body_y_top - 50],
  // head
  [body_x_top, body_y_top - 25, 50],
  [body_x_top - 1 / 3 * 25, body_y_top - 28, 2],
  [body_x_top + 1 / 3 * 25, body_y_top - 28, 2],
  // body
  [body_x_top, body_y_top, body_x_top, body_y_top + 100],
  // arms
  [body_x_top, body_y_top + 15, body_x_top - 30, body_y_top + 90],
  [body_x_top, body_y_top + 15, body_x_top + 30, body_y_top + 90],
  // legs
  [body_x_top, body_y_top + 100, body_x_top - 25, body_y_top + 175],
  [body_x_top, body_y_top + 100, body_x_top + 25, body_y_top + 175],
]

let letters = {} as { [key: string]: boolean | undefined }
let parts_to_draw = [parts[0]] as number[][]

function replay() {
  console.log('starting new game')
  letters = {}
  parts_to_draw = [parts[0]]
  target_word = randomword(words)
  new_string = '_ '.repeat(target_word.length)
  elements_to_draw = 0
  game_state = GameState.Playing
}

onMounted(() => {
  // eslint-disable-next-line no-new
  new p5((p5Instance) => {
    const p = p5Instance as unknown as p5
    p.setup = function setup() {
      p.createCanvas(400, 500)
      p.textFont('Arial')
      p.textSize(30)
      p.frameRate(60)
      p.background(255, 255, 255)
    }

    p.draw = function draw() {
      p.background(255)
      p.scale(0.7)
      for (const part of parts_to_draw) {
        if (part.length === 6)
          p.arc(part[0], part[1], part[2], part[3], part[4], part[5])

        if (part.length === 4)
          p.line(part[0], part[1], part[2], part[3])

        if (part.length === 3)
          p.circle(part[0], part[1], part[2])
      }
    }

    p.keyPressed = () => {
      const key = p.key
      const keyCode = p.keyCode
      if (game_state != GameState.Playing)
        return

      if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)))
        return

      if (!target_word.includes(key) && letters[key] != true) {
        elements_to_draw++
        parts_to_draw.push(parts[elements_to_draw])
      }
      letters[key] = true

      new_string = ''
      let comparison_string = ''
      for (const letter of target_word) {
        if (letters[letter] === true) {
          new_string += letter
          comparison_string += letter
        }
        else {
          new_string += '_'
        }
        new_string += ' '
      }

      if (comparison_string === target_word)
        game_state = GameState.Won

      if (parts_to_draw.length === parts.length)
        game_state = GameState.Lost
    }
  }, canvas)
})
</script>

<template lang="pug">
div
  p.text-center.text-red-500.font.mt-3(v-if="game_state === GameState.Lost") Du died
  p.text-center.text-green-500.text-bold.mt-3(v-if="game_state === GameState.Won") Mission passed
  div(ref="canvas")
  p.text-center.p-4.text-3xl {{new_string}}
  div.flex.justify-center
    button.bg-pink-500.text-2xl.p-5.rounded.text-white.leading-none(v-if="!(game_state == GameState.Playing)" @click="replay") Replay
</template>
