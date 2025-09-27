# Word Square Solver (JavScript version)

## Quick start guide
To quickly get started run the following command
```
# node src/main.js <n> ≤characters-as-string> <optional-argument>
node src/main.js 4 eeeeddoonnnsssrv all
```

### Optional arguments
- `blank` solver returns the first solution by default (fastest option in most cases). 
- `all` prints all possible solution(s).
- `last` collects all solutions and returns the last solution (solution given with this option matches the examples povided)

## Using NPM
This exercise was completed using nodejs `v22.17.0`, and compatibility with other version has not been tested.
Please run `npm install` after cloning the repo. 

### Running the solver 
Please refer to the optional arguments mentioned above.
```
# npm start <n> <charcters-as-string> <optional-arguments>
# example
npm start 4 eeeeddoonnnsssrv last
```

### Updating the dictionary
This repo contains a local copy of dictionary on `assets/dictionary.txt` file. To update it from the internet please run:
```
npm run fetch-dictionary
```

### Running the test
Please run the following to carry out unit tests. 
```
npm run test
```

