import axios from "axios";
import { useState } from "react";

function Cards() {
  const [profile, setProfile] = useState([
    {
      fullName: "Erling Haland",
      jerseyNumber: 9,
      Nationality: "Norwegian",
      id: 1,
      image:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699003104/t_500x300_ybsmok.jpg",
      club: "Manchester city",
    },
    {
      fullName: "Cristiano Ronaldo",
      jerseyNumber: 7,
      Nationality: "Portugal",
      id: 1,
      image:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699003181/t_500x300_fg8eis.jpg",
      club: "Al-Nasar",
    },
    {
      fullName: "Leo Messi",
      jerseyNumber: 10,
      Nationality: "Argentina",
      id: 1,
      image:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699003448/t_500x300_dgg21o.jpg",
      club: "Inter Miami",
    },
    {
      fullName: "Mykhailo Mudryk",
      jerseyNumber: 15,
      Nationality: "Ukrainian",
      id: 1,
      image:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699003376/t_500x300_qztccm.jpg",
      club: "Chelsea",
    },
  ]);
  return (
    <div className="flex flex-row space-x-2 text-center gap-3 pt-10 justify-center">
      {profile.map((profile) => (
        <div className="border-2 border-green-700">
            <img className="w-fit " src={profile.image} alt="" />
          <h2>{profile.fullName}</h2>
          <p>{profile.club}</p>
          <p>{profile.Nationality}</p>
          <p>{profile.jerseyNumber}</p>

        </div>
      ))}
    </div>
  );
}

export default Cards;
