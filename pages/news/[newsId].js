// our-domain.com/news/[newsId] = Dynamic Routing

import { useRouter } from "next/router";

function NewsDynamicPage() {
  const router = useRouter();
  console.log(router.query.newsId); // Fetching concrete data
  const newsId = router.query.newsId; // Send a request to the backend API to fetch the news item with newsId

  return <h1>Nested Dynamic Routed Page for News</h1>;
}

export default NewsDynamicPage;
