export function getServerSideProps(context) {
  console.log("context", context);
  return {
    props: {
      foo: "bar",
    },
  };
}

export default function Publication(props) {
  console.log("props: ", props);
  return (
    <div>
      <h1>I'm a publication</h1>
    </div>
  );
}
