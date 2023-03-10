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
      ????????? ???????????????
      <br />
      ??????????????? ???????????? ?????? ????????? ??? ?????? ??????
    </div>
  );

  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/yoohee/10.jpeg'
      seoTitle='????????????'
    >
      <ContentContainer>
        <Space />
        <Divider />
        <ContentItem>????????? ?????????</ContentItem>
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
                ???????????? ????????? ?????? ????????? ??????, ????????????, ?????? ????????? ??????
                ??????, ?????? ?????? ??? ?????? ???????????????.
              </p>
              <p>???????????? ????????? ????????? ??????????????? ???????????? ?????????,</p>
              <p>????????? ?????? ????????? ????????? ???????????????. </p>
              <p>???????????? ???????????? ?????????????????? ???????????? ???????????? ?????????,</p>
              <p>
                ?????? ???????????? ?????? ????????? ?????????????????? ????????? ???????????? ?????????
                ?????????????
              </p>
            </TextContentRow>
            <TextContentRow>
              <p>???????????? ??????????????? ???????????? ?????? ????????????.</p>
              <p>
                ???, ?????? ????????? ??????????????? ????????? ?????? ??????, ?????? ?????????
                ???????????? ?????????.
              </p>
              <p>
                ???????????? ?????????????????? ????????? ????????? ?????? ????????? ????????? ??????,
              </p>
              <div>????????? ??????????????? ???????????????.</div>
              <p>
                ??????????????? ????????? ??????, ???????????? ???????????? ?????????, ????????? ?????????
                ?????? ??? ????????????.
              </p>
            </TextContentRow>
            <TextContentRow>
              <p>???????????? ???????????? ??????????????? ???????????? ?????? ????????????.</p>
              <p>
                ???, ?????? ????????? ??????????????? ????????? ?????? ??????, ?????? ?????????
                ???????????? ?????????.
              </p>
              <p>
                ??????????????? ?????? ???????????? ????????? ????????? ???????????? ?????????
                ?????????????????????.
              </p>
              <p>????????? ??????, ?????? ????????? ????????? ????????? ??????????????? ?????????????</p>
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
