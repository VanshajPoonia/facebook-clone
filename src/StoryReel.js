import React from "react";
import Story from "./Story";
import "./StoryReel.css";

//const img =
//"https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg";
const Sonny =
  "data:image/jpeg;base64,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";
const Qazi = "https://www.filepicker.io/api/file/9GCYH9YQnyqu4Ymwmzu9";
const Vanshaj =
  "https://lh3.googleusercontent.com/ggmTYVEtzC_n-LPWlF6bK-Kc8Vx8rQsH9aA35NT8mUE17DCdZziJ69KHUsKCh1MeF9XsWGy2iYF9WCll=w1080-h608-p-no-v0";
const David = "https://avatars.githubusercontent.com/u/61084415?v=4";
const Harry =
  "https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s900-c-k-c0x00ffffff-no-rj";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={Vanshaj}
        profileSrc="https://avatars.githubusercontent.com/u/74147463?s=60&v=4"
        title="Vanshaj Poonia"
      />
      <Story
        image={Sonny}
        profileSrc="https://avatars.githubusercontent.com/u/24712956?v=4"
        title="Sonny Sangha"
      />
      <Story
        image={Qazi}
        profileSrc="https://avatars.githubusercontent.com/u/60327839?s=200&v=4"
        title="Qazi"
      />
      <Story
        image={David}
        profileSrc="https://avatars.githubusercontent.com/u/61084415?v=4"
        title="David"
      />
      <Story
        image={Harry}
        profileSrc="https://www.codewithharry.com/assets/img/logo.png"
        title="Harry"
      />
    </div>
  );
}

export default StoryReel;