import { Baby } from "../App";

function AddNameButton(props: Baby): JSX.Element {
  const buttonClass = props.baby.sex === "f" ? "girl-button" : "boy-button";

  // const [state, setState] = useState("");
  // const handleAddingToFav = () =>{
  //     setState()
  // }
  return (
    <div>
      <button className={buttonClass}>{props.baby.name}</button>
    </div>
  );
}
export default AddNameButton;
