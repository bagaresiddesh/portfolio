import { useState, useEffect } from "react";

import Container from "../structure/container";
import Icon from "../utils/icon.util";

import css from "../../styles/structure/footer.module.scss";

import content from "../../content/footer.json";
import settings from "../../content/_settings.json";

export default function Footer() {
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch(settings.portfolio.repo_api)
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className={css.container}>
      <Container spacing={["verticalXXLrg", "bottomLrg"]}>
        <section className={css.sections}>
          <div className={css.social}>
            <h4>Social</h4>
            <div className={css.socialList}>
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    {icon == "envelope" && <Icon icon={["fas", icon]} />}
                    <Icon icon={["fab", icon]} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>© Siddesh Bagare. All rights reserved.</div>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={""} data-transition-in></canvas>
    </footer>
  );
}
