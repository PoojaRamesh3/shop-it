import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { content } from "../context";

function Navbar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5">Shop-It!</Typography>
        <>
          {content.navbar.map((item: any, index: any) => (
            <Link to="/" key={index} className="px-7 font-semibold">
              {item.listname}
            </Link>
          ))}
        </>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
