export default function VolunteerDetails({ volunteer }) {
  return (
    <div className="volunteer-details m-4">

      <h4 className="font-bold text-slate-900">{volunteer.name} </h4>
      <p>{volunteer.phone}</p>
    </div>
  );
}
