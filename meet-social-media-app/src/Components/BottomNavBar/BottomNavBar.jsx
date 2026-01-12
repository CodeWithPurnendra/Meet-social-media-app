import "./BottomNavBar.css";
function BottomNavBar({ navLinks,activeTab, setActiveTab }) {
  return (
    <main> 
    <section className="navbar-container">
      <div className="navbar">
        <ul>
          {navLinks.map((item) => {
            return (
              <li key={item.id} className= {activeTab === item.tab? "active" : ""} onClick={()=> setActiveTab(item.tab)} data-tooltip={item.toolTip}>
               {item.icon}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  </main>
  );
}

export default BottomNavBar;
