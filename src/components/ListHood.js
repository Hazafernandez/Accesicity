export const ListHood = ({ issues }) => {
  return (
    <menu>
      {issues.map((data) => {
        return <li>{data.hood}</li>;
      })}
    </menu>
  );
};
