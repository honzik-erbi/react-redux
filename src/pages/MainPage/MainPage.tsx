import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to={"/navbar"}><p>Vstoupit do systému</p></Link>
    </>
  );
}
