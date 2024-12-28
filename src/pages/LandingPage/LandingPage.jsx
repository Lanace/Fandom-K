import React from "react";
import "../../styles/color.scss";
import "../../styles/font.scss";
import styles from "./LandingPageStyles.module.scss";
import Section from "../../components/LandingPage/Sections.jsx";
import images from "../../components/LandingPage/LandingPageImages.jsx";
import CustomButton from "../../components/CustomButtom/CustomButton.jsx";
import { useNavigate } from "react-router-dom";
import EdgeGradient from "../../components/LandingPage/EdgeGradient.jsx";
import { motion } from "framer-motion";

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    localStorage.clear(); // localStorage 초기화
    navigate("/list"); // 원하는 페이지로 이동
  };

  return (
    <EdgeGradient>
      <div>
        <div className={styles["gradient-bar"]}></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
        >
          <div className={styles.page1}>
            <div className={styles.background}>
              <div className={styles.page1}>
                <div className={styles.title}>
                  <h1>
                    내가 좋아하는 아이돌을 <br />
                    가장
                    <span className={styles["brand-orange"]}>
                      {" "}
                      쉽게 덕질
                    </span>{" "}
                    하는 방법
                  </h1>
                </div>
                <div className={styles["image-container"]}>
                  <img
                    className={styles.backgroundimg}
                    src={images.bgimg1}
                    alt="bgimg1"
                  ></img>
                </div>
                <div className={styles.buttondiv}>
                  <CustomButton
                    onClick={handleButtonClick}
                    className={styles.button}
                  >
                    지금 시작하기
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles["gradient-bar"]}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          style={{
            zIndex: 0,
          }}
        >
          {/*<div className={styles["gradient-bar"]}></div>*/}
        </motion.div>
        <div className={styles.page2}>
          <Section
            donate="후원하기"
            title={
              <>
                좋아하는 아이돌에게 <br /> 쉽게 조공해 보세요
              </>
            }
            bgimg={images.bgimg2}
            screenimg={images.screen1}
          />
        </div>

        <div className={styles.page3}>
          <Section
            donate="이달의 아티스트"
            title={
              <>
                내 아티스트에게 1등의 <br /> 영예를 선물하세요
              </>
            }
            bgimg={images.bgimg3}
            screenimg={images.screen2}
          />
        </div>

        <div className={styles.page4}>
          <Section
            donate="나만의 아티스트"
            title={
              <>
                좋아하는 아티스트들의 <br /> 소식을 모아보세요
              </>
            }
            bgimg={images.bgimg4}
            screenimg={images.screen3}
          />
        </div>
      </div>
    </EdgeGradient>
  );
}

export default LandingPage;
