/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./LandingPage.scss";
import TextBox from "./TextBox";
import Article from "./Article";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-scroll";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.handleIndicatorClick = this.handleIndicatorClick.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }
  handleIndicatorClick(index) {
    const divCarousel = this.myRef.current.querySelector(".carousel");
    const active = divCarousel.querySelector(".active.carousel-item");
    active.classList.remove("active");
    const next = divCarousel.querySelector(
      `.carousel-item:nth-child(${index + 1})`
    );

    next.classList.add("active");
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <>
        <div className="nemtudom">
          <div className="mesh"></div>
          <div className="myIndicators">
            <div
              onClick={() => {
                this.handleIndicatorClick(0);
              }}
              className={`indicator ${
                this.state.activeIndex === 0 ? "active" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                this.handleIndicatorClick(1);
              }}
              className={`indicator ${
                this.state.activeIndex === 1 ? "active" : ""
              }`}
            ></div>
            <div
              onClick={() => {
                this.handleIndicatorClick(2);
              }}
              className={`indicator ${
                this.state.activeIndex === 2 ? "active" : ""
              }`}
            ></div>
          </div>
          <TextBox
            btnText="Zu den öffnungszeiten"
            btnOnClick={this.props.openPopup}
          >
            <h1>kfz-service in sulzbach murr</h1>
            <h3>Ihr partner für service rund um's auto</h3>
            <h5>Mit uns fahren Sie besser</h5>
          </TextBox>
          <div className="parallax" ref={this.myRef}>
            <Carousel
              controls={false}
              indicators={false}
              onSlide={(index) => {
                const divCarousel = this.myRef.current.querySelector(
                  ".carousel"
                );
                const next = divCarousel.querySelectorAll(
                  `.carousel-item:not(:nth-child(${index + 1}))`
                );
                [].forEach.call(next, (node) => {
                  node.classList.remove("active");
                });
                // console.log(next);

                this.setState({
                  activeIndex: index,
                });
              }}
            >
              <Carousel.Item interval={1500}>
                <img
                  className="carousel-img"
                  src="/img/audir8.png"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3500} style={{}}>
                <img
                  className="carousel-img"
                  src="/img/audia5.png"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500} style={{}}>
                <img
                  className="carousel-img"
                  src="/img/factory.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  {/* <h3></h3>
                <p></p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <section className="about" id="about">
            <Article
              pictureFirst={true}
              title="Herzlich Willkomen bei der Uwe Schäf KFZ meisterbetrieb"
              subTitle=""
              image="/img/place.jpeg"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ex asperiores eveniet distinctio at quibusdam iusto illo fugiat
                quod dolore, vel facere totam libero inventore alias beatae.
                Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus
                natus laudantium fuga odit ad consequuntur accusamus id,
                necessitatibus quod harum ex ratione dolorum tempora.
              </p>
            </Article>
          </section>

          <section className="service" id="leistungen">
            <div className="service-container">
              <Article
                transparent={true}
                pictureFirst={false}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>

              <Article
                transparent={false}
                pictureFirst={true}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>
              <Article
                transparent={true}
                pictureFirst={false}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>

              <Article
                transparent={false}
                pictureFirst={true}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>
              <Article
                transparent={true}
                pictureFirst={false}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>
              <Article
                transparent={false}
                pictureFirst={true}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>
              <Article
                transparent={true}
                pictureFirst={false}
                title=""
                subTitle="Leistungen"
                image="/img/car-service.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta ex asperiores eveniet distinctio at quibusdam iusto
                  illo fugiat quod dolore, vel facere totam libero inventore
                  alias beatae. Fuga sapiente itaque dolorem voluptates sunt?
                  Totam, temporibus natus laudantium fuga odit ad consequuntur
                  accusamus id, necessitatibus quod harum ex ratione dolorum
                  tempora.
                </p>
              </Article>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LandingPage;
