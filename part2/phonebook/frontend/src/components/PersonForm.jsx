export default function PersonForm({
  addRecord,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) {
  return (
    <form onSubmit={addRecord}>
      <table>
        <tbody>
          <tr>
            <td> name:</td>
            <td>
              <input
                required={true}
                value={newName}
                onChange={handleNameChange}
              />
            </td>
          </tr>
          <tr>
            <td>number:</td>
            <td>
              <input
                required={true}
                value={newNumber}
                onChange={handleNumberChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
