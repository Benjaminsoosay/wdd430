// app/blog/[slug]/page.tsx
import { PageProps } from 'next';

export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  return <h1>Blog post: {slug}</h1>;
}

export async function generateStaticParams() {
  return [{ slug: 'hello-world' }, { slug: 'nextjs-guide' }];
}