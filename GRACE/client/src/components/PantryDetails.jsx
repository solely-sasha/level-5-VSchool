export default function PantryDetails({ pantry }) {
  return (
    <div className="pantry-details m-4">
      <h4 className="font-bold text-slate-900">{pantry.name} </h4>
      <span className="font-bold">Location: </span>
      <span>{pantry.street}</span>, <span>{pantry.location}, </span>
      <span>{pantry.zipcode}</span>
      <p className="font-bold">Schedule:</p>
      <span>{pantry.schedule}</span>
    </div>
  );
}
