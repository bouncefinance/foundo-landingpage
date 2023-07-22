import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CenterSection from "components/CenterSection";
import NecklaceJson from "assets/lottie/animatinDm4.json";
// import LogoIcon from "assets/img/detail/logo.png";
// import ShareIcon from "assets/img/share.png";
import { useIsSMDown } from "../../theme/useTheme";
// import ReactCopyToClipboard from "react-copy-to-clipboard";
// import { toast } from "react-toastify";

require("@lottiefiles/lottie-player");
const TokenDetail: React.FC = () => {
  const isSm = useIsSMDown();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: isSm ? "column nowrap" : "row nowrap",
        justifyContent: isSm ? "flex-start" : "center",
        alignItems: "center",
        padding: isSm ? "150px 40px 0" : "",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {isSm && (
        <>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "24px",
              }}
              mb={"24px"}
            >
              TOKEN DETAILS
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#959595",
                fontSize: "14px",
              }}
              mb={"12px"}
            >
              CONTRACT ADRESS
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                wordBreak: "break-all",
              }}
              mb={"24px"}
            >
              TBD
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#959595",
                fontSize: "14px",
              }}
              mb={"12px"}
            >
              NETWORK
            </Typography>
            {/* <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "24px",
              }}
              mb={"24px"}
            >
              <img
                src={LogoIcon}
                style={{
                  position: "relative",
                  top: "-3px",
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  marginRight: "12px",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                alt=""
              />
              BNB Chain
              <ReactCopyToClipboard
                text={window.location.href}
                onCopy={() => toast.success("Successfully copied")}
              >
                <img
                  src={ShareIcon}
                  style={{
                    position: "relative",
                    top: "-3px",
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginLeft: "12px",
                    verticalAlign: "middle",
                    cursor: "pointer",
                  }}
                  alt=""
                />
              </ReactCopyToClipboard>
            </Typography> */}
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                wordBreak: "break-all",
              }}
              mb={"24px"}
            >
              TBD
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#959595",
                fontSize: "14px",
              }}
              mb={"12px"}
            >
              TOKEN ID
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
              }}
              mb={"24px"}
            >
                TBD
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#959595",
                fontSize: "16px",
              }}
              mb={"12px"}
            >
              TOKEN TYPE
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              ERC721
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "flex-end",
            }}
            mb={"80px"}
          >
            <lottie-player
              autoplay={true}
              src={JSON.stringify(NecklaceJson)}
              loop={true}
              style={{
                width: "227px",
                height: "auto",
                cursor: "pointer",
                marginRight: "-50px",
              }}
            ></lottie-player>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              paddingBottom: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
              }}
              gap={"32px"}
              mb={"24px"}
            >
              <Typography
                component={"a"}
                href={"/"}
                target={"_blank"}
                style={{
                  textDecoration: "none",
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Terms Of Service
              </Typography>
              <Typography
                component={"a"}
                href={"/"}
                target={"_blank"}
                style={{
                  textDecoration: "none",
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Privacy Policy
              </Typography>
            </Box>
            <Typography
              component={"a"}
              href={"/"}
              target={"_blank"}
              style={{
                textDecoration: "none",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              ©2023 Bounce dao Ltd. All rights reserved.
            </Typography>
          </Box>
        </>
      )}
      {!isSm && (
        <>
          <CenterSection
            style={{
              flexFlow: isSm ? "column nowrap" : "row nowrap",
              justifyContent: "center",
            }}
          >
            <>
              <Grid maxWidth={800} container rowSpacing={"24px"}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "44px",
                    }}
                  >
                    TOKEN DETAILS
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#959595",
                      fontSize: "16px",
                    }}
                  >
                    CONTRACT ADRESS
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    TBD
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#959595",
                      fontSize: "16px",
                    }}
                  >
                    NETWORK
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    <img
                      src={LogoIcon}
                      style={{
                        position: "relative",
                        top: "-3px",
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        marginRight: "12px",
                        verticalAlign: "middle",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                    BNB Chain
                    <ReactCopyToClipboard
                      text={window.location.href}
                      onCopy={() => toast.success("Successfully copied")}
                    >
                      <img
                        src={ShareIcon}
                        style={{
                          position: "relative",
                          top: "-3px",
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          marginLeft: "12px",
                          verticalAlign: "middle",
                          cursor: "pointer",
                        }}
                        alt=""
                      />
                    </ReactCopyToClipboard>
                  </Typography> */}
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    TBD
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#959595",
                      fontSize: "16px",
                    }}
                  >
                    TOKEN ID
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    100
                  </Typography> */}
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    TBD
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#959595",
                      fontSize: "16px",
                    }}
                  >
                    TOKEN TYPE
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    ERC721
                  </Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  flex: 1,
                  maxWidth: "500px",
                }}
              >
                <lottie-player
                  autoplay={true}
                  src={JSON.stringify(NecklaceJson)}
                  loop={true}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                  }}
                ></lottie-player>
              </Box>
            </>
          </CenterSection>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
            }}
          >
            <CenterSection
              style={{
                height: "60px",
              }}
            >
              <>
                <Typography
                  component={"a"}
                  href={"/"}
                  target={"_blank"}
                  style={{
                    textDecoration: "none",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  ©2023 Bounce dao Ltd. All rights reserved.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                  gap={"40px"}
                >
                  <Typography
                    component={"a"}
                    href={"/"}
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Terms Of Service
                  </Typography>
                  <Typography
                    component={"a"}
                    href={"/"}
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Box>
              </>
            </CenterSection>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TokenDetail;
