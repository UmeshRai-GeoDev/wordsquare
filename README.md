# Word Square Solver (Java version)

## Dependencies 
- Apache Maven `3.9.10`
- OpenJDK `21.0.7`

## Getting started

```
git checkout solution/Java
mvn clean package
# java -jar target/wordsquare-0.1.jar  <n> <chars-as-string> <optional-arg>
java -jar target/wordsquare-0.1.jar  5 aaaeeeefhhmoonssrrrrttttw all
```

### Optional arguments
- `blank` solver returns the first solution by default (fastest option in most cases). 
- `all` prints all possible solution(s).
- `last` collects all solutions and returns the last solution (solution given with this option matches the examples povided)


### Running the test
Please run `mvn test` to carry out unit tests. 

