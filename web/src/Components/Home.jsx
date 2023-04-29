import React from "react";
import Nav from "./Nav";
import SimpleImageSlider from "react-simple-image-slider";
import { Grid, GridItem, SimpleGrid, Box} from '@chakra-ui/react'
import {SiAskfm} from 'react-icons/si'

function Home() {
  return (
    <div>
      <Nav />

        <div className="first">
          <Box backgroundImage={'https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_1800x.png?v=1646626071'} padding={"20%"}>
                <h1>Proper business Solution</h1>
                <h2>Powered,Secured & Mobile</h2>
                <button>Shop Now</button>
          </Box>
        </div>

      <div className="ss">

        <h2>Trusted by the Best in Business</h2>

        <Grid templateColumns='repeat(6, 1fr)' gap={6} padding={"20px"}>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/Hardware-Partner-Logos-230427_0004_McDonalds.png?v=1682571681" alt="" />
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/Hardware-Partner-Logos-230427_0005_Aesop.png?v=1682571753" alt="" />
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/Hardware-Partner-Logos-230427_0002_JD.png?v=1682571681" alt="" />
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/Hardware-Partner-Logos-230427_0005_Estee-Lauder.png?v=1682571753" alt="" />
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/Hardware-Partner-Logos-230427_0003_Apple.png?v=1682571681iles/Hardware-Partner-Logos-230427_0002_JD.png?v=1682571681" alt="" />
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/Hardware-Partner-Logos-230427_0004_Theory.png?v=1682571753" alt="" />
          </GridItem>
        </Grid>
      </div>

      <div className="sis">
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <Box backgroundImage="https://cdn.shopify.com/s/files/1/0183/5769/files/132461182_3653645724695062_8793602497432677442_n_750x960_crop_center.jpg?v=1640144663"
            backgroundSize={"100%"}
            backgroundPosition="center"
            padding={"30%"}/>
            <Box backgroundImage="https://cdn.shopify.com/s/files/1/0183/5769/files/235597810_114130127533554_4684466659600664356_n_750x860_crop_center.jpg?v=1662359875"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            padding={"30%"}/>

        </Grid>
      </div>

      <div className="ts">
        <h2>Featured Solutions</h2>

        <Grid templateColumns='repeat(4, 1fr)' gap={6} padding={"20px"}>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/products/Powered_0002_200710-POWERED-RANGE-IMAGE-TEST.587_1000x.png?v=1626828092" alt="" />
            <h5>Powered iPad 10.2" Swivel Stand</h5>
            <h6>$340</h6>
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/products/Powered_0001_200710-POWERED-RANGE-IMAGE-TEST.586_1000x.png?v=1626829518" alt="" />
            <h5>Powered iPad 10.2" Stand</h5>
            <h6>$250</h6>
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/products/Powered_0000_200710-POWERED-RANGE-IMAGE-TEST.585_1000x.png?v=1626829601" alt="" />
            <h5>Powered iPad 10.2" Wall Mount</h5>
            <h6>$210</h6>
          </GridItem>
          <GridItem padding={"20px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/products/Proper-business-web-images-2020---6_0013_DTS-210219-Wr1.167_1000x.png?v=1661473812" alt="" />
            <h5>Universal Dual Stand</h5>
            <h6>$299</h6>
          </GridItem>
        </Grid>
        <button>View All Products</button>
      </div>


      <div className="fs">
        <Grid templateColumns='repeat(4, 1fr)'>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/329303036_986601209180528_4179166917244176512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Ekd8fxWbnNAAX9B2aiY&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCoCXEaNuGp0hIu_d6aI901-O0QW3NvYGED4BWv-TDmMg&oe=64502F06" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/330231567_214015721226546_4392592188771875863_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=AaoOzUnDQV0AX-z5B3a&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDdnaYoq2xWHPPHqsh9k9t1Y4bY95slF57GVkwUWyzIcw&oe=6450BF93" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/336053876_6608060072556579_1215464523795701740_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=0kOFXvWoFSEAX82n14E&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDfuHY9U5givOjGP6C4mnki4HEG3p0OhUfFqUw1pn4UWA&oe=645049AD" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/332991656_539448074839993_1139301638337885962_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=XvfPUo9PLOEAX_4jZDp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAapI0rbchIQd0mz6xQgicGOg5iIHhSTif6cYaE6h7dIg&oe=64515A43" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/332265542_913335196376097_8205137779715720345_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ft1UMpVKEc0AX8kt3Td&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBcbMRIQTzYpIKYhmN2SMvo7CoPAtrhmEmDHKxxhtYeJQ&oe=64514E14" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/329806514_723201215882537_7297233166012620591_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VJNZTaEAILoAX8YSUF0&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBxjsW6B6qVeSQd_iimLB8ap8S0_MVdSh4fzfMamcAIpw&oe=64505706" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/329322218_138840582119493_8925740844137769306_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4JWL6Jq5DscAX98ATDJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDkf3WrdyMv0O75RcwP_hA3NwPZb2aP5MUsk99VPAgONQ&oe=644FA86F" alt="" />
          </GridItem>
          <GridItem>
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/328426822_717098323187546_5044066655319723833_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=RLXwKhxWidwAX9TYXoG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCojdQrYovOJhJvkJNq2X1TG43Sj1OwFb3-_2FMrk5AGA&oe=64508EA0" alt="" />
          </GridItem>
        </Grid>
      </div>



      <div className="fis">
        <Grid templateColumns='repeat(4, 1fr)' gap={6} padding={"30px"}>
          <GridItem padding={"50px "}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/designed_in_australia_7bd78a00-3307-43b5-a902-042bb34212eb.png?v=1662683885" alt="" />
          </GridItem>
          <GridItem padding={"50px "}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/12_month_warranty_web.png?v=1662421213" alt="" />
          </GridItem>
          <GridItem padding={"50px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/apple_authorised_reseller.png?v=1662421212" alt="" />
          </GridItem>
          <GridItem padding={"50px"}>
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/secure_checkout.png?v=1662421213" alt="" />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
