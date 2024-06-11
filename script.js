// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste JavaScript !";
// const root = document.getElementById("root");
// root.appendChild(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ])
]);

root.render(parent);