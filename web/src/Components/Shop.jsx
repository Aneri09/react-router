import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Box, Card, CardBody, Heading, SimpleGrid, Stack, Image,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Shop() {

  let [data, setData] = useState([])

  useEffect(() => {
    gets();
  }, []);


  let gets = async () => {
    let res = await fetch('https://fakestoreapi.com/products')
    let req = await res.json();
    console.log(req);
    setData(req);
  };

  return (
    <div>
      <Nav />

      <SimpleGrid minChildWidth='250px' spacing='40px'>
        {data.map((e) => {
          return (
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src={e.image}
                  borderRadius='lg'
                  width={"70%"}
                  margin={"auto"}
                  />
                  <Link to={`products-details/${e.id}`}></Link>
                <Stack mt='6' spacing='3'>
                  <Heading size='sm'>{e.title}</Heading>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>

    </div>
  )
}

export default Shop