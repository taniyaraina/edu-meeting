import md from 'markdown-it';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../../components/Layout';
import homeData from '../../../content/homePage.yaml';
import meetData from '../../../content/meeting.yaml';
import Heading from '../../components/atoms/Heading';
import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import Button from '../../components/atoms/Button';
import HorizontalLine from '../../components/atoms/HorizontalLine';

const Section = styled.div`
  .pt-5.has-text-black {
    p {
      padding-bottom: 1rem;
    }
    h3 {
      color: black;
    }
  }
`;

const ContentWrapper = ({ post }) => {
  return (
    <div className="section">
      <Section className="container is-medium">
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by1 card">
              <Image className="image-border" src={post.image} layout="fill" />
            </figure>
            <div className="card-content">
              <div className="content px-5">
                <Heading isLarge isBlack>
                  {post.title}
                </Heading>
                <p className="pb-3">{post.description}</p>
                <HorizontalLine borderColor />
                <div
                  className="pt-5 has-text-black"
                  dangerouslySetInnerHTML={{
                    __html: md().render(post.content),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="has-text-centered py-6">
          <Link href="/meeting">
            <a>
              <Button paddingHorizontal bgColor>
                {meetData.bottomButtonTitle}
              </Button>
            </a>
          </Link>
        </div>
      </Section>
      <HorizontalLine />
    </div>
  );
};

const meeting = ({ post }) => {
  return (
    <>
      <Layout data={homeData} post={post}>
        <section className="hero is-medium hero-background-image pt-6">
          <div className="hero-body has-text-centered">
            <h6 className="has-text-white has-text-weight-semibold is-size-4-mobile pb-3 is-uppercase">
              {meetData.subTitle}
            </h6>
            <Heading paddingVerticalNone isUppercase>
              {meetData.title}
            </Heading>
          </div>
        </section>
        <ContentWrapper post={post} />
      </Layout>
    </>
  );
};

export default meeting;

const filesDir = 'content/meetings';

export async function getStaticPaths() {
  const paths = getPathsFromDir(filesDir);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  if (!slug) return { notFound: true };

  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );
  return {
    props: {
      post: { content, slug, ...frontmatter },
    },
    revalidate: 3600,
  };
}
