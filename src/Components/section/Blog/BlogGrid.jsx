import { useState } from "react";
import Container from "../../ui/Container";
import Pagination from "../../ui/Pagination";
import BlogCard from "./BlogCard";
import { posts } from "../../../data/posts";

export default function BlogGrid() {
  const [page, setPage] = useState(3);

  return (
    <Container>
      <div className="py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <Pagination className="mt-12" page={page} onChange={setPage} />
      </div>
    </Container>
  );
}