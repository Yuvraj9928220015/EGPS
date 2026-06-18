// "use client" hataya — Server Component
import Link from "next/link";
import { blogs } from "./data";
import "./blog.css";

// Metadata add karo
export const metadata = {
  title: "Blog | Green Future",
  description: "Explore our digital marketing blog for tips, strategies and insights.",
};

export default function BlogListPage() {
  return (
    <>
      <div className="About-container">
        <div className="About-overlay"></div>
        <div className="About-content">
          <p className="About-subtitle">Welcome To Green Future</p>
          <h1 className="About-title">Blog</h1>
        </div>
      </div>

      <div className="Blog">
        <div className="Blog-container-Box-Image">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="Blog-main-container">
                  <div className="Blog-container">
                    <div className="text-center mb-4">
                      <div className="blog-title">Explore Our Digital Marketing Blog</div>
                    </div>

                    {blogs.map((blog) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-12 col-12"
                        key={blog.slug}
                      >
                        {/* onClick hataya — Link lagaya */}
                        <Link
                          href={`/blog/${blog.slug}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div className="Blog-Section">
                            <div className="blog-img-wrapper">
                              <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="blog-content">
                              <div className="Blog-title">{blog.title}</div>
                              <div className="Blog-des">{blog.description}</div>
                              <div className="blog-btn">
                                <span>Read More →</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}