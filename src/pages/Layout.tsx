import { Container, Grid, MantineProvider } from "@mantine/core";
import React from "react";

const Layout: React.FC = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <MantineProvider
        theme={{
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                },
              },
            },
          },
        }}
      >
        <Container
          size="xxl"
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col
              style={{
                backgroundColor: "#a0a0a0",
                height: "100px",
                marginBottom: "1rem",
              }}
              span={4}
            >
              <h4>Layout Page</h4>
            </Grid.Col>
            <Grid.Col
              style={{
                backgroundColor: "#909090",
                height: "100px",
                marginBottom: "1rem",
              }}
              span={4}
            >
              2
            </Grid.Col>
            <Grid.Col
              style={{
                backgroundColor: "#808080",
                height: "100px",
                marginBottom: "1rem",
              }}
              span={4}
            >
              3
            </Grid.Col>
          </Grid>
        </Container>
        <Container size="xxl">
          <Grid>
            <Grid.Col
              md={6}
              lg={3}
              style={{
                backgroundColor: "#707070",
                height: "100px",
                marginBottom: "1rem",
              }}
            >
              1
            </Grid.Col>
            <Grid.Col
              md={6}
              lg={3}
              style={{
                backgroundColor: "#606060",
                height: "100px",
                marginBottom: "1rem",
              }}
            >
              2
            </Grid.Col>
            <Grid.Col
              md={6}
              lg={3}
              style={{
                backgroundColor: "#505050",
                height: "100px",
                marginBottom: "1rem",
              }}
            >
              3
            </Grid.Col>
            <Grid.Col
              md={6}
              lg={3}
              style={{
                backgroundColor: "#404040",
                height: "100px",
                marginBottom: "1rem",
              }}
            >
              4
            </Grid.Col>
          </Grid>
        </Container>
      </MantineProvider>
    </div>
  );
};

export default Layout;
