import { NextPage } from "next";
import axios from "axios";
import { GetStaticProps } from "next";
import { useQuery } from "react-query";
import styled from "styled-components";
import Link from "next/link";
import { ReactNode } from "react";
import { TbSword } from "react-icons/tb";

const Container = styled.div`
  width: 100vw;
  background: black;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 20px;
  }
  @media (max-width: 715px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardWrapper = styled.div`
  width: 332px;
  height: 222px;
  border: 1px solid #3a3a3a80;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #1d1c1a;
`;

const CardImage = styled.img`
  width: 320px;
  height: 106px;
  object-fit: cover;
  border-radius: 7px;
  margin: auto;
  margin-top: 6px;
`;

const CardContent = styled.div`
  margin: auto 12px;
`;

const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
  color: white;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Row = styled.tr`
  margin-bottom: 10px;
`;

const Cell1 = styled.td`
  font-size: 12px;
  color: #bea77e;
  text-decoration: none;
`;

const Cell2 = styled.td`
  font-size: 12px;
  color: white;
  text-decoration: none;
`;

export type Product = {
  description: ReactNode;
  brand: ReactNode;
  category: ReactNode;
  images: any;
  id: number;
  skillTree: string;
  skill: string;
  title: string;
  difficulty: number;
  experience: number;
  gold: number;
  type: string;
  cover: string;
};

type Props = {
  products: Product[];
};

const Products: NextPage<Props> = ({ products }) => {
  const { data: queriedQuests = [] } = useQuery("quests", async () => {
    const { data } = await axios.get("/api/quests");
    return data;
  });

  const data = queriedQuests.length > 0 ? queriedQuests : products;

  return (
    <Container>
      <CardContainer>
        {data.map(
          (dt: {
            gold: ReactNode;
            type: ReactNode;
            experience: ReactNode;
            skill: ReactNode;
            difficulty: ReactNode;
            skillTree: ReactNode;
            title: string | undefined;
            cover: string | undefined;
            id: any;
          }) => (
            // eslint-disable-next-line react/jsx-key
            <Link
              style={{ textDecoration: "none" }}
              href={`/products/${dt.id}`}
            >
              <CardWrapper key={dt.id}>
                <CardImage src={dt.cover} alt={dt.title} />
                <CardContent>
                  <CardTitle>{dt.title}</CardTitle>
                  <Table>
                    <tbody>
                      <Row>
                        <Cell1>Skill tree</Cell1>
                        <Cell2>{dt.skillTree}</Cell2>
                        <Cell1>Difficulty</Cell1>
                        <Cell2>
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
                        </Cell2>
                      </Row>
                      <Row>
                        <Cell1>Skill</Cell1>
                        <Cell2>{dt.skill}</Cell2>
                        <Cell1>Experience</Cell1>
                        <Cell2>{dt.experience}</Cell2>
                      </Row>
                      <Row>
                        <Cell1>Type</Cell1>
                        <Cell2>{dt.type}</Cell2>
                        <Cell1>GOld</Cell1>
                        <Cell2>{dt.gold}</Cell2>
                      </Row>
                    </tbody>
                  </Table>
                </CardContent>
              </CardWrapper>
            </Link>
          )
        )}
      </CardContainer>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products?offset=0&limit=6"
  );

  return {
    props: { products: data.products },
  };
};

export default Products;
