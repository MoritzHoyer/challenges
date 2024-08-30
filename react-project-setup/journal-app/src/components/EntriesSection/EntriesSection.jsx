import "./EntriesSection.css";
import Divider from "../Divider/Divider.jsx";
import Entry from "../Entry/Entry.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import Tab from "../Tab/Tab.jsx";
import Badge from "../Badge/Badge.jsx";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        <Entry
          date="Feb 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 26, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 25, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
      </div>
    </section>
  );
}
