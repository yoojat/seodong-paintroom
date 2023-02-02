import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useState } from 'react';
import useScroll from '../hooks/useScroll';
import Divider from '../components/Divider';

const ContentContainer = styled.div`
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentItem = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  max-width: 1280px;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  height: 100px;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: right;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  width: 80%;
  min-width: 600px;
  @media screen and (max-width: 992px) {
    width: 100%;
    min-width: inherit;
  }
  max-width: 1100px;
  margin-bottom: 30px;
`;

const PhotoItem = styled.div<{ photoUrl: string; innerWidth: number }>`
  background-image: url(${(props) => props.photoUrl});
  width: 30%;
  height: 240px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: ${(props) => (props.innerWidth * 6) / 10}px;
  }
  background-size: cover;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 992px) {
    cursor: inherit;
    &:hover {
      opacity: inherit;
    }
  }
`;
const TextContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;

const TextContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
`;

// 992px

const images = [
  '/yoohee/1.jpeg',
  '/yoohee/3.jpeg',
  '/yoohee/2.jpeg',
  '/yoohee/6.jpeg',
  '/yoohee/5.jpeg',
  '/yoohee/7.jpeg',
  '/yoohee/8.jpeg',
  '/yoohee/9.jpeg',
  '/yoohee/11.jpeg',
];

const Yoohee = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoPopUp, setIsPhotoPopUp] = useState(false);
  const { innerWidth } = useScroll();
  const TitleSrc = () => (
    <div>
      다양한 공간에서의
      <br />
      즐길거리와 분위기를 모두 경험할 수 있는 공간
    </div>
  );

  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/yoohee/10.jpeg'
      seoTitle='즐길거리'
    >
      <ContentContainer>
        <Space />
        <Divider />
        <ContentItem>공간도 이미지</ContentItem>
        <Divider />
        <Space />
        <ContentItem>
          <PhotoSection>
            <PhotoContainer>
              {images.map((image, index) => (
                <PhotoItem
                  key={index}
                  photoUrl={image}
                  innerWidth={innerWidth}
                  onClick={() => {
                    if (innerWidth > 992) {
                      setIsPhotoPopUp(true);
                      setPhotoIndex(index);
                    }
                  }}
                />
              ))}
            </PhotoContainer>
          </PhotoSection>
        </ContentItem>

        <TextContainer>
          <TextContentCol>
            <TextContentRow>
              <p>
                서동여관 그림의방은 가벼운 낙서, 색칠하기, 그림 그리기 등을
                통해, 쉼을 즐길 수 있는 공간입니다.
              </p>
              <p>우리들은 디지털 기기과 유혹거리에 익숙해져 있으며,</p>
              <p>온전한 쉼과 휴식을 잊은지 오래입니다. </p>
              <p>손가락이 아프거나 마음먹은대로 그려지지 않을수도 있지만,</p>
              <p>
                아무 생각없이 색을 칠하고 그려나가면서 마음을 정화시켜 보는건
                어떨까요?
              </p>
            </TextContentRow>
            <TextContentRow>
              <p>공유주방 서동부엌을 이용하실 수도 있습니다.</p>
              <p>
                단, 다른 분들과 이용시간이 겹치지 않기 위해, 미리 시간을
                조율해야 합니다.
              </p>
              <p>
                공유주방 서동부엌에서 맛있는 음식을 직접 만들어 드시는 것도,
              </p>
              <div>하나의 추억거리가 되실꺼에요.</div>
              <p>
                조리도구와 베이킹 도구, 냉장고가 비치되어 있어서, 편하게 조리해
                드릴 수 있습니다.
              </p>
            </TextContentRow>
            <TextContentRow>
              <p>프라이빗 오티티룸 서동영화를 이용하실 수도 있습니다.</p>
              <p>
                단, 다른 분들과 이용시간이 겹치지 않기 위해, 미리 시간을
                조율해야 합니다.
              </p>
              <p>
                서동영화는 제가 좋아하는 왕가위 감독의 영화들도 공간을
                꾸며보았습니다.
              </p>
              <p>여행을 통해, 지친 하루를 한편의 영화로 달래보는건 어떨까요?</p>
            </TextContentRow>
          </TextContentCol>
        </TextContainer>
        <TextContainer></TextContainer>
      </ContentContainer>
      {isPhotoPopUp && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsPhotoPopUp(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </DefaultContentLayout>
  );
};

export default Yoohee;
