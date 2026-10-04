import { useEffect } from "react";

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-logo">🎫</div>
      <h1>The Event Alchemist</h1>
      <p>Manage and join events easily</p>
    </div>
  );
}

export default SplashScreen;
