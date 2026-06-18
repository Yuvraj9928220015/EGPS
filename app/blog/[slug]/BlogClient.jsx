"use client";
import Link from "next/link"; // Link import
import { blogs } from "../data";
import "../blog.css";

export default function BlogClient({ slug }) {
  const selectedBlog = blogs.find((b) => b.slug === slug);

  if (!selectedBlog) {
    return (
      <>
        <div className="Blog">
          <div className="Blog-line"></div>
          <div className="BlogDetail-wrapper">
            <Link href="/blog" className="back-btn">← Back to Blogs</Link>
            <h2>Blog not found.</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Blog">
        <div className="Blog-line"></div>
        <div className="BlogDetail-wrapper">
          {/* Back button Link se */}
          <Link href="/blog" className="back-btn">← Back to Blogs</Link>

          <div className="BlogDetail-hero">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
            />
          </div>

          <div className="BlogDetail-body">
            <div
              className="BlogDetail-content"
              dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
            />
          </div>
        </div>
      </div>
    </>
  );
}