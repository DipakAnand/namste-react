const root = document.getElementById("app");
const main = React.createElement(
  "div",
  { id: "mainHeading", class: "mainHeading" },
  React.createElement("div", { id: "parent", class: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement(
        "h1",
        { id: "topH1", className: "toph1" },
        "this is H1"
      ),
      React.createElement(
        "h2",
        { id: "topH2", className: "toph2" },
        "this is H2"
      ),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement(
        "h3",
        { id: "topH1", className: "toph1" },
        "this is H1"
      ),
      React.createElement(
        "h4",
        { id: "topH2", className: "toph2" },
        "this is H2"
      ),
    ]),
  ])
);
const rootMain = ReactDOM.createRoot(root);
rootMain.render(main);
