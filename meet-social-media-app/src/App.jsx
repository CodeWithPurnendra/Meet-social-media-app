import Posts from "./Components/Posts/Posts";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import Stories from "./Components/Stories/Stories";
import Form from "./Components/Search/Search";
import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");

   const navLinks = [
    { id: 1, tab: "home", toolTip: "Home",icon: <FiHome /> },
    { id: 2, tab: "search", toolTip: "Search", icon: <FiSearch /> },
    { id: 3, tab: "create", toolTip: "Create", icon: <FiPlusSquare /> },
    { id: 4, tab: "activity", toolTip: "Activity", icon: <FiHeart /> },
    { id: 5, tab: "profile", toolTip: "Profile", icon: <FiUser /> },
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Stories stories= {stories}/>
            <Posts posts={posts}/>
          </>
        );
      case "search":
        return <Form />;

      case "profile":
        return <Profile />;

      case "activity":
        return <Activity />;
      default:
        return null;
    }
  };
  const stories = [
    {
      id: 1,
      realName: "Ravi",
      image: "/Stories-images/ravi.jpg",
      title: "ravi",
    },
    {
      id: 2,
      realName: "Rakesh",
      image: "/Stories-images/rakesh.jpg",
      title: "rakesh",
    },
    {
      id: 3,
      realName: "Rahul",
      image: "/Stories-images/rahul.jpg",
      title: "rahul",
    },
    {
      id: 4,
      realName: "Raju",
      image: "/Stories-images/raju.jpg",
      title: "raju",
    },
    {
      id: 5,
      realName: "Ajay",
      image: "/Stories-images/ajay.jpg",
      title: "ajay",
    },
    {
      id: 6,
      realName: "Gulshan",
      image: "/Stories-images/gulshan.jpg",
      title: "gulshan",
    },
    {
      id: 7,
      realName: "Chatrapal",
      image: "/Stories-images/chatrapal.jpg",
      title: "chatrapal",
    },
  ];
 
  const posts = [
    {
      id: 1,
      realName: "ravi",
      image: "/Post-images/antarctica.jpg",
      storyImage: "/Stories-images/ravi.jpg",
      title: "antarctica",
      description: "Lost in the endless white ❄️ Antarctica feels unreal.",
    },
    {
      id: 2,
      realName: "rakesh",
      image: "/Post-images/iceland.jpg",
      storyImage: "/Stories-images/rakesh.jpg",
      title: "iceland",
      description: "Waterfalls, glaciers & pure magic ✨",
    },
    {
      id: 3,
      realName: "rahul",
      image: "/Post-images/japan.jpg",
      storyImage: "/Stories-images/rahul.jpg",
      title: "japan",
      description: "Cherry blossoms and calm streets 🌸 Japan vibes.",
    },
    {
      id: 4,
      realName: "raju",
      image: "/Post-images/kashmir.jpg",
      storyImage: "/Stories-images/raju.jpg",
      title: "kashmir",
      description: "Heaven on earth 🏔️ Kashmir stole my heart.",
    },
    {
      id: 5,
      realName: "ajay",
      image: "/Post-images/santorini.jpg",
      storyImage: "/Stories-images/ajay.jpg",
      title: "santorini",
      description: "Blue domes & sunsets 🌊 Santorini dreams.",
    },
    {
      id: 6,
      realName: "gulshan",
      image: "/Post-images/switzerland.jpg",
      storyImage: "/Stories-images/gulshan.jpg",
      title: "switzerland",
      description: "Snowy peaks and peaceful views ❄️",
    },
    {
      id: 7,
      realName: "chatrapal",
      image: "/Post-images/tokyo.jpg",
      storyImage: "/Stories-images/chatrapal.jpg",
      title: "tokyo",
      description: "Neon lights & night walks 🌃 Tokyo never sleeps.",
    },
  ];
  return (
    <>
      <TopNavBar logo="Meet" />
      {renderScreen()}
      <BottomNavBar navLinks={navLinks} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </>
  );
}

export default App;
