import "@/styles/bamboo/main.scss";

export default function Bamboo() {
  return (
    <div className="bamboo-container">
      <h1>🎍 대나무숲</h1>
      <div className="bamboo-contents-container">
        <div className="posts"> </div>
        <div className="user-info">
          <div className="user-contents-avatar"></div>
          <h3>규보</h3>
        </div>
      </div>
    </div>
  );
}
