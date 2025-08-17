import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Feedback, VisitType, RatingScale } from "../domain/types";
import { repo } from "../data/LocalStorageRepository";

interface Props {
  onSubmit: (fb: Feedback) => void;
}

export default function FeedbackForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visitType, setVisitType] = useState<VisitType>(VisitType.DineIn);
  const [food, setFood] = useState<RatingScale>(RatingScale.Three);
  const [service, setService] = useState<RatingScale>(RatingScale.Three);
  const [ambience, setAmbience] = useState<RatingScale>(RatingScale.Three);
  const [comments, setComments] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("Name is required");
      return;
    }

    const fb: Feedback = {
      id: uuid(),
      submittedAt: new Date().toISOString(),
      customer: { name, email },
      visitType,
      ratings: { food, service, ambience },
      comments,
    };

    await repo.save(fb);
    onSubmit(fb);

    // reset form
    setName("");
    setEmail("");
    setVisitType(VisitType.DineIn);
    setFood(RatingScale.Three);
    setService(RatingScale.Three);
    setAmbience(RatingScale.Three);
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Feedback</h2>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <br></br>

      <label>Email (optional):</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <br></br>

      <label>Visit Type:</label>
      <select
        value={visitType}
        onChange={(e) => setVisitType(e.target.value as VisitType)}
      >
        <option value={VisitType.DineIn}>Dine In</option>
        <option value={VisitType.TakeAway}>Take Away</option>
        <option value={VisitType.Delivery}>Delivery</option>
      </select>
    <br></br>
      <label>Food Rating (1-5):</label>
      <input
        type="number"
        min={1}
        max={5}
        value={food}
        onChange={(e) => setFood(Number(e.target.value) as RatingScale)}
      />
       <br></br>
       
      <label>Service Rating (1-5):</label>
      <input
        type="number"
        min={1}
        max={5}
        value={service}
        onChange={(e) => setService(Number(e.target.value) as RatingScale)}
      />
       <br></br>
      <label>Ambience Rating (1-5):</label>
      <input
        type="number"
        min={1}
        max={5}
        value={ambience}
        onChange={(e) => setAmbience(Number(e.target.value) as RatingScale)}
      />
         <br></br>
      <label>Comments:</label>
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
