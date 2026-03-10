import { useState } from "react";
import {
  formatMembershipPlan,
  getUserMemberships,
  payMembership,
  removeMembership,
  updateMembershipStatus
} from "../../utils/memberships";

function UserYourSpaces() {
  const [memberships, setMemberships] = useState(getUserMemberships());

  const onPayNow = (spaceId: string) => {
    setMemberships(payMembership(spaceId));
  };

  const onPauseResume = (spaceId: string, current: "active" | "paused") => {
    const nextStatus = current === "active" ? "paused" : "active";
    setMemberships(updateMembershipStatus(spaceId, nextStatus));
  };

  const onCancel = (spaceId: string) => {
    setMemberships(removeMembership(spaceId));
  };

  return (
    <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
      <h1 className="page-title">Your Spaces</h1>
      <p className="page-subtitle">Manage selected spaces, payments and memberships.</p>

      {memberships.length === 0 ? (
        <p>No memberships yet. Use Search Space and add one.</p>
      ) : (
        <div className="space-grid">
          {memberships.map((item) => (
            <article key={item.spaceId} className="surface-card space-card">
              <h3>{item.spaceName}</h3>
              <p style={{ margin: "0.2rem 0" }}>Plan: {formatMembershipPlan(item.plan)}</p>
              <p style={{ margin: "0.2rem 0" }}>Status: {item.status}</p>
              <p style={{ margin: "0.2rem 0" }}>Monthly Price: Rs {item.monthlyPrice}</p>
              <p style={{ margin: "0.2rem 0" }}>
                Next Billing: {new Date(item.nextBillingDate).toLocaleDateString()}
              </p>

              <div className="row">
                <button className="btn btn-primary" onClick={() => onPayNow(item.spaceId)}>
                  Pay Now
                </button>

                <button
                  className="btn btn-outline"
                  onClick={() => onPauseResume(item.spaceId, item.status)}
                >
                  {item.status === "active" ? "Pause Membership" : "Resume Membership"}
                </button>

                <button className="btn btn-danger" onClick={() => onCancel(item.spaceId)}>
                  Cancel
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default UserYourSpaces;
