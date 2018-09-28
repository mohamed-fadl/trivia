Trivia kata in typescript
=========================

1. Install the dependencies with this command: `npm install`
2. Run the game with this command: `npm run start`
3. Run the tests with this command: `npm test`

    Any test source matching the pattern `*.test.ts` below `src/` will be executed.

## Behind the implementation:
Any game consists of three main parts to be played, the game itself, the players who play the game and the rules of the game. For our current game, we have a **Game Board** which represents the actual board that the players can play on, a **Question Generator** which generates the questions each round and a **Judge** which controls and applies the rules of the game.


## Things I would do differently/more if I had more time

- Implement and event based communication between the different parts of the project to make each
    component more independent.

- Create interfaces for the GameBoard, Judge for example so they become more abstract and by that we can have many
    options for different game shapes and sizes that we can implement based on this setup to be built.

- Outsource the console.log or any output to a different component so the Judge get rid of that logic.

- Implement an interface for the games rules so the judge can outsource checking the rules to another component.

- Write more unit tests for each component.

- Write an e2e test.

- Add mocked data, for example, the players factory should read the players names from a json file or another source rather than
    getting an array passed to it.

## My Ideal architecutre of such project

most of the component of the porjects should be abstracated to the maximum possibility and no component should know what other component logic is, that way we can reach independency in most of the parts of the project which makes it very easy to add functionality, maintain or even replace complete parts of the project without affecting the other parts.
