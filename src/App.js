import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

function App() {
  return (
    <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div className="accordion">
      {accordionData.map(({title,content,key}) => {
        return <Accordion title={title} content={content}
        key={key} />
      })}
    </div>
    </>
  );
}

export default App;
