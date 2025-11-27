import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const easeOutCubic = "cubic-bezier(.215, .61, .355, 1)";

const slideOutLeft = keyframes`
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translateY(100px) rotate(-23deg);
    opacity: 0;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translateY(100px) rotate(23deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarCard = styled.div`
  width: 66px;
  height: 72px;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 0 0 rgba(0, 0, 0, 0.1);
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 22px;
  background-color: #ea6d33;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 100px;
`;

const Body = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const DateNumber = styled.p`
  font-family: "Geist", sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: black;
  font-weight: 600;
  margin: 0;
`;

const MonthLabel = styled.p`
  font-family: "Geist", sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #9ca3af;
  margin: 0;
`;

const AnimatedCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 66px;
  height: 72px;
  will-change: transform, opacity;
  animation: ${slideOutRight} 0.75s ${easeOutCubic} 1.5s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

const AnimatedCardZ10 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 66px;
  height: 72px;
  will-change: transform, opacity;
  animation: ${slideOutLeft} 0.75s ${easeOutCubic} 1s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

export const Maple = () => {
  const Showcase = () => {
    return (
      <Container>
        <CalendarCard>
          <CardInner>
            <Header>
              <Dot />
              <Dot />
            </Header>
            <Body>
              <DateNumber>18</DateNumber>
              <MonthLabel>JAN</MonthLabel>
            </Body>
          </CardInner>
          <AnimatedCardZ10>
            <CardInner>
              <Header>
                <Dot />
                <Dot />
              </Header>
              <Body>
                <DateNumber>16</DateNumber>
                <MonthLabel>JAN</MonthLabel>
              </Body>
            </CardInner>
          </AnimatedCardZ10>
          <AnimatedCard>
            <CardInner>
              <Header>
                <Dot />
                <Dot />
              </Header>
              <Body>
                <DateNumber>17</DateNumber>
                <MonthLabel>JAN</MonthLabel>
              </Body>
            </CardInner>
          </AnimatedCard>
        </CalendarCard>
      </Container>
    );
  };

  return <Showcase />;
};
