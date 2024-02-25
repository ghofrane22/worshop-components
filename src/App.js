import FullName from "./Components/Profile/FullName";
import "./App.css";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Address from "./Components/Profile/Address";

function App() {
  return (
    <>
      <ProfilePhoto />;
      <FullName />;
      <Address />;
    </>
  );
}

export default App;
