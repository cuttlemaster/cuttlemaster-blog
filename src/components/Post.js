import React from "react"
import styled from "@emotion/styled"
import theme from "../styles/Theme"

import ThisIsHowYouLoseTheTimeWar from "../images/this-is-how-you-lose-the-time-war.jpg"

const PostComponent = styled.div`
  margin-bottom: 100px;
`

const PostHeader = styled.div`
  position: relative;
  padding-top: 25px;

  span {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 15px 3px 15px;
    background-color: ${theme.colors.gray};
    color: ${theme.colors.htmlBG};
    font-family: ${theme.fonts.Rubik};
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
  }
`

const CoverImage = styled.img`
  float: left;
  margin-top: 6px;
  margin-right: 25px;
  margin-bottom: 20px;
  max-width: 200px;
  width: 100%; /* ensures the image respects the max-width */
  height: auto; /* ensures the image maintains aspect ratio */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
`

const Post = () => (
  <PostComponent>
    <PostHeader>
      <h2>
        "This Is How You Lose The Time War" by Max Gladstone and Amal El-Mothar
      </h2>
      <span>June 20, 2024</span>
    </PostHeader>

    <CoverImage
      src={ThisIsHowYouLoseTheTimeWar}
      alt="This Is How You Lose The Time War"
    />

    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
      hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
      dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
      viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
      Nullam mollis. Ut justo. Suspendisse potenti.
    </p>

    <p>
      Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
      luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
      commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
      tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
      sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
      Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
    </p>

    <p>
      Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
      ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
      dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
      adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
      pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
      vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
      vulputate vel, nisl.
    </p>

    <p>
      Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit
      amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis
      massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis,
      faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer
      sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in
      ante. Vivamus imperdiet nibh feugiat est.
    </p>

    <p>
      Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo,
      nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus
      fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet.
      Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient
      montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut
      condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor
      gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc.
      Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus.
      Donec metus. Curabitur gravida.
    </p>
  </PostComponent>
)

export default Post
