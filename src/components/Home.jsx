import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
// Logo and images
import logo from "../Images/logo.png";
import rectagle from "../Images/Rectangle.png";
// Icons
import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// Each Elemet's Component
import Dashboardelement from "./Dashboardelement";
import Info_box from "./Info_box";
import BarChart from "./BarChart";
import ActionBoxes from "./ActionBoxes";
import { useNavigate } from "react-router-dom";
// Firebase
import { auth } from "../utils/firebase";
// Bottom Navigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
// For dark mode
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Home() {
  // Menu
  const dashboard = [
    { title: "Dashboard", icon: <GridViewIcon /> },
    { title: "Members", icon: <GroupsIcon /> },
    { title: "Exercise Plans", icon: <FitnessCenterIcon /> },
    { title: "Diet Plans", icon: <RestaurantMenuIcon /> },
    { title: "Profile", icon: <PersonIcon /> },
    { title: "Logout", icon: <LogoutIcon /> },
  ];
  // Information
  const information = [
    {
      icon: <CloudDownloadIcon className={style.icon} />,
      title: "Total Revenue",
      amount: "48,783.94",
    },
    {
      icon: <CloudUploadIcon className={style.icon} />,
      title: "Total Sales",
      amount: "42,783.94",
    },
  ];
  // Quick Actions
  const quickactions = [
    {
      icon: <AddIcon className={style.icon_quick} />,
      title: "Add Members",
    },
    {
      icon: <GroupsIcon className={style.icon_quick} />,
      title: "Manage Staffs",
    },
    {
      icon: <SettingsIcon className={style.icon_quick} />,
      title: "Set Up Gym branch",
    },
    {
      icon: <SubscriptionsIcon className={style.icon_quick} />,
      title: "Manage Subscription Plans",
    },
  ];
  // user
  const [user, setuser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setuser(user);
      } else {
        setuser(null);
        return navigate("/login");
      }
    });
  }, [navigate]);
  // ---------------
  // Navigation
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={style.dashboard_container}>
        <div className={style.dashboard_left_container}>
          <div className={style.logo_container}>
            <img src={logo} alt="logo" className={style.logo} />
            <h2>FITNESS</h2>
          </div>
          <div className={style.dashboard_menu}>
            {dashboard.map((item) => {
              return <Dashboardelement icon={item.icon} title={item.title} />;
            })}
          </div>
        </div>
        <div className={style.dashboard_right_container}>
          <div className={style.welcoming_conatiner}>
            <div className={style.welcoming_title}>
              <h1>Dashboard</h1>
              <p>Welcome back, {user?.displayName}</p>
            </div>
            <div className={style.profile_ans_notifi}>
              <NotificationsIcon className={style.notifi_icon} />
              <Avatar className={style.profile_icon} src={user?.photoURL} />
            </div>
          </div>
          <div className={style.information_container}>
            <div className={style.information_left}>
              <div className={style.information_left_top}>
                {information.map((info, index) => {
                  return (
                    <Info_box
                      title={info.title}
                      icon={info.icon}
                      amount={info.amount}
                    />
                  );
                })}
              </div>
              <div className={style.information_left_bottom}>
                <p>Members</p>
                <BarChart />
              </div>
            </div>

            <div className={style.information_right}>
              <div className={style.information_right_left}>
                <h3>Coming Soon</h3>
                <div>
                  <h4>SwipeUp</h4>
                  <br />
                  <p>Create Customized mini plans for your clients easily</p>
                </div>
              </div>
              <div className={style.information_right_right}>
                <img src={rectagle} alt="imgrectnagle" />
              </div>
            </div>
          </div>
          <div className={style.quickactions_container}>
            <p>Quick Actions</p>
            <div className={style.quickactions_container_boxes}>
              {quickactions.map((action) => {
                return <ActionBoxes title={action.title} icon={action.icon} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        className={style.bottom_nav}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction label="Members" icon={<GroupsIcon />} />
          <BottomNavigationAction label="Diet" icon={< RestaurantMenuIcon/>} />
          <BottomNavigationAction label="Logout" icon={< LogoutIcon/>} onClick={()=>{
            auth.signOut();
            setuser(null);
            navigate('/login')
          }} />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
}

export default Home;
