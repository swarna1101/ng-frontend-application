import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Product } from "./index";
// import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
import { TbSword } from "react-icons/tb";
import Link from "next/link";

const Card = styled.div`
  background: #1d1c1a;
  border: 1px solid rgba(58, 58, 58, 0.5);
  border-radius: 10px;
  color: white;
  max-width: 755px;
  padding: 4px;
`;

const TopImg = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 8px 8px 0px 0px;
  
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: -10px;
`;

const TitleArrow = styled.img`
  width: 159px;
  height: 10px;
  @media screen and (max-width: 494px) {
    width: 130px;
  }
  @media screen and (max-width: 436px) {
    width: 120px;
  }
  @media screen and (max-width: 436px) {
    width: 100px;
    height: 8px;
  }
`;

const TitleText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin: 7px 0px 5px 0px;
  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
  @media screen and (max-width: 415px) {
    font-size: 14px;
  }
`;

const CardContent = styled.div`
  padding: 0px 15px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    @media screen and (max-width: 540px) {
      font-size: 13px;
    }
  }
`;

const TitleText2 = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #bea77e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
`;
const TitleText3 = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #bea77e;
  margin-right: 25px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
`;
const Top1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Top2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
`;

const Desc = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #8e8e8e;
  margin-top: 14px;
  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
`;

const Bottom = styled.div`
  p {
    margin-top: 40px;
    margin-bottom: 6.91px;
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    @media screen and (max-width: 540px) {
      font-size: 13px;
    }
  }
`;

const BottomCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const BottomImg = styled.img`
  @media screen and (max-width: 540px) {
    width: 55.1px;
    height: 55.1px;
  }
`;

const Btn = styled.div``;

const GoBackButton = styled.button`
  border: 0.6px solid #bea77e;
  border-radius: 2.5px;
  padding: 9.31px 20px;
  background-color: transparent;
  color: white;
  @media screen and (max-width: 540px) {
    padding: 8px 15px;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

interface Props {
  product: Product;
}

const Product: NextPage<Props> = ({ product }) => {
  console.log(product);
  return (
    <Container>
      <Card>
        <TopImg src={product.images[0]} alt="" />
        <Title>
          <TitleArrow src="/lArrow.png" alt="" />
          <TitleText>Delegate call detection</TitleText>
          <TitleArrow src="/RArrow.png" alt="" />
        </Title>
        <CardContent>
          <Top>
            <Top1>
              <Left>
                <TitleText2>Skill tree</TitleText2>
                <p>{product.category}</p>
              </Left>
              <Right>
                <TitleText2>Difficulty</TitleText2>
                <p>
                  {[...Array(5)].map((_, i) => (
                    <>
                      {i > 0 ? (
                        <TbSword
                          style={{
                            color: "#BEA77E",
                            fill: "#BEA77E",
                            transform: "scaleX(-1)",
                          }}
                        />
                      ) : (
                        <TbSword
                          style={{
                            color: "#BEA77E",
                            transform: "scaleX(-1)",
                          }}
                        />
                      )}
                    </>
                  ))}
                </p>
              </Right>
            </Top1>
            <Top2>
              <Left>
                <TitleText3>Skill</TitleText3>
                <p>{product.brand}</p>
              </Left>
              <Right>
                <TitleText2>Quest type</TitleText2>
                <p>{product.title}</p>
              </Right>
            </Top2>
          </Top>
          <Desc>
            <p>{product.description}</p>
          </Desc>
          <Bottom>
            <p>QUEST REWARDS</p>
            <BottomCont>
              <BottomImg src="/bottom.png" alt="" />
              <Link href={"/"}>
                <Btn>
                  <GoBackButton>GO BACK</GoBackButton>
                </Btn>
              </Link>
            </BottomCont>
          </Bottom>
        </CardContent>
      </Card>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  const products: Product[] = data.products;

  // Map the product IDs to an array of paths
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.id) {
    return { notFound: true };
  }
  const { data } = await axios.get(
    `https://dummyjson.com/products/${params.id}`
  );
  const product: Product = data;

  return { props: { product } };
};

export default Product;
