import { About } from "./About/About";
// import robotsLogo from "../common/media/images/robotsLogo.png";
import roxanabrand from "../common/media/images/roxanabrand.gif";
import { prettyColorPalette } from "../styles/lazyStyles";
export const Header = ({ auth, globalReserveCounter }) => {
  return (
    <div style={{ color: prettyColorPalette.softYellowGlow }}>
      <img width="125px" src={roxanabrand} />
      <br />
      <br />
      <h2>RO.₿.E</h2>
      <h3>Robots Building Education</h3>
      {/* <h4>{globalReserveCounter}</h4> */}

      <br />
      <About auth={auth} />
    </div>
  );
};
