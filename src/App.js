import "./App.css";
import Invitation from "./Component/Invitation/Invitation";

function App() {
  const name = "jaGdish";
  const partyinvite = "Birthday party Invitation";
  const email = "@gmail.com";
  const bdayparty = "birthday party";
  const schoolmates = "Ritu ,  Saurabh , Kartik";
  const place = "Green field Avenue";
  return (
    <div className="App">
      <header className="App-header">
        <Invitation
          bdaypartyinvite={partyinvite}
          emails={email}
          name={name}
          bparty={bdayparty}
          friends={schoolmates}
          location={place}
        />
      </header>
    </div>
  );
}

export default App;
