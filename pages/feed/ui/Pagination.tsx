import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import { ExistingSearchParams } from "remix-utils/existing-search-params";

import { LIMIT, type loader } from "../api/loader";

export function Pagination() {
  const [searchParams] = useSearchParams();
  const { articles } = useLoaderData<typeof loader>();
  const pageAmount = Math.ceil(articles.articlesCount / LIMIT);
  const currentPage = parseInt(searchParams.get("page") ?? "1", 10);
  const isCurrentPage = (index: number) => index + 1 === currentPage;

  return (
    <Form>
      <ExistingSearchParams exclude={["page"]} />
      <ul className="pagination">
        {Array(pageAmount)
          .fill(null)
          .map((_, index) => (
            <li key={index} className={`page-item ${isCurrentPage(index) ? "active" : ""}`}>
              {
                isCurrentPage(index) 
                  ? <span className="page-link">{index + 1}</span>
                  : <button className="page-link" name="page" value={index + 1}> {index + 1} </button>
              }
            </li>
          ))}
      </ul>
    </Form>
  );
}
