import styled from 'styled-components';
import DefaultContentLayout from '../components/defaultContent';
import DefaultContent from '../components/defaultContent';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background-image 3s;
`;

const ImageContainer = styled.div``;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 2s;
  position: absolute;
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  top: 33vh;
  font-size: 13px;
  word-spacing: 5px;
  right: 2%;

  @media screen and (min-width: 992px) {
    right: 7%;
    top: 35vh;
    font-size: 15px;
    word-spacing: 3px;
  }

  color: white;
  letter-spacing: 4px;
  line-height: 20px;
  text-align: right;
  p {
    padding: 10px;
  }
`;

const Div = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

const Prologue = () => {
  const TitleSrc = () => (
    <Div>
      <p>
        아홉명의 가족이 함께 모여 살았습니다.
        <br />
      </p>
      <p>
        저는 할아버지, 할머니, 누나, 동생과 함께 큰방에 살았죠.
        <br />
        엄마아빠는 작은방, 고모들은 옥탑방에 살았습니다.
      </p>
      <p>
        그리고 세월이 흘러, 이 가족들은 흩어졌고,
        <br />
        더이상 이 집에는 사람들이 머물러 있지 않았습니다.
      </p>

      <p>
        다시 추억의 동네로 돌아와, <br />
        공간의 흔적과 분위기를 살려, <br />
        새롭게 공간을 재해석해 나가고 싶었습니다. <br />
      </p>
      <p>
        그리하여,
        <br />
        그림의 방이 재탄생하게 되었습니다.
        <br />
      </p>
      <p>서동여관 그림의 방에서 편안한 시간되시길 바랍니다.</p>
    </Div>
  );
  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl='/prologue/2.jpeg'
      seoTitle='프롤로그'
    ></DefaultContentLayout>
  );
};

export default Prologue;
