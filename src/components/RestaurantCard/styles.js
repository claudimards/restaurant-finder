import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 7px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;