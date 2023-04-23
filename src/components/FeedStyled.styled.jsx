import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 800px;
  background-color: #f5f4fa;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 800px;
  background-color: #f5f4fa;
  margin-left: auto;
  margin-right: auto;
`;

export const FeedbackList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 30px;
`;

export const FeedbackButton = styled.button`
  background-color: #2196f3;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  display: block;
  min-width: 200px;
  padding: 10px 32px;
  max-height: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 300ms;
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StatisticItem = styled.span`
  margin-bottom: 10px;
`;
