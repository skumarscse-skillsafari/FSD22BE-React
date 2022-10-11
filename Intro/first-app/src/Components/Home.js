import HomeTwo from "./HomeTwo";

function Home() {
  return (
    <div className="Home">
      <h1>This is Home component</h1>
      <p>Rules for defining components</p>
      <ul>
        <li>
          Name of all the components and function name must starts with
          uppercase
        </li>
        <li>
          For multi-word components: Each words must starts with uppercase. Ex:
          HomeComponent
        </li>
        <li>JSX : Combination of JavaScript and HTML</li>
        <li>
          All the elements of the componets must be wrapped with anyone
          container element
        </li>
        <li>
          All the components must be denoted as self-closing HTML elements.
        </li>
      </ul>
      <HomeTwo />
    </div>
  );
}

export default Home;
