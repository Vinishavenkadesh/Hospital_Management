import React from "react";

function Trail() {
  const [users, setusers] = useState([]);
//   const [displayUsers, setDisplayUsers] = useState([]);

  useEffect(() => {
    console.log("called in useEffect");
    // getDataFromGoogleSheets();
  }, []);

  async function getDataFromGoogleSheets() {
    await axios
      .get("http://localhost:3000/alldata")
      .then((val) => {
        setusers(val.data);
        displayUsersFunction(val.data);
        console.log(val.data);
      })
      .catch((err) => alert("Something went wrong"));
  }
  return <div>Trail</div>;
}

export default Trail;
