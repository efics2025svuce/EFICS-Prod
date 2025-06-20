import React from 'react'


const Schedule = () => {
  return (
    <section className="schedule">
    <h2>Event Schedule</h2>
    <p>Stay informed about the key deadlines for submission, review, and registration for the International Conference on Innovations, Challenges & Sustainable Mobility (EFICS-2025).</p>
    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abstract Submission</td>
          <td>June 30, 2025</td>
        </tr>
        <tr>
          <td>Notification of Acceptance</td>
          <td>July 1, 2025</td>
        </tr>
        <tr>
          <td>Full Paper Submission Deadline</td>
          <td>July 5, 2025</td>
        </tr>
        <tr>
          <td>Intimation to Participants</td>
          <td>July 10, 2025</td>
        </tr>
        <tr>
          <td>Conference Dates</td>
          <td>July 14-15, 2025</td>
        </tr>
      </tbody>
    </table>
  </section>
  )
}
export default Schedule;
