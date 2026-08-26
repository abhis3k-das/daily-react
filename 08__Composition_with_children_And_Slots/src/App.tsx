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

      {/* Added 2 buttons to warning 'Dismiss' and 'Review' */}
      {/* Initially , we had only 1 button to display. */}
      <Card
        title="Account Warning"
        description="Your subscription expires tomorrow."
        showIcon
        icon="⚠️"
        showAction
        actionLabel="Review"
        showSecondAction
        secondActionLabel="Dismiss"
        showFooter
        footerText="Action required"
        isWarning
      />
    </>
    
  );
}

export default App;