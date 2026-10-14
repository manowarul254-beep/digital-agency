import BlogGrid from "../Components/section/Blog/BlogGrid";
import BlogHeader from "../Components/section/Blog/BlogHeader";
import Subscribe from "../Components/section/Blog/Subscribe";

export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <BlogGrid/>      
      <Subscribe/>
    </>
  );
}