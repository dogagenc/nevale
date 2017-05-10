# nevale
Unnecessary tool to run Javascript for command line piping.

## Install

```sh
npm install -g nevale
```

## Usage

```sh
echo '1 2 3' | nevale "numbers => numbers.split(' ').join('+')"
// Outputs: 1+2+3
```

```sh
echo '{"hello": "world"}' | nevale "json => JSON.parse(json).hello"
// Outputs: world
```
