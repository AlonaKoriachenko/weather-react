import React from "react";

export default function OpenSource() {
  return (
    <div>
      <small>
        <div>
          Hosted with{" "}
          <a href="https://zingy-paprenjak-a89e94.netlify.app/" target="_blank">
            Netlify
          </a>
        </div>
        <a
          href="https://github.com/AlonaKoriachenko/project-weather-app"
          target="_blank"
        >
          Open-source code,
        </a>{" "}
        by Alona Koriachenko
        <input
          type="image"
          src="images/Logo-linkedin.png"
          class="sticker-lkd"
          onclick="goLinkedin()"
        />
      </small>
    </div>
  );
}
