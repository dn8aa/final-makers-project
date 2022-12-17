import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSetProfile } from "../../contexts/SetProfileContext";

const pages = ["Products", "Pricing", "Blog"];

function Navbar() {
  // console.log(profiles);
  // console.log(email);

  //  async function findID() {
  //   const IDarray = await profiles.filter((profile) => profile.user === email);
  //   // const id = IDarray[0].id;
  //   // console.log(id)
  //   return IDarray[0].id;
  // }

  // console.log(findID());

  // console.log(profiles.filter((profile) => profile.user === email));

  // React.useEffect(() => {
  //   findID();
  // }, []);

  // console.log(findID());
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const {
    user: { email },
    handleLogout,
  } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{ fontFamily: "Playfair Display, serif", backgroundColor: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            MEDIUM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="
              error"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            MEDIUM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                borderRadius: "30px",
                my: 2,
                color: "white",
                display: "block",
                color: "black",
                textTransform: "lowercase",
              }}
            >
              Our story
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                borderRadius: "30px",
                my: 2,
                color: "white",
                display: "block",
                color: "black",
                textTransform: "lowercase",
              }}
            >
              Membership
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/writepost");
              }}
              sx={{
                borderRadius: "30px",
                my: 2,
                color: "white",
                display: "block",
                color: "black",
                textTransform: "lowercase",
              }}
            >
              Write
            </Button>
            {!email ? (
              <>
                {" "}
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/auth");
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    color: "black",
                    textTransform: "lowercase",
                    borderRadius: "30px",
                  }}
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/auth");
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    backgroundColor: "black",
                    textTransform: "lowercase",
                    borderRadius: "30px",
                    padding: "3px 15px",
                    ":hover": {
                      color: "black",
                    },
                  }}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <></>
            )}
          </Box>

          {email ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    // handleLogout();

                    navigate(`profile/${email}`);
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    handleLogout();
                    navigate("/");
                  }}
                >
                  <Box>
                    <Typography textAlign="left">Sign Out</Typography>
                    <Typography textAlign="center">{email}</Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
