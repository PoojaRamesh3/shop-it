import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { content } from "../context";

function Navbar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4">Navbar</Typography>
        <div>
          {content.navbar.map((item: any, index: any) => (
            <Link to="/" key={index} className="px-5">
              {item.listname}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
