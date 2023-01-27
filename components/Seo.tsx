import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 그림의 방</title>
      ) : (
        <title>서동-그림의 방</title>
      )}
    </Head>
  );
}
