import "./TabBar.css";

export default function TabBar() {
  return (
    <div className="tab-bar">
      <div className="tab-bar__tab">
        All Entries <span className="tab-bar__badge">3</span>
      </div>
      <div className="tab-bar__tab">
        Favorites <span className="tab-bar__badge">1</span>
      </div>
    </div>
  );
}
