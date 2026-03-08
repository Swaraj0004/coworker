function AddSpace() {
  return (
    <div>
      <h1>Add Coworking Space</h1>

      <form style={{ maxWidth: "500px" }}>
        <label>
          Space Name
          <input type="text" placeholder="Enter space name" />
        </label>

        <br /><br />

        <label>
          Price per Month
          <input type="number" placeholder="₹ Price" />
        </label>

        <br /><br />

        <label>
          Available Seats
          <input type="number" placeholder="Seats available" />
        </label>

        <br /><br />

        <label>
          Location (Latitude)
          <input type="number" placeholder="Latitude" />
        </label>

        <br /><br />

        <label>
          Location (Longitude)
          <input type="number" placeholder="Longitude" />
        </label>

        <br /><br />

        <button type="submit">Add Space</button>
      </form>
    </div>
  );
}

export default AddSpace;
