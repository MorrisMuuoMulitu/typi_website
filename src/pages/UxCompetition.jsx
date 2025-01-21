export default function UxCompetition() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">UI/UX Design Competition</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Competition Details</h2>
              <div className="space-y-4">
                <p><strong>Prize:</strong> $1500 USD</p>
                <p><strong>Team Size:</strong> 3 members</p>
                <p><strong>Age Range:</strong> 18-35 years</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Timeline</h2>
              <div className="space-y-2">
                <p>Launch: 11/01/2025</p>
                <p>Submission Deadline: 11/02/2025</p>
                <p>Public Voting: 25/02/2025 - 04/03/2025</p>
                <p>Winner Announcement: 07/03/2025</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
