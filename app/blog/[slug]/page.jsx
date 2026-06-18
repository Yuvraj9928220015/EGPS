import BlogClient from "./BlogClient";
import { blogs } from "../data";

// Add karo
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogClient slug={slug} />;
}