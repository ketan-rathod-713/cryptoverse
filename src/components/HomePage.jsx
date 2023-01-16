import React from "react";
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import Cryptocurrencies from "./Cryptocurrencies";

const {Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10); // this is the function and it is done without dispatch method using this
  console.log(data)
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...'

  return <div>
  <Title level={2} className="heading">Global Crypto Statistics</Title>
  <Card>
  <Row>
    <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats.total}/> </Col>
    <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/> </Col>
    <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/> </Col>
    <Col span={12}> <Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)}/> </Col>
    <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/> </Col>
  </Row>
  </Card>
  <div className="home-heading-container">
    <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
    <Title level={2} className="home-title">
      <Link to="/cryptocurrencies">Show More</Link>
    </Title>
  </div>
  <Cryptocurrencies simplified/>

  <div className="home-heading-container">
    <Title level={2} className="home-title">Latest Crypto News</Title>
    <Title level={2} className="home-title">
      <Link to="/news">Show More</Link>
    </Title>
  </div>
  <Cryptocurrencies simplified/>
  </div>;
};

export default HomePage;
