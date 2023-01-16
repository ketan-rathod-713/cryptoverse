import React, {useEffect, useState} from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import {Card , Row, Col, Input, Avatar, Image} from 'antd'

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptoList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("")

  console.log(cryptos)

  useEffect(()=>{
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData)

  }, [cryptoList, searchTerm])
  // This function will be rendered each time this two values will change 

  if(isFetching) return 'Loading..'
  return <>

  { !simplified && 
  <div className="search-crypto">
    <Input placeholder="Search Cryptocurrency" onChange={(e)=> setSearchTerm(e.target.value)}></Input>
  </div>
  }
    <Row gutter={[32, 32]} className="crypto-card-container">
      { cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card hoverable extra={   <Avatar
      src={
        <Image
          src={currency.iconUrl}
          style={{
            width: 32,
          }}
        />
      }
    />} title={`${currency.rank}. ${currency.name}`}>
              <p> Price : {millify(currency.price)}</p>
              <p> Market Cap : {millify(currency.marketCap)}</p>
              <p> Daily Change : {millify(currency.change)}%</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </>;
};

export default Cryptocurrencies;
