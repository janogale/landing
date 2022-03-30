import { render } from "react-dom";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlHero } from "gitlanding/GlHero";
import { GlArticle } from "gitlanding/GlArticle";
import { GlIllustration } from "gitlanding/GlIllustration";
import { GlFooter } from "gitlanding/GlFooter";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlSlider } from "gitlanding/GlSlider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";

function App() {
  return (
    <GlTemplate
      header={
        <GlHeader
          title="<Janogale/>"
          links={[
            {
              label: "About Me",
              href: "#",
            },
            {
              label: "Projects",
              href: "#",
            },
            {
              label: "Articles",
              href: "#",
            },
          ]}
          enableDarkModeSwitch={true}
          githubRepoUrl="https://github.com/janogale"
          githubButtonSize="large"
        />
      }
      headerOptions={{
        position: "fixed",
        isRetracted: "smart",
      }}
      footer={
        <GlFooter
          bottomDivContent="Hacked with ReactJS"
          phoneNumber="+252634220002"
          links={[
            {
              href: "https://github.com/janogale",
              label: "GitHub",
            },
            {
              href: "https://twitter.com/mjanogale",
              label: "Twitter",
            },
            {
              href: "https://www.linkedin.com/in/mukhtaar-mahamed-janagale-77907b167/",
              label: "LinkedIn",
            },
          ]}
        />
      }
    >
      <GlHero
        title="Mukhtar Mahamed"
        subTitle={"Full Stack Software Engineer"}
        imageSrc="https://camo.githubusercontent.com/4c8d92806e3c2322a2c390ffa0019c1d6f78a4d82108aa6946863ae362a763c8/68747470733a2f2f69322e77702e636f6d2f616c6c68746163636573732e696e666f2f77702d636f6e74656e742f75706c6f6164732f323031382f30332f70726f6772616d6d696e672e6769663f6669743d313238312532433731362673736c3d31"
        hasLinkToSectionBellow={true}
      />

      <GlArticle
        id="firstSection"
        title="Article title"
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
        nisl nec hendrerit rutrum, 
        mi enim semper arcu, ut imperdiet urna libero non metus. 
        Donec imperdiet ac nulla sit amet lacinia. 
        Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
        Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
        buttonLabel="Article Button label"
        buttonLink={{
          href: "https://example.com",
        }}
        illustration={
          <GlIllustration
            type="image"
            url="https://user-images.githubusercontent.com/39378411/135731808-6cf3e4dd-1047-4a0a-95be-65fdd6947315.png"
          />
        }
        hasAnimation={true}
        illustrationPosition="left"
      />

      <GlCards>
        {
          <>
            <GlLogoCard
              title="Card title"
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                nisl nec hendrerit rutrum, 
                mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Button Label"
              iconUrls={[
                "https://user-images.githubusercontent.com/39378411/135731999-a2d8f901-3d7d-40a9-b59f-102ee1facc45.png",
                "https://user-images.githubusercontent.com/39378411/135731995-136d4baf-58a6-4cb3-a72c-b8ddce835b3c.png",
              ]}
            />
            <GlLogoCard
              title="Card title"
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                nisl nec hendrerit rutrum, 
                mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Button Label"
              iconUrls={[
                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png",
              ]}
            />

            <GlLogoCard
              title="Card title"
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                nisl nec hendrerit rutrum, 
                mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Button Label"
              iconUrls={[
                "https://user-images.githubusercontent.com/39378411/135731991-3da13e97-c2f7-42b2-88ab-055aff0d6ae9.png",
                "https://user-images.githubusercontent.com/39378411/135731994-29a3c46a-0d92-4ec8-954e-39bfeeb06534.png",
                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png",
                "https://user-images.githubusercontent.com/39378411/135731990-8f64ce8e-d655-4ded-9561-3d7f6893d06e.png",
              ]}
              overlapIcons={true}
            />
          </>
        }
      </GlCards>

      <GlSectionDivider />

      <GlArticle
        title="Article title"
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
        nisl nec hendrerit rutrum, 
        mi enim semper arcu, ut imperdiet urna libero non metus. 
        Donec imperdiet ac nulla sit amet lacinia. 
        Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
        Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
        buttonLabel="Article Button label"
        buttonLink={{
          href: "https://example.com",
        }}
        illustration={
          <GlIllustration
            type="image"
            url="https://user-images.githubusercontent.com/39378411/135731816-5ba39459-d95e-413d-b515-92a7b0dc5acf.png"
          />
        }
        hasAnimation={true}
      />

      <GlCards>
        <>
          <GlProjectCard
            title="Project Card Title"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731821-0f1c7165-fada-418f-896a-c36a0e55171b.png"
          />
          <GlProjectCard
            title="Project Card Title"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731810-93193eba-ada5-460a-96ad-948215278850.png"
          />
          <GlProjectCard
            title="Project Card Title"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731819-1cf18697-e946-449f-ad6e-be414e341c40.png"
          />
          <GlProjectCard
            title="Project Card Title"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731914-0265b77e-3338-4747-b014-e845f16332a7.png"
          />
        </>
      </GlCards>

      <GlSectionDivider />

      <GlCheckList
        heading="Check List Heading"
        hasAnimation={true}
        elements={[
          {
            title: "List element title",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `,
          },
          {
            title: "List element title",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `,
          },
          {
            title: "List element title",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `,
          },
          {
            title: "List element title",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `,
          },
          {
            title: "List element title",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `,
          },
          {
            title: "List element title",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `,
          },
        ]}
      />

      <GlSectionDivider />

      <GlSlider
        title="Review slider title"
        autoPlayTimeInterval={4}
        slides={[
          <GlReviewSlide
            logoUrl="https://user-images.githubusercontent.com/39378411/135731994-29a3c46a-0d92-4ec8-954e-39bfeeb06534.png"
            descriptionMd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
        nisl nec hendrerit rutrum, 
        mi enim semper arcu, ut imperdiet urna libero non metus. 
        Donec imperdiet ac nulla sit amet lacinia. 
        Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
        Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.
            `}
            signature="Signature"
          />,
          <GlReviewSlide
            logoUrl="https://user-images.githubusercontent.com/39378411/135731995-136d4baf-58a6-4cb3-a72c-b8ddce835b3c.png"
            descriptionMd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
        nisl nec hendrerit rutrum, 
        mi enim semper arcu, ut imperdiet urna libero non metus. 
        Donec imperdiet ac nulla sit amet lacinia. 
        Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
        Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.
            `}
            signature="Signature"
          />,
          <GlReviewSlide
            logoUrl="https://user-images.githubusercontent.com/39378411/135731999-a2d8f901-3d7d-40a9-b59f-102ee1facc45.png"
            descriptionMd={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
        nisl nec hendrerit rutrum, 
        mi enim semper arcu, ut imperdiet urna libero non metus. 
        Donec imperdiet ac nulla sit amet lacinia. 
        Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
        Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.
            `}
            signature="Signature"
          />,
        ]}
      />
    </GlTemplate>
  );
}

render(<App />, document.getElementById("root"));
