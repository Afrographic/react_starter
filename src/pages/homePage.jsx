import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();

  function go_to_homePage(){
    navigate("/dashboard/profile");
  }
  return (
    <div>
      <div>This is a homepage</div>
      <button onClick={()=>go_to_homePage()}>Go to profile page</button>
    </div>
  );
}
