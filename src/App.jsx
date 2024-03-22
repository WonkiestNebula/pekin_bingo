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
    <div className="bg-slate-900">
      <div className="w-full content-center text-center">
        <h1 className="text-7xl text-green-50">Pekin Bingo</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[calc(100dvh-72px)] w-[calc(100dvh-72px)] snap-center flex-col place-self-center self-center pb-10 pl-10 pr-10 pt-10">
          <div className="h-full w-full min-w-52 flex-1 rounded-lg">
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
