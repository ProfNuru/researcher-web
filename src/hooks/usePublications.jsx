import { useState } from "react";

const usePublications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    publications,
    loading,
  };
};

export default usePublications;
