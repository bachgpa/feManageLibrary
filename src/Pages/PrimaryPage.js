import axios from "axios";
import { useEffect } from "react";

function PrimaryPage() {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:2000/")
      .then((res) =>
        console.log("connect Home success", res.data)
      )
      .catch((error) => {
        console.log("error:", error);
      });
  };
  return <h2>PrimaryPage</h2>;
}

export default PrimaryPage;
