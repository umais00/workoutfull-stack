import React, { useEffect, useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts");
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        setWorkouts(json);
      } catch (error) {
        console.error("Error fetching workouts:", error.message);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="text-5xl font-bold">
      <div>
        {workouts.map((workout) => (
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  );
}
