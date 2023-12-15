import "@/styles/bamboo/posts.scss";
import Link from "next/link";

export default function BambooPost(props) {
  return (
    <div className="post-container">
      <div className="post-header"></div>
      <p className="post-title">대나무숲</p>
      <div className="user-detail">
        <p>익명</p>
        <p> 3개월 전</p>
      </div>
      <div className="post-detail-container">
        <p className="post-detail">
          {props.params.id}
          <br /> - <br />
          안녕하세요. DPUS 관리자입니다. <br /> 제보해 주실 때에는 익명 여부와
          함께 기재 부탁드립니다.
          <br />
          익명 여부에 대한 언급이 없을 시, 자동으로 익명으로 간주한 뒤
          업로드됩니다.
          <br /> 제보해 주신 DM은 1~2일 이내에 올라갑니다.
          <br /> DM 내역은 제보일로부터 정확히 일주일 뒤에 삭제 처리해 드립니다.
          <br />
          특정 인물을 비방하는 제보는 받지 않고 있습니다.
          <br /> 게시글은 당사자가 삭제를 요청하면 바로 삭제해 드립니다.
          <br /> 디엠이 누락되었을 시 한 번 더 채팅 남겨주시면 감사드리겠습니다.
          제보는 전부 몰아서 업로드하고 있습니다.
          <br /> 최대 이틀 이내 업로드해 드립니다. 많은 이용 부탁드립니다. :)
        </p>
      </div>
      <div className="divider"></div>
      <div className="comments-container">
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
}

function Comments() {
  return (
    <div className="comment">
      <div className="comment-detail">
        <p>익명 - 1시간 전</p>
        <p>그냥 죽으십쇼!</p>
      </div>
      <div className="comment-likes">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <p>0</p>
      </div>
    </div>
  );
}
