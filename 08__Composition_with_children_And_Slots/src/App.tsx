import { Card } from "./components/prop-heavy-card/Card";
import { ReUseableCard } from "./components/prop-reuseable-card/ReUseableCard";

function App() {
  return (
    <>
      <ReUseableCard
        header={
            <div>
              <span>👤</span>
              <h2>Abhisek</h2>
            </div>
          }
        actions={
          <>
            <button>Edit-1</button>
            <button>Edit-2</button>
          </>
        }
      >
        <p>abhisek@example.com</p>
          <p>Software Engineer</p>
      </ReUseableCard>

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


      <hr/>
      <ReUseableCard
        header={
          <div>
            <span>⚠️</span>
            <h2>Account Warning</h2>
          </div>
        }
        actions={
          <>
            <button>Dismiss</button>
            <button>Review</button>
          </>
        }
      >
        <p>Your subscription expires tomorrow.</p>

        <p>Please review this carefully.</p>

        <small>Action required</small>
      </ReUseableCard>
    </>
    
  );
}

export default App;