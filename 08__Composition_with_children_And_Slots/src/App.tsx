import { Card } from "./components/prop-heavy-card/Card";

function App() {
  return (
    <>
      <Card
        title="Abhisek Das"
        description="abhisek@example.com"
        showIcon={true}
        icon="👤"
        showAction={true}
        actionLabel="Edit"
        showFooter={true}
        footerText="Software Engineer"
      />

      <hr/>
      
      <Card
        title="Account Warning"
        description="Your subscription expires tomorrow."
        showIcon={true}
        icon="⚠️"
        showAction={true}
        actionLabel="Review"
        showFooter={true}
        footerText="Action required"
        isWarning={true}
      />
    </>
    
  );
}

export default App;