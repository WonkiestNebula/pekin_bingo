import BingoCell from "./BingoCell";
import pekinisms from "./pekinisms.json";

//fill bingo array with random pekinisms but free space in the middle
let bingo = [];
let pekinismsCopy = [...pekinisms];
for (let i = 0; i < 5; i++) {
  let row = [];
  for (let j = 0; j < 5; j++) {
    if (i === 2 && j === 2) {
      row.push("Free Space");
    } else {
      let randomIndex = Math.floor(Math.random() * pekinismsCopy.length);
      row.push(pekinismsCopy[randomIndex]);
      pekinismsCopy.splice(randomIndex, 1);
    }
  }
  bingo.push(row);
}

const App = () => {
  console.log(bingo);
  return (
    <div className="">
      <div className="w-full content-center text-center">
        <h1 className="mb-5 text-7xl text-green-50 md:mb-0">Pekin Bingo</h1>
      </div>
      <div className="flex flex-col">
        <div
          className="flex h-[min(100dvh-72px,100dvw)] w-[min(100dvh-72px,100dvw)] 
                        snap-center flex-col place-self-center self-center pr-1 sm:p-10"
        >
          <div className="h-full w-full flex-1 rounded-lg">
            {bingo.map((row, i) => {
              let firstRounded;
              if (i === 0) {
                firstRounded = "top";
              } else if (i === 4) {
                firstRounded = "bottom";
              }
              return (
                <div key={i} className="flex h-1/5 rounded-t-lg">
                  {row.map((cell, j) => {
                    let rounded;
                    if (j === 0 && firstRounded) {
                      rounded = firstRounded + "-left";
                    } else if (j === 4 && firstRounded) {
                      rounded = firstRounded + "-right";
                    } else {
                      rounded = undefined;
                    }
                    return <BingoCell key={j} label={cell} rounded={rounded} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
