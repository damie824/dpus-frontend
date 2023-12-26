"use client";

import { useEffect, useState } from "react";
import { DpusReq } from "@/util/dpus-apis";
import Link from "next/link";
import Head from "next/head";

// 대나무숲 페이지 컴포넌트
export default function BambooMain() {
  // 상태 변수 선언
  const [bambooData, setBambooData] = useState([]); // 대나무숲 데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [pageCounts, setPageCounts] = useState(0); // 페이지 수
  const [isLoggedIn, setLogin] = useState(false); // 로그인 상태
  const [loginData, setLoginData] = useState({}); // 로그인 데이터
  const dpusReq = new DpusReq(); // DpusReq 인스턴스 생성

  // 컴포넌트 마운트 시 실행
  useEffect(() => {
    // 대나무숲 데이터 및 로그인 상태 준비 함수
    async function prepare() {
      try {
        console.log("Loading bamboos..");
        const response = await dpusReq.get("/bamboo/get/0");
        console.log(response.data);
        setBambooData(response.data);
        setPageCounts(response.data.length);

        const isLogin = await dpusReq.isLogin();
        if (isLogin.isLoggined) {
          setLogin(true);
          setLoginData(isLogin.userData);
        }
      } catch (error) {}
    }

    prepare();
  }, []);

  // 더 많은 대나무숲 데이터 로드 함수
  async function loadMoreBamboos() {
    try {
      console.log("Loading bamboos..");
      const response = await dpusReq.get(`/bamboo/get/${currentPage}`);
      console.log(response.data);
      setBambooData([...bambooData, ...response.data]);
      setCurrentPage(currentPage + 1);
      setPageCounts(response.data.length);
    } catch (error) {}
  }

  // 대나무숲 페이지 렌더링
  return (
    <>
      <Head>
        <title>대나무숲 - DPUS</title>
        <meta
          name="description"
          content="익명으로 말하고 싶으신 사연이 있으신가요? 제가 대신 말해드릴게요!"
        />
        <meta property="og:title" content="대나무숲" />
        <meta property="og:description" content="대나무숲 페이지입니다." />
      </Head>
      <div>
        <h1 className="page-title">🎍 대나무숲</h1>
        <p className="page-subtitle">
          익명으로 말하고 싶으신 사연이 있으신가요? 제가 대신 말해드릴게요!
        </p>
        <div className="bamboo-container">
          <div className="bamboo-posts-container">
            {bambooData.map((bamboo, i) => {
              return (
                <CurrentBamboo
                  id={bamboo.id}
                  title={bamboo.title}
                  timeAgo={bamboo.timeAgo}
                  viewd={bamboo.viewd}
                  key={i}
                />
              );
            })}
            {pageCounts === 8 ? (
              <button className="load-more" onClick={loadMoreBamboos}>
                게시글 더 불러오기
              </button>
            ) : (
              <p className="no-more">더 이상 불러올 글이 없어요!</p>
            )}
          </div>
          <div className="user-info">
            {isLoggedIn ? (
              <UserInfo
                profile={loginData.profile}
                username={loginData.username}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// 현재 대나무숲 게시글 컴포넌트
function CurrentBamboo(props) {
  return (
    <Link className="bamboo-current-container" href={"/bamboo/" + props.id}>
      <div className="bamboo-body">
        <div className="bamboo-title">
          <h2>{props.title}</h2>
          <p>{props.viewd}회 조회됨</p>
        </div>
        <p className="bamboo-time">{props.timeAgo}</p>
      </div>
    </Link>
  );
}

// 사용자 정보 컴포넌트
function UserInfo(props) {
  return (
    <div className="page-avatar">
      <img src={props.profile} />
      <p>다음 계정으로 로그인됨:</p>
      <h2>{props.username}</h2>
      <Link className="page-avatar-btn" href={"/bamboo/new"}>
        글쓰기
      </Link>
    </div>
  );
}
