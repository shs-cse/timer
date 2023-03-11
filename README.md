# timer
Single-page application which shows a countdown timer.

## Usage
+ Open website https://shs-cse.github.io/timer/
+ Enter desired time via `number keys` e.g 130 for 1 minutes and 30 seconds. Clear time with `c`
+ Start timer with `enter`
+ Stop timer with `q`

## Features
+ Plain and simple
+ Preset timer via URL https://shs-cse.github.io/timer/#00:15:00 (15 minutes)
+ Integratable in OBS Studio
	+ After 27.0.0 full controll via Interact feature
	+ Before 27.0.0 Need preseted timer and is autostarted via source visibility

# Customization
The style can be costumized in OBS Studio

```
body {
	background-color: transparent;
}

#timer {
	color: blue;
}

#timer.ended {
	color: yellow;
	animation: none;
}
```

# Example
![Example page](example.png?raw=true)

# Sources
+ Icon: https://openclipart.org/detail/204661/alarm-clock
+ Sound: https://opengameart.org/node/16322
