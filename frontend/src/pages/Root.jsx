import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice.js";

export default function Root() {
//   const dispatch = useDispatch();
//   const [userInfo, setUserInfo] = useState({});

//   useEffect(() => {
//     //state는 기존 값
//     const token = window.localStorage.getItem("token");

//     if (!token) return;

//     try {
//       const res = axios.get("http://i8c110.p.ssafy.io/api/me", {
//         headers: {
//           Authorization: token,
//         },
//       });
//       res.then((user) => {
//         dispatch(
//           login({
//             userCode: user.data.user.userCode,
//             point: user.data.user.point,
//             kakaoNickname: user.data.user.kakaoNickname,
//             kakaoProfileImg: user.data.user.kakaoProfileImg,
//           })
//         );

//         setUserInfo(user.data.user);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }, []);

  return (
    <div>
      {/* {JSON.stringify(userInfo)} */}
      <Outlet />
    </div>
  );
}
