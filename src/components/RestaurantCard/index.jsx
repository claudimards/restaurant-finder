import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} edit={false} value={4} isHalf activeColor="#e7711c" />
      <Address>Endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
  </Restaurant>
);

export default RestaurantCard;
