import React, { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white">
  <img
    src="https://i.pinimg.com/originals/8a/4a/72/8a4a7213b43f4ec4f99db406be655f9e.gif"
    alt="Loading"
    className="w-40 mb-6"
  />
  <p className="text-lg font-semibold text-gray-700 animate-pulse">
    Chargement du Pokédex...
  </p>
</div>
    );
  }
};

export default Loading;
