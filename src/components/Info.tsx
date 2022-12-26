import styled from "styled-components"
import CardLayout from "./CardLayout"

interface IInfoProps {
  date : string,
  time : string,
  place : string,
  hall_name : string
}

const Info = ({date, time, place,hall_name} : IInfoProps) => {
  return(
    <CardLayout>
      <StyledSection>
        <LeftSentence>
          <div>{date}</div>
          <div>{time}</div>
          <div>{place}</div>
          <div>{hall_name}</div>
        </LeftSentence>
        <div>
          <div>우리, 결혼해요</div>
          <div>어제의 너와 내가</div>
          <div>오늘의 우리가 되어</div>
          <div>서로 닮아가고 있는</div>
          <div>형기와 향정, 결혼합니다.</div>
          <br/>
          <div>서로의 사랑을 약속하는 자리에</div>
          <div>소중한 여러분들을</div>
          <div>모시고 싶습니다.</div>
        </div>
      </StyledSection>
    </CardLayout>
  )
}

const StyledSection = styled.section`
  display: flex;
`

const LeftSentence = styled.section`
font-weight: bolder;
`

export default Info