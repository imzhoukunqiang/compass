
import LikeButton from "./like-button";

interface HeaderProps {
  title?: string;
}
function Header({ title }: HeaderProps) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />

      <hr />
    </div>
  );
}

export default HomePage;
