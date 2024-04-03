import { useEffect, useState } from "react";
import axios from "axios";

const useFetchUser = () => {
  const [userData, setUserData] = useState([]);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/user/all");
        setUserData(res.data.users);
        setUserLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { userData, userLoading };
};

export { useFetchUser };
