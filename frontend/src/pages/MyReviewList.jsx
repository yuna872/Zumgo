import React, { useEffect, useState } from "react";
import styles from "./styles/MyReviewList.module.css";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import testImg from "../assets/images/testImg.jpg";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyReviewList() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState();
  const location = useLocation();
  // const userId = location.state.userId;

  useEffect(() => {
    // 내가 쓴 리뷰 불러오는 api
    // axios.get(`http://localhost:8080/review/${userId}`)
    axios.get(`http://i8c110.p.ssafy.io/review/7`).then((res) => {
      setReviews(res.data.MyReview);
      console.log(res.data.MyReview);
    });
  }, []);

  const handleDeleteReview = (productId) => {
    // 리뷰 삭제 요청은 제품 아이디로 보내기
    axios
      // .delete(`http://localhost:8080/review/${productId}`)
      .delete(`http://i8c110.p.ssafy.io/review/${productId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.body}>
      {/* 상단 네비게이션 */}
      <div className={styles.nav}>
        <div className={styles.navleft}>
          <ChevronLeftIcon className="w-6 h-6 text-black-100" />
        </div>
      </div>
      {/* 타이틀 */}
      <div className={styles.bigtitle}>
        내가 쓴 리뷰 목록 ({reviews?.length})
      </div>
      <div className={styles.reviews}>
        {reviews?.map((review, idx) => {
          return (
            <div key={idx} className={styles.reviewbox}>
              <div className={styles.ninety}>
                <div className={styles.review}>
                  <div className={styles.top}>
                    <div className={styles.topleft}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.topright}>
                      <div className={styles.title}>{review.product.title}</div>
                      <div className={styles.price}>
                        {review.product.price}원
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <ArrowRightIcon />
                    <div className={styles.comment}>{review.review}</div>
                  </div>
                </div>
                <div className={styles.icons}>
                  <PencilIcon
                    onClick={() => {
                      navigate(`/review/${1}/update`);
                    }}
                  />
                  <TrashIcon onClick={handleDeleteReview(review.product.id)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
